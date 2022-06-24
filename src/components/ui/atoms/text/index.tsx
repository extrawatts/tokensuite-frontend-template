import React from 'react';
import styles from './text.module.scss';
import cx from 'classnames';
import { TextProps } from 'types';

const Text: React.FC<TextProps> = ({ className, size, color, children }) => {
  return <p className={cx(styles.text, styles[size], styles[color], className)}>{children}</p>;
};

export default Text;
