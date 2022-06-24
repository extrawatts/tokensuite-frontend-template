import { formatUnits } from 'ethers/lib/utils';
import { IGetErc20ApproveParams } from 'types';

const MAX_AMOUNT = '1000000000000000000000000000';

export const getIsApproved = async (variables: IGetErc20ApproveParams) => {
  const { contract, amount, owner, spender } = variables;
  console.log('gettinng approve data');

  try {
    const allowanceAmount = await contract.allowance(owner, spender);

    const _allowanceInEther = Number(formatUnits(allowanceAmount, 18));

    if (_allowanceInEther === 0 || Number(amount) > _allowanceInEther) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    throw new Error('Cannot get allowance data');
  }
};

export const getErc20Approve = async (
  variables: IGetErc20ApproveParams,
  callBack?: (hash: string) => void
) => {
  const { contract, spender } = variables;

  try {
    const isApproved = await getIsApproved(variables);
    if (isApproved) {
      return true;
    } else {
      const tx = await contract.approve(spender, MAX_AMOUNT);
      await tx.wait();
      callBack && callBack(tx?.hash);
      return true;
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};
