import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { SwitchProps } from 'types/components/ui/atoms/switch';

const Switch: React.FC<SwitchProps> = ({ checked, ...props }) => {
  return (
    <div className={cx(styles.container, checked && styles.checked)}>
      <span className={styles.ball} />
      <input type="checkbox" {...props} />
    </div>
  );
};

export default Switch;
