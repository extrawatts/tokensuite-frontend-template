import create, { SetState } from 'zustand';
import { ModalsStore } from 'types/store/modals';
import modalsStoreActions from './actions';
import state from './state';

const modalsStore = (set: SetState<ModalsStore>) => ({
  ...state,
  ...modalsStoreActions(set),
});

const useModalsStore = create<ModalsStore>(modalsStore);

export default useModalsStore;
