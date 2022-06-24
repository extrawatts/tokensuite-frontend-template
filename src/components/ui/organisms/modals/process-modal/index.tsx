import React, { useEffect } from 'react';
import Button from 'src/components/ui/atoms/button';
import Title from 'src/components/ui/atoms/title';
import Text from 'src/components/ui/atoms/text';
import Modal from 'src/components/ui/molecules/modal';
import useProcessStore from 'src/store/process';
import { ProcessModalProps } from 'types/components/ui/organisms/modals/process-modal';

const ProcessModal: React.FC<ProcessModalProps> = ({ processData }) => {
  const step = processData?.step;
  const { executeProcesses, processes, currentStep, logItem } = useProcessStore();

  useEffect(() => {
    if (processData?.processes) executeProcesses(processData.processes, step);
  }, [processData]);

  useEffect(() => {
    if (!logItem) return;

    window.onbeforeunload = () => {
      localStorage['process'] = logItem;
      return 'You are leaving the page, process will be terminated';
    };
  }, [logItem]);

  return (
    <Modal blur>
      <div className="w-[500px] h-[500px] bg-white rounded-lg">
        <Button
          color="secondary"
          size="lg"
          onClick={() => {
            executeProcesses(processes, currentStep);
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
      </div>
    </Modal>
  );
};
export default ProcessModal;
