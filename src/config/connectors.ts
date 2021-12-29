import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { ConnectorNames } from 'types/config';
import network from './network';

// Injected Connector
const injected = new InjectedConnector({
  supportedChainIds: network.supportedChainIds,
});

const walletConnect = new WalletConnectConnector({
  rpc: {
    1: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_KEY}`,
    3: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_PROVIDER_KEY}`,
  },
  qrcode: true,
});

// Connectors Map
export const connectors: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletConnect,
};

export const connectorsByWallet = [
  {
    name: 'Metamask',
    icon: '/images/metamask-logo.png',
    connectorId: ConnectorNames.Injected,
  },
  {
    name: 'WalletConnect',
    icon: '/images/walletconnect-logo.png',
    connectorId: ConnectorNames.WalletConnect,
  },
];
