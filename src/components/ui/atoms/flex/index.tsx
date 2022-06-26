import React from 'react';
import styles from './flex.module.scss';
import cx from 'classnames';
import { FlexProps } from 'types';

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction,
  justify,
  align,
  wrap,
  grow,
  shrink,
  ...props
}) => {
  return (
    <div
      className={cx(styles.container, className)}
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;
