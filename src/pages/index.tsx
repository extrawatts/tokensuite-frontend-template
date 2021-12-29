import React from 'react';
import type { NextPage } from 'next';
import Home from 'src/components/templates/home';
import { usePostsQuery } from 'src/graphql/generated';
import useGraphqlClientStore from 'src/store/graphql-client';
const HomePage: NextPage = () => {
  const { graphqlClient } = useGraphqlClientStore();
  const { data, isLoading } = usePostsQuery(graphqlClient);
  console.log(data);
  console.log(isLoading);

  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
