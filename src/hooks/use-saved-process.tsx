import { useEffect } from 'react';
import useModalsStore from 'src/store/modals';

const useSavedProcess = () => {
  const { openModal, closeModal } = useModalsStore();
  useEffect(() => {
    if (!localStorage['process']) return;
    const _processData = JSON.parse(localStorage['process']);
    // console.log(_processData);
    openModal('confirmation-modal', {
      confirmationData: {
        handleConfirm: () => {
          openModal('process-modal', {
            processData: {
              type: _processData.type,
              step: _processData.step,
              params: _processData.processParams,
            },
          });
        },
        handleReject: () => {
          delete localStorage['process'];
          closeModal();
        },
        title: 'Some process left',
        description: 'Do you want to continue',
      },
    });
  }, [openModal]);
};
export default useSavedProcess;
