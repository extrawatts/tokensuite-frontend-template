import React from 'react';
import { Modal } from 'src/components/ui/molecules';
import { ConfirmationModalProps } from 'types';
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ confirmationData }) => {
  return (
    <Modal blur title={confirmationData?.title}>
      {confirmationData?.description}
    </Modal>
  );
};
export default ConfirmationModal;
