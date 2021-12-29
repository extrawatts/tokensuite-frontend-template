import React from 'react';
import styles from './header.module.scss';
import cx from 'classnames';
import { HeaderProps } from 'src/types/components/ui/organisms/header';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={cx(styles.header, className)}></div>;
};

export default Header;
