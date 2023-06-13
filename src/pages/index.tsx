import React from 'react';
import type { NextPage } from 'next';
import Home from 'src/components/templates/home';
// import { usePostsQuery } from 'src/graphql/generated';
// import useGraphqlClientStore from 'src/store/graphql-client';
import useModalsStore from 'src/store/modals';
import { PROCESS_TYPE, PROVIDERS, TChain } from 'types';
import { Input } from 'src/components/ui/atoms';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/atoms/accordion';
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
      <button
        color="secondary"
        onClick={() => {
          openModal('process-modal', {
            processData: { type: PROCESS_TYPE.GENERATE_LP, step: 0, params },
          });
        }}
      >
        Start Process
      </button>

      <h1 className="text-3xl font-bold underline text-teal-500 decoration-sky-500">
        Tailwind work
      </h1>
      <Input />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. Its animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
