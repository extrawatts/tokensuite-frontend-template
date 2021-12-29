// Token Type
export enum TokenType {
  ERN,
  wETH,
  ERNPolygon,
  wETHPolygon,
}

// Currency Type
export type Tokens = {
  [key in TokenType]: {
    id: number;
    slug: string;
    name: string;
    symbol: string;
    address: string;
    native?: boolean;
  };
};

// Addresses type
export type Addresses = {
  genesis: string;
  marketplace: string;
  factory: string;
  lp: string;
  staking: string;
  farm: string;
  escrow: string;
  escrowPolygon: string;
  polygonMarketPlace: string;
  fixedStaking: string;
};

// Service type
export type Service = {
  baseApi: string | undefined;
  requestTimeout: number | undefined;
};

// Network Provider type
export type NetworkProvider = {
  network: string;
  key: string;
  chainId: number;
  chainIdHex: string;
};

// Network Providers type
export type NetworkProviders = {
  ethereum: NetworkProvider;
  polygon: NetworkProvider;
};

// Network type
export type Network = {
  supportedChainIds: number[];
  providers: NetworkProviders;
};

// Connector Names
export enum ConnectorNames {
  Injected = 'Injected',
  // Network = 'Network',
  WalletConnect = 'WalletConnect',
  // WalletLink = 'WalletLink',
  // Ledger = 'Ledger',
  // Trezor = 'Trezor',
  // Lattice = 'Lattice',
  // Frame = 'Frame',
  // Authereum = 'Authereum',
  // Fortmatic = 'Fortmatic',
  // Magic = 'Magic',
  // Portis = 'Portis',
  // Torus = 'Torus',
}
