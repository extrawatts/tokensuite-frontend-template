import { useMemo } from 'react';
import { AlchemyProvider, JsonRpcSigner, JsonRpcProvider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { PROVIDERS } from 'types/config';
import { networkProviders } from 'src/config';
const useProvider = (network: PROVIDERS): AlchemyProvider | JsonRpcProvider | JsonRpcSigner => {
  const { library, account } = useWeb3React();

  return useMemo(() => {
    if (network === PROVIDERS.BSC_PROVIDER) {
      return new JsonRpcProvider(networkProviders[network].key);
    } else if (network === PROVIDERS.SIGNER && account) {
      return library?.getSigner();
    } else if (network !== PROVIDERS.SIGNER) {
      return new AlchemyProvider(networkProviders[network].name, networkProviders[network].key);
    }
  }, [network, library, account]);
};

export default useProvider;
