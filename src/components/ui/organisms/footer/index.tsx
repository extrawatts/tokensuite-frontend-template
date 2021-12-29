import React from 'react';
import styles from './footer.module.scss';
import cx from 'classnames';
import { FooterProps } from 'types/components/ui/organisms/footer';

const Footer: React.FC<FooterProps> = ({ className }) => {
  return <div className={cx(styles.footer, className)}></div>;
};

export default Footer;
