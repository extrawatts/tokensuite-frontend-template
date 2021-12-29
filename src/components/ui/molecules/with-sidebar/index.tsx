import React from 'react';
import styles from './with-sidebar.module.scss';
import cx from 'classnames';
import { WithSidebarProps } from 'types/components/ui/molecules/with-sidebar';

const WithSidebar: React.FC<WithSidebarProps> = ({
  className,
  children,
  side = 'left',
  sideWidth,
  contentMinPercentage,
  gap,
  noStretch,
}) => {
  return (
    <div className={styles[side]}>
      <div
        className={cx(
          styles.withSidebar,
          className,
          sideWidth && styles[sideWidth],
          contentMinPercentage && styles[contentMinPercentage],
          gap && styles[gap],
          {
            [styles.noStretch]: noStretch,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default WithSidebar;
