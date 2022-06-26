import React from 'react';
import styles from './label.module.scss';
import cx from 'classnames';
import { LabelProps } from 'types';

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={cx(styles.label, className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
