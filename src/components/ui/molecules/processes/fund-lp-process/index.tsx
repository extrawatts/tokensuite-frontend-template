import React, { useEffect } from 'react';
import { useFundLp } from 'src/hooks';
import useProcessStore from 'src/store/process';
import { IProcessParams, PROCESS_TYPE } from 'types';
import ProcessContent from '../common/process-content';

interface FundLpProcessProps<T extends PROCESS_TYPE> {
  params: IProcessParams[T];
  step: number;
}

const FundLpProcess: React.FC<FundLpProcessProps<PROCESS_TYPE.GENERATE_LP>> = ({
  params,
  step,
}) => {
  const processData = useFundLp(params);
  const { executeProcesses } = useProcessStore();

  useEffect(() => {
    if (processData) {
      const _copyData = [...processData];
      executeProcesses(_copyData, params, step);
    }
  }, []);

  return (
    <div>
      <ProcessContent params={params} />
    </div>
  );
};
export default FundLpProcess;
