import { IFundLpParams, IProcess, PROCESS_STATUSES, PROCESS_TYPE } from 'types';

const useFundLp = (params: IFundLpParams) => {
  console.log(params);

  const test1 = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ hash: 'teasdgasdgst' });
      }, 2000);
    });

  const test2 = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        return reject('fdail');
      }, 2000);
    });

  const success = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ hash: 'tesing' });
      }, 2000);
    });
  };
  const processes: IProcess[] = [
    {
      description: 'Approving',
      status: PROCESS_STATUSES.IDLE,
      step: 0,
      title: 'Approve',
      transaction: test1,
      type: PROCESS_TYPE.GENERATE_LP,
      errorMessage: '',
      hash: '',
    },
    {
      description: 'Funding',
      status: PROCESS_STATUSES.IDLE,
      step: 1,
      title: 'Funding',
      transaction: test2,
      type: PROCESS_TYPE.GENERATE_LP,
      errorMessage: '',
      hash: '',
    },
    {
      description: 'Success',
      status: PROCESS_STATUSES.IDLE,
      step: 2,
      title: 'Success',
      transaction: success,
      type: PROCESS_TYPE.GENERATE_LP,
      errorMessage: '',
      hash: '',
    },
  ];
  return processes;
};
export default useFundLp;
