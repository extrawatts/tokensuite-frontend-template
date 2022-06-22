// Token Type
export enum TokenType {
  ERN,
  wETH,
  ERNPolygon,
  wETHPolygon,
}

// Currency Type
export type TTokens = {
  [key in TokenType]: {
    id: number;
    slug: string;
    name: string;
    symbol: string;
    address: string;
    native?: boolean;
  };
};
