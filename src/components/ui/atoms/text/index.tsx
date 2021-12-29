import React from 'react';
import styles from './text.module.scss';
import cx from 'classnames';
import { TextProps } from 'src/types/components/ui/atoms/text';

const Text: React.FC<TextProps> = ({ className }) => {
  return <div className={cx(styles.text, className)}></div>;
};

export default Text;
