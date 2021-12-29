import React from 'react';
import styles from './label.module.scss';
import cx from 'classnames';
import { LabelProps } from 'src/types/components/ui/atoms/label';

const Label: React.FC<LabelProps> = ({ className }) => {
  return <div className={cx(styles.label, className)}></div>;
};

export default Label;
