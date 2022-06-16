export enum ProcessStatuses {
  IDLE,
  IN_PROGRESS,
  DONE,
  ERROR,
}

export enum ProcessType {
  GENERATE_LP,
}

export interface Process {
  status: ProcessStatuses;
  title: string;
  description: string;
  transaction: any;
  type: ProcessType;
  step: number;
}

export interface UseTransaction {
  execute: (processes: Process[]) => void;
  status: ProcessStatuses;
  description: string;
  hash: string;
  setHash: any;
  running: boolean;
  setRunning: any;
  setStatus: any;
  errorMessage: string;
}
