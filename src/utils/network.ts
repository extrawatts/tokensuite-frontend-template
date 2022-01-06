import { ChainIdHex } from 'types/utils/network';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const changeNetwork = async (chainIdHex: ChainIdHex): Promise<boolean> => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    });
    return true;
  } catch (e) {
    return false;
  }
};

export const setupNetwork = async (chainIdHex: ChainIdHex): Promise<boolean | string> => {
  const provider = window.ethereum;
  if (provider) {
    return await changeNetwork(chainIdHex);
  } else {
    return 'You do not have a wallet installed';
  }
};
