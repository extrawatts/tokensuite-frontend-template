import { PROCESS_TYPE, ProcessModalProps, LoginModalProps } from 'types';

export type Modals = 'login' | 'signup' | 'connect-wallet' | 'process-modal';

export type ModalPropsStore = {
  loginData: LoginModalProps['loginData'];
  processData: ProcessModalProps<PROCESS_TYPE>['processData'];
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
