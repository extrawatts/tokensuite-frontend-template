import React from 'react';
import styles from './title.module.scss';
import cx from 'classnames';
import { TitleProps } from 'types';

const Title: React.FC<TitleProps> = ({ className, size, children }) => {
  const Component = size;
  return <Component className={cx(styles.title, styles[size], className)}>{children}</Component>;
};

export default Title;
