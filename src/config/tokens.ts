import { Tokens, TokenType } from 'types/config';

/**
 * Project Token Addresses
 */
const tokens: Tokens = {
  /**
   * ERN Token
   */
  [TokenType.ERN]: {
    id: 1,
    slug: (process.env.NEXT_PUBLIC_ERN_TOKEN_SYMBOL || '').toLowerCase(),
    name: process.env.NEXT_PUBLIC_ERN_TOKEN_NAME || '',
    symbol: process.env.NEXT_PUBLIC_ERN_TOKEN_SYMBOL || '',
    address: process.env.NEXT_PUBLIC_ERN_TOKEN_ADDRESS || '',
  },

  /**
   * wETH Token
   */
  [TokenType.wETH]: {
    id: 2,
    slug: (process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '').toLowerCase(),
    name: process.env.NEXT_PUBLIC_WETH_TOKEN_NAME || '',
    symbol: process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '',
    address: process.env.NEXT_PUBLIC_WETH_TOKEN_ADDRESS || '',
  },

  [TokenType.ERNPolygon]: {
    id: 3,
    slug: (process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '').toLowerCase(),
    name: process.env.NEXT_PUBLIC_WETH_TOKEN_NAME || '',
    symbol: process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '',
    address: process.env.NEXT_PUBLIC_POLYGON_ERN_TOKEN_ADDRESS || '',
  },

  [TokenType.wETHPolygon]: {
    id: 4,
    slug: (process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '').toLowerCase(),
    name: process.env.NEXT_PUBLIC_WETH_TOKEN_NAME || '',
    symbol: process.env.NEXT_PUBLIC_WETH_TOKEN_SYMBOL || '',
    address: process.env.NEXT_PUBLIC_POLYGON_WETH_TOKEN_ADDRESS || '',
  },
};

export default tokens;
