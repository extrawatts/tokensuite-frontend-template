import React from 'react';
import styles from './with-sidebar.module.scss';
import cx from 'classnames';
import { WithSidebarProps } from 'src/types/components/ui/organisms/with-sidebar';

const WithSidebar: React.FC<WithSidebarProps> = ({ className }) => {
  return <div className={cx(styles.withSidebar, className)}></div>;
};

export default WithSidebar;
