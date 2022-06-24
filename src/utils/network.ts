import { networkProviders } from 'src/config';
import { TNetworkProviders } from 'types/config';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const parseChainId = (chainId: number) => {
  for (const network in networkProviders) {
    const _key = network as keyof TNetworkProviders;
    if (networkProviders[_key].chainId === chainId) {
      return networkProviders[_key];
    }
  }
};

export const changeNetwork = async (providerChain: keyof TNetworkProviders): Promise<boolean> => {
  const { chainIdHex } = networkProviders[providerChain];
  console.log(chainIdHex);

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    });
    return true;
  } catch (e) {
    /**
     * @TODO HANDLE CASE WHERE CHAIN DOESN"T EXIST IN WALLET e.code === 4902
     */
    return false;
  }
};

export const setupNetwork = async (
  providerChain: keyof TNetworkProviders
): Promise<boolean | string> => {
  const provider = window.ethereum;

  if (provider) {
    return await changeNetwork(providerChain);
  } else {
    return 'You do not have a wallet installed';
  }
};
