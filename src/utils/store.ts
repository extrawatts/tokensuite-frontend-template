import create, { GetState, SetState, State, StateCreator, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

/* export const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set: SetState<T>, get: GetState<T>) =>
    config((fn) => set(produce<T>(fn)), get); */

export const immer =
  <T extends State>(config: StateCreator<T>) =>
  (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) =>
    config((fn: any) => set(produce(fn)), get, api);

export const log =
  <T extends State>(config: StateCreator<T>) =>
  (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) =>
    config(
      (args) => {
        console.log('  applying', args);
        set(args);
        console.log('  new state', get());
      },
      get,
      api
    );

export const createStore = <T extends object>(
  store: StateCreator<T, SetState<T>, GetState<T>, StoreApi<T>>
) => create(devtools(immer(store)));
