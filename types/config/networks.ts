export enum PROVIDERS {
  SIGNER = 'SIGNER',
  ETHEREUM_PROVIDER = 'ETHEREUM_PROVIDER',
  POLYGON_PROVIDER = 'POLYGON_PROVIDER',
  BSC_PROVIDER = 'BSC_PROVIDER',
}

export type TChain =
  | PROVIDERS.BSC_PROVIDER
  | PROVIDERS.ETHEREUM_PROVIDER
  | PROVIDERS.POLYGON_PROVIDER;

// Network Provider type
export type TNetworkProvider = {
  name: string;
  key: string;
  chainId: number;
  chainIdHex: string;
  displayName: string;
};

export type TNetworkProviders = {
  [key in TChain]: TNetworkProvider;
};
