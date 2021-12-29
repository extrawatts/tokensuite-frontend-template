import React from 'react';
import styles from './cluster.module.scss';
import cx from 'classnames';
import { ClusterProps } from 'types/components/ui/molecules/cluster';

const Cluster: React.FC<ClusterProps> = ({ className, children, justify, align, gap }) => {
  return (
    <div
      className={cx(
        styles.cluster,
        className,
        justify && styles[justify],
        align && styles[align],
        gap && styles[gap]
      )}
    >
      {children}
    </div>
  );
};

export default Cluster;
