import React from 'react';
import cx from 'classnames';
import { HeaderProps } from 'types/components/ui/organisms/header';

const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={cx(className)}></div>;
};

export default Header;
