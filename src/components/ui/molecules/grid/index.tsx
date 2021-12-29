import React from 'react';
import styles from './grid.module.scss';
import cx from 'classnames';
import { GridProps } from 'types/components/ui/molecules/grid';
/*
 *@INFO This component is highly customizable
 * minimum value and space can alter based on project
 * I am leaving min 250px and space(grid-gap) 1rem later it can be added as props
 */
const Grid: React.FC<GridProps> = ({ className, children }) => {
  return <div className={cx(styles.grid, className)}>{children}</div>;
};

export default Grid;
