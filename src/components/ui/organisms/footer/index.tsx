import React from 'react';
import cx from 'classnames';
import { FooterProps } from 'types/components/ui/organisms/footer';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <div className={cx(className)}></div>;
};

export default Footer;
