import React from 'react';
import { Button } from 'src/components/ui/atoms';
import { Modal } from 'src/components/ui/molecules';
import { ConfirmationModalProps } from 'types';
// import styles from './confirmation-modal.module.scss';
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ confirmationData }) => {
  return (
    <Modal blur title={confirmationData?.title}>
      {confirmationData?.description}
      <Button color="primary" size="lg" onClick={confirmationData?.handleConfirm}>
        Confirm
      </Button>
      <Button color="secondary" size="lg" onClick={confirmationData?.handleReject}>
        Reject
      </Button>
    </Modal>
  );
};
export default ConfirmationModal;
