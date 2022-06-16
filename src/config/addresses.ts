import { CHAINS, ADDRESSES, IAddress } from 'types/config';

const getAddresses = <Adresses extends Record<ADDRESSES, IAddress>>(config: Adresses) => config;

export const addresses = getAddresses({
  [ADDRESSES.GENERATE_LP_STAKING]: {
    [CHAINS.ETHEREUM]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_ETHEREUM || '',
    [CHAINS.BSC]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_BSC || '',
    [CHAINS.POLYGON]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_POLYGON || '',
  },
});
