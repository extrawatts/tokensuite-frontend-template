import React from 'react';
import type { NextPage } from 'next';
import Home from 'src/components/templates/home';
// import { usePostsQuery } from 'src/graphql/generated';
// import useGraphqlClientStore from 'src/store/graphql-client';
import useModalsStore from 'src/store/modals';
import { Button } from 'src/components/ui/atoms';
import { PROCESS_TYPE, PROVIDERS, TChain } from 'types';

const LP_STAKING_CONTRACT = '0xC70E50B66F22894000129C5DECfbc645645e2B42';
const REWARD_TOKEN_CONTRACT = '0x9fe9de8bbc10a1c6ed0c13dae8171aa88193419e';
const FUND_AMOUNT = '1000';

const HomePage: NextPage = () => {
  //const { graphqlClient } = useGraphqlClientStore();
  // const { data, isLoading } = usePostsQuery(graphqlClient);
  const { openModal } = useModalsStore();
  const params = {
    rewardTokenAddress: REWARD_TOKEN_CONTRACT,
    lpStakingAddress: LP_STAKING_CONTRACT,
    fundAmount: FUND_AMOUNT,
    chain: PROVIDERS.ETHEREUM_PROVIDER as TChain,
  };
  return (
    <div>
      <Home />
      <Button
        color="secondary"
        size="lg"
        onClick={() => {
          openModal('process-modal', {
            processData: { type: PROCESS_TYPE.GENERATE_LP, step: 0, params },
          });
        }}
      >
        Start Process
      </Button>
    </div>
  );
};

export default HomePage;
