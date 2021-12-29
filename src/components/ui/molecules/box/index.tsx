import React from 'react';
import styles from './box.module.scss';
import cx from 'classnames';
import { BoxProps } from 'types/components/ui/molecules/box';

const Box: React.FC<BoxProps> = ({ className, children, padding, borderSize }) => {
  return (
    <div
      className={cx(
        styles.box,
        padding && styles[padding],
        borderSize && styles[borderSize],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
