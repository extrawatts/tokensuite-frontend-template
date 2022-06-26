import { ADDRESSES, IAddress, PROVIDERS } from 'types/config';

const getAddresses = <Adresses extends Record<ADDRESSES, IAddress>>(config: Adresses) => config;

export const addresses = getAddresses({
  [ADDRESSES.GENERATE_LP_STAKING]: {
    [PROVIDERS.ETHEREUM_PROVIDER]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_ETHEREUM || '',
    [PROVIDERS.BSC_PROVIDER]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_BSC || '',
    [PROVIDERS.POLYGON_PROVIDER]: process.env.NEXT_PUBLIC_GENRATE_LP_ADDRESS_POLYGON || '',
  },
});
