import React from 'react';
import styles from './center.module.scss';
import cx from 'classnames';
import { CenterProps } from 'types/components/ui/molecules/center';

const Center: React.FC<CenterProps> = ({
  className,
  maxWidth,
  gutter,
  centerChildren,
  centerText,
  children,
}) => {
  return (
    <div
      className={cx(
        styles.center,
        gutter && styles[gutter],
        maxWidth && styles[maxWidth],
        className,
        {
          [styles.centerText]: centerText,
          [styles.centerChildren]: centerChildren,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Center;
