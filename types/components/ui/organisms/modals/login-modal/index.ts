import { ModalsStoreActions } from 'types/store/modals';

export interface LoginModalProps {
  onClose: ModalsStoreActions['closeModal'];
  loginData?: {
    name: string;
    myFavObj: {
      name: string;
      id: number;
    };
  };
}
