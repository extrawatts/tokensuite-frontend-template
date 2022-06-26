import React from 'react';
import styles from './input.module.scss';
import cx from 'classnames';
import { InputProps } from 'types';
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return <input className={cx(styles.input, className)} {...props} />;
};

export default Input;
