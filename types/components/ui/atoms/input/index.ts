import React, { ComponentProps } from 'react';

export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: ComponentProps<'input'>['onChange'];
  onWheel?: (e: any) => void;
  value?: string;
  className?: string;
  label?: string;
  paddingLeft?: number;
  leftPrefix?: React.ReactNode;
  testId?: string;
  disabled?: boolean;
  password?: boolean;
  error?: boolean;
}
