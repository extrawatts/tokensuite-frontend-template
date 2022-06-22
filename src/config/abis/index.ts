import { ABIS, ABI_TYPES } from 'types/config';

type T = ABI_TYPES.ERC20__factory | ABI_TYPES.LPTOKEN__factory;

const getAbis = <Abis extends Record<ABIS, T>>(config: Abis) => config;

export const abis = getAbis({
  [ABIS.ERC20]: ABI_TYPES.ERC20__factory,
  [ABIS.LP_TOKEN]: ABI_TYPES.LPTOKEN__factory,
});
