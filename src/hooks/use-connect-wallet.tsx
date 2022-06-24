import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector';
import { connectors } from 'src/config';
import { setupNetwork } from 'src/utils/network';
import { CONNECTOR_NAMES, PROVIDERS, TNetworkProviders } from 'types/config';
import { toast } from 'react-toastify';
// import useModalsStore from 'src/store/modals';
// import useModalsStore from 'src/store/modals';
const useConnectWallet = () => {
  const { activate, deactivate } = useWeb3React();
  // const { closeModal } = useModalsStore();

  const connect = async (
    connectorID: CONNECTOR_NAMES,
    provider: keyof TNetworkProviders = PROVIDERS.ETHEREUM_PROVIDER
  ) => {
    const connectorOrGetConnector = connectors[connectorID];
    console.log(connectorOrGetConnector);

    const connector =
      typeof connectorOrGetConnector !== 'function'
        ? connectors[connectorID]
        : await connectorOrGetConnector();

    if (typeof connector !== 'function' && connector) {
      await activate(connector, async (error: Error) => {
        console.log('trying to connect');

        if (error instanceof UnsupportedChainIdError) {
          // setError(error)
          toast.error(error);
          // const provider = await connector.getProvider()
          const hasSetup = await setupNetwork(provider);
          if (hasSetup) {
            activate(connector);
          }
        } else {
          localStorage.clear();
          if (error instanceof NoEthereumProviderError) {
            toast.error('No provider was found');
          } else if (
            error instanceof UserRejectedRequestErrorInjected ||
            error instanceof UserRejectedRequestErrorWalletConnect
          ) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector;
              walletConnector.walletConnectProvider = undefined;
            }
            toast.error('Authorization Error Please authorize to access your account');
          } else {
            toast.error(`${error.name} ${error.message}`);
          }
        }
      });
    } else {
      localStorage.clear();
      toast.error('Unable to find connector. The connector config is wrong');
    }
  };
  const disconnect = () => {
    deactivate();
    localStorage.clear();
  };

  return { connect, disconnect };
};

export default useConnectWallet;
