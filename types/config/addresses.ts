export enum CHAINS {
  ETHEREUM,
  BSC,
  POLYGON,
}

export enum ADDRESSES {
  GENERATE_LP_STAKING,
}

export type IAddress = {
  [key in CHAINS]: string;
};
