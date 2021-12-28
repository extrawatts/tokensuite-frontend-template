import { GraphQLClient } from 'graphql-request';

export interface GraphqlClientState {
  graphqlClient: GraphQLClient;
}

export interface GraphqlClientActions {
  getClient: () => GraphQLClient;
}

export type GraphqlClientStore = GraphqlClientState & GraphqlClientActions;
