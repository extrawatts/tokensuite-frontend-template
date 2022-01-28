import React from 'react';
import Modal from 'src/components/ui/molecules/modal';
import { LoginModalProps } from 'types/components/ui/organisms/modals/login-modal';

const LoginModal: React.FC<LoginModalProps> = ({ onClose, loginData }) => {
  return (
    <Modal onClose={onClose} blur>
      hey there {loginData?.name} {loginData?.myFavObj.name}
    </Modal>
  );
};

export default LoginModal;
