import React from 'react';
import styles from './title.module.scss';
import cx from 'classnames';
import { TitleProps } from 'types/components/ui/atoms/title';

const Title: React.FC<TitleProps> = ({ className }) => {
  return <div className={cx(styles.title, className)}></div>;
};

export default Title;
