import React from 'react';
import styles from './button.module.scss';
import cx from 'classnames';
import { ButtonProps } from 'src/types/components/ui/atoms/button';

const Button: React.FC<ButtonProps> = ({ className }) => {
  return <div className={cx(styles.button, className)}></div>;
};

export default Button;
