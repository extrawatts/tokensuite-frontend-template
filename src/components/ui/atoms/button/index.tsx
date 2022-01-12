import React from 'react';
import styles from './button.module.scss';
import cx from 'classnames';
import { ButtonProps } from 'types/components/ui/atoms/button';

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return <button className={cx(styles.button, className)}>{children}</button>; //
};

export default Button;
