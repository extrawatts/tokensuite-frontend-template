import React from 'react';
import { Button, Title, Text } from 'src/components/ui/atoms';
import useProcessStore from 'src/store/process';
import { IProcessParams, PROCESS_TYPE } from 'types';
interface ProcessContentProps<T extends PROCESS_TYPE> {
  params: IProcessParams[T];
}
const ProcessContent: React.FC<ProcessContentProps<PROCESS_TYPE>> = ({ params }) => {
  const { processes, currentStep, executeProcesses } = useProcessStore();

  return (
    <>
      <Button
        color="secondary"
        size="lg"
        onClick={() => {
          executeProcesses(processes, params, currentStep);
        }}
      >
        Retry
      </Button>
      {processes.map((process) => {
        return (
          <div key={process.step}>
            <Title size="h4">{process.title}</Title>
            <Text size="subtitle" color="primary">
              {process.description}
            </Text>
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
