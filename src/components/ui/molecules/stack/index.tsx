import React from 'react';
import styles from './stack.module.scss';
import cx from 'classnames';
import { StackProps } from 'types/components/ui/molecules/stack';

const Stack: React.FC<StackProps> = ({ className, children, space, splitAfter }) => {
  return (
    <div
      className={cx(
        styles.stack,
        className,
        space && styles[space],
        splitAfter && styles[splitAfter]
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
