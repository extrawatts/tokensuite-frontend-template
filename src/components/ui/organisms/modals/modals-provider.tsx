import React, { useEffect, useMemo } from 'react';
import useModalsStore from 'src/store/modals';
import ConfirmationModal from './confirmation-modal';
import LoginModal from './login-modal';
import ProcessModal from './process-modal';

const ModalsProvider: React.FC = ({ children }) => {
  const { openModal, modal, props, closeModal } = useModalsStore();

  useEffect(() => {
    if (localStorage['process']) {
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
    }
  }, [openModal]);

  const currentModal = useMemo(() => {
    switch (modal) {
      case 'login':
        return <LoginModal onClose={closeModal} loginData={props?.loginData} />;
      case 'process-modal':
        return <ProcessModal processData={props?.processData} />;
      case 'confirmation-modal':
        return <ConfirmationModal confirmationData={props?.confirmationData} />;
      default:
        return <></>;
    }
  }, [modal]);

  return (
    <>
      {currentModal}
      {children}
    </>
  );
};

export default ModalsProvider;
