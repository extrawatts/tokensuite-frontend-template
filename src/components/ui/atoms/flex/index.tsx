import React from 'react';
import styles from './flex.module.scss';
import cx from 'classnames';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  shrink?: number;
  wrap?: 'wrap' | 'nowrap';
  direction?: 'row' | 'column';
  grow?: number;
}

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
