import React, { useEffect, useMemo } from 'react';
import { Modal } from 'src/components/ui/molecules';
import FundLpProcess from 'src/components/ui/molecules/processes/fund-lp-process';
import useProcessStore from 'src/store/process';
import { IFundLpParams, PROCESS_TYPE } from 'types';
import { ProcessModalProps } from 'types/components/ui/organisms/modals/process-modal';

const ProcessModal: React.FC<ProcessModalProps<PROCESS_TYPE>> = ({ processData }) => {
  const { logItem } = useProcessStore();
  useEffect(() => {
    if (!logItem) return;
    console.log(logItem);

    window.onbeforeunload = () => {
      localStorage['process'] = logItem;
      return 'You are leaving the page, process will be terminated';
    };
  }, [logItem]);
  const currentProcess = useMemo(() => {
    switch (processData?.type) {
      case PROCESS_TYPE.GENERATE_LP: {
        return (
          <FundLpProcess step={processData?.step} params={processData?.params as IFundLpParams} />
        );
      }
      default: {
        return <></>;
      }
    }
  }, [processData]);

  console.log(processData?.type);

  return <Modal blur>{currentProcess}</Modal>;
};
export default ProcessModal;
