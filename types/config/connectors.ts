// Connector Names
export enum CONNECTOR_NAMES {
  Injected = 'Injected',
  // Network = 'Network',
  WalletConnect = 'WalletConnect',
  WalletLink = 'WalletLink',
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

export interface IConnectorsByWallet {
  name: string;
  icon: string;
  connectorId: CONNECTOR_NAMES;
}
