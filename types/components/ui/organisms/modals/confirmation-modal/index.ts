export interface ConfirmationModalProps {
  confirmationData?: {
    handleConfirm: () => void;
    handleReject: () => void;
    description: string;
    title: string;
  };
}
