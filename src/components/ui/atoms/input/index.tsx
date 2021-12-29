import React from 'react';
import styles from './input.module.scss';
import cx from 'classnames';
import { InputProps } from 'src/types/components/ui/atoms/input';
const Input: React.FC<InputProps> = ({ className }) => {
  return <div className={cx(styles.input, className)}></div>;
};

export default Input;
