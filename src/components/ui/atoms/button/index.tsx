import React from 'react';
import styles from './button.module.scss';
import cx from 'classnames';
import { ButtonProps } from 'types/components/ui/atoms/button';

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={cx(styles.button, className)} {...props}>
      {children}
    </button>
  ); //
};

export default Button;
