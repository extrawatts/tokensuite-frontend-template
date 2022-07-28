import { ReactNode } from 'react';

export interface CheckboxProps {
  onClick?: (value: any) => void;
  label?: string | ReactNode;
  id: number | string;
  value: any;
  className?: string;
}
