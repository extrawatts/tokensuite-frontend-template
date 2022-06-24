import { BigNumber } from 'ethers';
import { formatUnits, parseEther } from 'ethers/lib/utils';

/**
 *
 * @param amountInWei
 * @returns ETHER Amount
 */
export const toEther = (amountInWei: string): number => {
  return Number(formatUnits(amountInWei, 18));
};

/**
 *
 * @param amountInEther
 * @returns WEI Amount
 */
export const toWei = (amountInEther: string | number): BigNumber => {
  const _amount = amountInEther.toString();
  return parseEther(_amount);
};
