import React from 'react';
import cx from 'classnames';
import styles from './stack.module.scss';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  wrap?: 'wrap' | 'nowrap';
  divider?: React.ReactNode;
}

//TODO: make cloning for the stack, we can use the same code for chakra-ui
const Stack: React.FC<StackProps> = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Stack;
