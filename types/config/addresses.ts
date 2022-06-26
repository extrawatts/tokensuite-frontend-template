import { TChain } from './networks';

export enum ADDRESSES {
  GENERATE_LP_STAKING,
}

export type IAddress = {
  [key in TChain]: string;
};
