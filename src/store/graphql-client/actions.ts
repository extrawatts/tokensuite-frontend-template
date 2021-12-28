import { GraphQLClient } from 'graphql-request';
import { GraphqlClientStore } from 'src/types/store/graphql-client';
import { GetState, SetState } from 'zustand';

const graphqlClientActions = (
  set: SetState<GraphqlClientStore>,
  get: GetState<GraphqlClientStore>
) => ({
  getClient: () => {
    let graphqlClient = get().graphqlClient;
    if (!graphqlClient) {
      graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || '');
    }

    /*
     * @INFO Please checkout graphql-request documentation to set default headers.
     * Here is an example
     * client.setHeaders({
     * authorization: 'Bearer MY_TOKEN',
     * anotherheader: 'header_value'
     * })
     */

    set((state) => ({ ...state, graphqlClient }));
    return graphqlClient;
  },
});

export default graphqlClientActions;
