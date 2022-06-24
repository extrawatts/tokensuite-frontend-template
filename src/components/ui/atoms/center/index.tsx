import React from 'react';
import cx from 'classnames';
import styles from './center.module.scss';

const Center: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={cx(styles.container, className)}>{children}</div>;
};

export default Center;
