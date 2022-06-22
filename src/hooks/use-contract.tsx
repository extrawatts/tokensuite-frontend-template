import { abis, addresses } from 'src/config';
import useProvider from './use-provider';
import { useMemo } from 'react';
import { CHAINS, ADDRESSES, PROVIDERS, ABIS } from 'types/config';

const useContract = (
  address: ADDRESSES | string,
  abi: ABIS,
  provider: PROVIDERS,
  chain: CHAINS
) => {
  const _provider = useProvider(provider);

  // console.log(chain);

  return useMemo(() => {
    if (!_provider) return;
    let _address = '';

    if (typeof address === 'string') _address = address;
    else _address = addresses[address][chain];

    const _abi = abis[abi];
    return _abi.connect(_address, _provider);
  }, [_provider, abi, address, chain]);
};

export default useContract;
