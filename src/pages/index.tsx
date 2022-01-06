import React from 'react';
import type { NextPage } from 'next';
import Home from 'src/components/templates/home';
import { usePostsQuery } from 'src/graphql/generated';
import useGraphqlClientStore from 'src/store/graphql-client';
import useModalsStore from 'src/store/modals';
const HomePage: NextPage = () => {
  const { graphqlClient } = useGraphqlClientStore();
  const { data, isLoading } = usePostsQuery(graphqlClient);
  const { openModal } = useModalsStore();
  console.log(data);
  console.log(isLoading);

  return (
    <div>
      <Home />
      <button
        onClick={() =>
          openModal('login', {
            loginData: { name: 'Elvaleryn', myFavObj: { name: 'Typescript', id: 1 } },
          })
        }
      >
        open modal
      </button>
    </div>
  );
};

export default HomePage;
