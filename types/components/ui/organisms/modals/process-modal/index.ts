import { IFundLpParams, PROCESS_TYPE } from 'types';

export type IProcessParams = {
  [PROCESS_TYPE.GENERATE_LP]: IFundLpParams;
  [PROCESS_TYPE.TEST_PROCESS]: 'helloworld';
};

export interface ProcessModalProps<T extends PROCESS_TYPE> {
  processData?: {
    type: PROCESS_TYPE;
    step: number;
    params: IProcessParams[T];
  };
}
