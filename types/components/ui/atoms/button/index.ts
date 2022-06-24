import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'primaryOutline';
  size: 'fullWidth' | 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  pill?: boolean;
  as?: 'button' | 'a' | 'div';
}
