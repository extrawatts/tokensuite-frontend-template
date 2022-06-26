import { IProcessParams } from 'types/components';

export enum PROCESS_STATUSES {
  IDLE,
  IN_PROGRESS,
  DONE,
  ERROR,
}

export enum PROCESS_TYPE {
  GENERATE_LP,
  TEST_PROCESS,
}

export interface IProcess {
  status: PROCESS_STATUSES;
  title: string;
  description: string;
  transaction: () => Promise<any>;
  type: PROCESS_TYPE;
  step: number;
  errorMessage: string;
  hash: string;
}

export interface ProcessStoreState {
  processes: IProcess[];
  logItem: string;
  currentStep: number;
}

export interface ProcessStoreActions {
  saveLogItem: (logItem: string) => void;
  executeProcesses: <T extends PROCESS_TYPE>(
    processes: IProcess[],
    processParams: IProcessParams[T],
    step?: number
  ) => void;
  setProcesses: (processes: IProcess[]) => void;
  setProcessErrorMessage: (index: number, message: string) => void;
  setProcessHash: (index: number, hash: string) => void;
}

export type ProcessStore = ProcessStoreState & ProcessStoreActions;
