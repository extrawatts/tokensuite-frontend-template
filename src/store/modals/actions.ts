import { SetState } from 'zustand';
import { ModalsStore, ModalsStoreActions } from 'types/store/modals';

const modalsStoreActions = (set: SetState<ModalsStore>): ModalsStoreActions => ({
  openModal: (modal, props) => set((state) => ({ ...state, modal: modal, props })),
  closeModal: () =>
    set((state) => ({
      ...state,
      modal: undefined,
    })),
});

export default modalsStoreActions;
