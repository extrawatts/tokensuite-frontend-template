import { ERC20 } from 'types/config';

export interface IGetErc20ApproveParams {
  contract: ERC20;
  amount: string;
  owner: string;
  spender: string;
}
