import { abis, addresses } from 'src/config';
import useProvider from './use-provider';
import { useMemo } from 'react';
import { ADDRESSES, PROVIDERS, ABIS } from 'types/config';
import { TChain } from 'types/config/networks';

const useContract = (
  address: ADDRESSES | string,
  abi: ABIS,
  provider: PROVIDERS,
  chain: TChain | string
) => {
  const _provider = useProvider(provider);

  return useMemo(() => {
    if (!_provider) return;
    let _chain;
    if (!chain || chain === '') {
      return;
    } else {
      _chain = chain as TChain;
    }

    let _address = '';

    if (typeof address === 'string') _address = address;
    else _address = addresses[address][_chain];

    const _abi = abis[abi];
    return _abi.connect(_address, _provider);
  }, [_provider, abi, address, chain]);
};

export default useContract;
