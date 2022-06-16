export enum PROVIDERS {
  SIGNER = 'SIGNER',
  ETHEREUM_PROVIDER = 'ETHEREUM_PROVIDER',
  POLYGON_PROVIDER = 'POLYGON_PROVIDER',
  BSC_PROVIDER = 'BSC_PROVIDER',
}

// Network Provider type
export type TNetworkProvider = {
  name: string;
  key: string;
  chainId: number;
  chainIdHex: string;
};

export type TNetworkProviders = {
  [key in Exclude<PROVIDERS, PROVIDERS.SIGNER>]: TNetworkProvider;
};
