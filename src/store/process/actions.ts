import { PROCESS_STATUSES, ProcessStore, ProcessStoreActions } from 'types';
import { GetState, SetState } from 'zustand';

const processStoreActions = (
  set: SetState<ProcessStore>,
  get: GetState<ProcessStore>
): ProcessStoreActions => ({
  saveLogItem: (logItem) =>
    set((state) => {
      state.logItem = logItem;
    }),

  setProcesses: (processes) => {
    set((state) => {
      state.processes = processes;
    });
  },
  setProcessErrorMessage: (index, message) => {
    set((state) => {
      state.processes[index].errorMessage = message;
    });
  },
  setProcessHash(index, hash) {
    set((state) => {
      state.processes[index].hash = hash;
    });
  },
  executeProcesses: async (processes, processParams, step = 0) => {
    // const process = processes[step];
    delete localStorage['process'];

    set((state) => {
      state.processes = processes;
      state.currentStep = step;
    });
    set((state) => {
      state.processes.map((process) => {
        process.errorMessage = '';
      });
    });
    if (step !== 0) {
      set((state) => {
        state.processes.map((process, idx) => {
          if (idx < step) process.status = PROCESS_STATUSES.DONE;
        });
      });
    }

    for (let i = get().currentStep; i < processes.length; i++) {
      const process = processes[i];
      set((state) => {
        state.processes[i].status = PROCESS_STATUSES.IN_PROGRESS;
      });
      try {
        const response = await process.transaction();
        set((state) => {
          state.processes[i].status = PROCESS_STATUSES.DONE;
          if (response.setProcessHash) {
            state.processes[i].hash = response.hash;
            /**
             * @IMPORTANT if there is a hash it means that transaction is already started.
             * Although it can fail for numerous reasons right now we assume that user
             * proceed to next stage. A better logic might be applied with backend.
             * @TODO
             */
            state.saveLogItem(JSON.stringify({ type: process.type, step: i + 1, processParams }));
          }
          state.saveLogItem(JSON.stringify({ type: process.type, step: i, processParams }));
        });
      } catch (e: any) {
        set((state) => {
          state.processes[i].status = PROCESS_STATUSES.ERROR;
          if (typeof e === 'string') state.processes[i].errorMessage = e;
          else state.processes[i].errorMessage = 'Transaction failed';
          state.currentStep = i;
          state.saveLogItem(JSON.stringify({ type: process.type, step: i, processParams }));
          return state;
        });
        break;
      }
    }
  },
});

export default processStoreActions;
