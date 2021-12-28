import { GraphqlClientStore } from 'src/types/store/graphql-client';
import create, { GetState, SetState } from 'zustand';
import graphqlClientActions from './actions';
import state from './state';

const graphqlClient = (set: SetState<GraphqlClientStore>, get: GetState<GraphqlClientStore>) => ({
  ...state,
  ...graphqlClientActions(set, get),
});

const useGraphqlClientStore = create<GraphqlClientStore>(graphqlClient);

export default useGraphqlClientStore;
