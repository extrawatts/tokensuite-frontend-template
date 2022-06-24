import { ABIS, ERC20__factory, LPTOKEN__factory } from 'types/config';

type T = ERC20__factory | LPTOKEN__factory;

const getAbis = <Abis extends Record<ABIS, T>>(config: Abis) => config;

export const abis = getAbis({
  [ABIS.ERC20]: ERC20__factory,
  [ABIS.LP_TOKEN]: LPTOKEN__factory,
});
