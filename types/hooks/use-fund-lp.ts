import { TChain } from 'types/config/networks';

export interface IFundLpParams {
  rewardTokenAddress: string;
  lpStakingAddress: string;
  fundAmount: string;
  chain: TChain;
}
