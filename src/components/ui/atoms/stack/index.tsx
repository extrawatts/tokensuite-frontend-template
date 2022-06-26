import React from 'react';
import cx from 'classnames';
import styles from './stack.module.scss';
import { getValidChildren } from 'src/utils';
import { StackProps } from 'types';
//TODO: make cloning for the stack, we can use the same code for chakra-ui
const Stack: React.FC<StackProps> = ({
  children,
  className,
  spacing,
  direction = 'column',
  align,
  justify,
  wrap,
  ...props
}) => {
  const validChildren = getValidChildren(children);
  const clones = validChildren.map((child: React.ReactElement, index: number) => {
    const key = typeof child?.key !== 'undefined' ? child?.key : index;

    return <React.Fragment key={key}>{child}</React.Fragment>;
  });

  return (
    <div
      className={cx(styles.container, styles[direction], className)}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        margin: spacing,
      }}
      {...props}
    >
      {clones}
    </div>
  );
};

export default Stack;
