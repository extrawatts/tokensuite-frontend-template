import React from 'react';
import cx from 'classnames';
import styles from './box.module.scss';

const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Box;
