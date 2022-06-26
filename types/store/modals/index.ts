import { PROCESS_TYPE, ProcessModalProps, LoginModalProps, ConfirmationModalProps } from 'types';

export type Modals = 'login' | 'signup' | 'connect-wallet' | 'process-modal' | 'confirmation-modal';

export type ModalPropsStore = {
  loginData: LoginModalProps['loginData'];
  processData: ProcessModalProps<PROCESS_TYPE>['processData'];
  confirmationData: ConfirmationModalProps['confirmationData'];
};

export interface ModalsStoreState {
  modal?: Modals;
  props?: Partial<ModalPropsStore>;
}

export interface ModalsStoreActions {
  openModal: (modal: Modals, props?: Partial<ModalPropsStore>) => void;
  closeModal: () => void;
}

export type ModalsStore = ModalsStoreState & ModalsStoreActions;
