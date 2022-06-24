import { LoginModalProps } from 'types/components/ui/organisms/modals/login-modal';

export type Modals = 'login' | 'signup' | 'connect-wallet';

export type ModalProps = {
  loginData: LoginModalProps['loginData'];
};

export interface ModalsStoreState {
  modal?: Modals;
  props?: Partial<ModalProps>;
}

export interface ModalsStoreActions {
  openModal: (modal: Modals, props?: Partial<ModalProps>) => void;
  closeModal: () => void;
}

export type ModalsStore = ModalsStoreState & ModalsStoreActions;
