import { hexValue } from 'ethers/lib/utils';
import { TNetworkProviders, PROVIDERS } from 'types/config';

export const supportedChainIds = ((process.env.NEXT_PUBLIC_SUPPORTED_CHAIN_IDS as string) || '')
  .split(',')
  .map((id) => parseInt(id));

export const networkProviders: TNetworkProviders = {
  [PROVIDERS.ETHEREUM_PROVIDER]: {
    name: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_NETWORK || 'rinkeby',

    key: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_KEY || '',

    chainId: parseInt(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '1'),

    chainIdHex: hexValue(Number(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '4')),
  },

  [PROVIDERS.POLYGON_PROVIDER]: {
    name: process.env.NEXT_PUBLIC_POLYGON_PROVIDER_NETWORK || 'maticmum',

    key: process.env.NEXT_PUBLIC_POLYGON_PROVIDER_KEY || '',

    chainId: parseInt(process.env.NEXT_PUBLIC_POLYGON_CHAIN_ID || '80001'),

    chainIdHex: hexValue(Number(process.env.NEXT_PUBLIC_POLYGON_CHAIN_ID || '80001')),
  },
  [PROVIDERS.BSC_PROVIDER]: {
    name: process.env.NEXT_PUBLIC_BSC_PROVIDER_NETWORK || 'bsctestnet',

    key: process.env.NEXT_PUBLIC_BSC_RPC_URL || '',

    chainId: parseInt(process.env.NEXT_PUBLIC_BSC_CHAIN_ID || '97'),

    chainIdHex: hexValue(Number(process.env.NEXT_PUBLIC_BSC_CHAIN_ID || '97')),
  },
};
