import { GraphQLClient } from 'graphql-request';

const graphqlClientState = {
  graphqlClient: new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || ''),
};

export default graphqlClientState;
