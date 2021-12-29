import React from 'react';
import styles from './switcher.module.scss';
import cx from 'classnames';
import { SwitcherProps } from 'types/components/ui/molecules/switcher';

const Switcher: React.FC<SwitcherProps> = ({
  className,
  threshold = 'deviceXs',
  gap,
  limit = 'one',
  children,
}) => {
  return (
    <div
      className={cx(
        styles.switcher,
        className,
        gap && styles[gap],
        styles[limit],
        styles[threshold]
      )}
    >
      {children}
    </div>
  );
};

export default Switcher;
