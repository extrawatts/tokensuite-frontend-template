import React from 'react';
import useProcessStore from 'src/store/process';
import { IProcessParams, PROCESS_TYPE } from 'types';
interface ProcessContentProps<T extends PROCESS_TYPE> {
  params: IProcessParams[T];
}
const ProcessContent: React.FC<ProcessContentProps<PROCESS_TYPE>> = ({ params }) => {
  const { processes, currentStep, executeProcesses } = useProcessStore();

  return (
    <>
      <button
        color="secondary"
        onClick={() => {
          executeProcesses(processes, params, currentStep);
        }}
      >
        Retry
      </button>
      {processes.map((process) => {
        return (
          <div key={process.step}>
            {process.title}
            {process.description}
            <div>{process.status}</div>
            <div>{process.hash}</div>
            <div>{process.errorMessage}</div>
          </div>
        );
      })}
    </>
  );
};
export default ProcessContent;
