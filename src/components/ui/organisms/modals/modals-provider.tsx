import React, { useMemo } from 'react';
import { useSavedProcess } from 'src/hooks';
import useModalsStore from 'src/store/modals';
import ConfirmationModal from './confirmation-modal';
import LoginModal from './login-modal';
import ProcessModal from './process-modal';

const ModalsProvider: React.FC = ({ children }) => {
  const { modal, props, closeModal } = useModalsStore();
  useSavedProcess();

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
