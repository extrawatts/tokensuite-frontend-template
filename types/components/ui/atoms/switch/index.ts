import { InputHTMLAttributes } from 'react';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  // onClick?: () => void;
  checked?: boolean;
}
