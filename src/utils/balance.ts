import { ERC20 } from 'types';
import { toEther } from './number';

/**
 *
 * @param contract
 * @param account
 * @returns ERC20 Balance
 */
export const getErc20Balance = async (contract: ERC20, account: string): Promise<number> => {
  const balanceInWei = await contract.balanceOf(account);
  return toEther(balanceInWei.toString());
};

/**
 *
 * @param currentBalance
 * @param requestedAmount
 * @returns if balance is enough
 */
export const isFundsEnough = (currentBalance: number, requestedAmount: number): boolean => {
  if (currentBalance < requestedAmount) return false;
  else return true;
};
