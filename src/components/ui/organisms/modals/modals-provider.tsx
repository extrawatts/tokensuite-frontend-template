import React, { useMemo } from 'react';
import useModalsStore from 'src/store/modals';
import LoginModal from './login-modal';
import ProcessModal from './process-modal';

const ModalsProvider: React.FC = ({ children }) => {
  const { modal, props, closeModal } = useModalsStore();

  const currentModal = useMemo(() => {
    switch (modal) {
      case 'login':
        return <LoginModal onClose={closeModal} loginData={props?.loginData} />;
      case 'process-modal':
        return <ProcessModal processData={props?.processData} />;
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
