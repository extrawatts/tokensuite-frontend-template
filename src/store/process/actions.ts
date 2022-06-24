import { IProcess, PROCESS_STATUSES, ProcessStore, ProcessStoreActions } from 'types';
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
  executeProcesses: async (processes: IProcess[], index = 0) => {
    // const process = processes[index];

    set((state) => {
      state.processes = processes;
      state.currentStep = index;
    });
    set((state) => {
      state.processes.map((process) => {
        process.errorMessage = '';
      });
    });

    for (let i = get().currentStep; i < processes.length; i++) {
      const process = processes[i];
      set((state) => {
        state.processes[i].status = PROCESS_STATUSES.IN_PROGRESS;
      });
      try {
        const response = await process.transaction();
        set((state) => {
          state.processes[i].status = PROCESS_STATUSES.DONE;
          if (response.hash) {
            state.processes[i].hash = response.hash;
            state.saveLogItem(JSON.stringify({ type: process.type, step: index + 1 }));
          }
          state.saveLogItem(JSON.stringify({ type: process.type, step: index }));
        });
      } catch (e: any) {
        set((state) => {
          state.processes[i].status = PROCESS_STATUSES.ERROR;
          if (typeof e === 'string') state.processes[i].errorMessage = e;
          else state.processes[i].errorMessage = 'Transaction failed';
          state.currentStep = i;
          state.saveLogItem(JSON.stringify({ type: process.type, step: index }));
          return state;
        });
        break;
      }
    }
  },
});

export default processStoreActions;
