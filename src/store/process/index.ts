import { ProcessStore } from 'types';
import { GetState, SetState } from 'zustand';
import processStoreActions from './actions';
import state from './state';
import { createStore } from 'src/utils';

const processStore = (set: SetState<ProcessStore>, get: GetState<ProcessStore>) => ({
  ...state,
  ...processStoreActions(set, get),
});

const useProcessStore = createStore(processStore);

export default useProcessStore;
