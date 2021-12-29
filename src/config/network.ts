import { Network } from 'types/config';

/**
 * Network
 */
const network: Network = {
  /**
   * Supported Chain Ids
   */
  supportedChainIds: ((process.env.NEXT_PUBLIC_SUPPORTED_CHAIN_IDS as string) || '')
    .split(',')
    .map((id) => parseInt(id)),

  /**
   * Http Providers
   */
  providers: {
    /**
     * Ethereum Http Provider
     */
    ethereum: {
      /**
       * Ethereum Network Name
       */
      network: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_NETWORK || 'homestead',

      /**
       * Ethereum Network Key
       */
      key: process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER_KEY || '',

      chainId: parseInt(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '1'),

      chainIdHex: '0x' + parseInt(process.env.NEXT_PUBLIC_ETHEREUM_CHAIN_ID || '1').toString(16),
    },

    /**
     * Polygon Http Provider
     */
    polygon: {
      /**
       * Polygon Network Name
       */
      network: process.env.NEXT_PUBLIC_POLYGON_PROVIDER_NETWORK || 'maticmum',

      /**
       * Polygon Network Key
       */
      key: process.env.NEXT_PUBLIC_POLYGON_PROVIDER_KEY || '',

      chainId: parseInt(process.env.NEXT_PUBLIC_POLYGON_CHAIN_ID || '137'),

      chainIdHex: '0x' + parseInt(process.env.NEXT_PUBLIC_POLYGON_CHAIN_ID || '137').toString(16),
    },
  },
};

export default network;
