import React from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'src/types/components/ui/organisms/home';
import Stack from '../../molecules/stack';

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={cx(styles.home, className)}>
      <Stack space="s1" splitAfter="splitAfter3">
        <p>testing</p>
        <p>testing</p>
        <div>
          <p>testing</p>
          <p>testing</p>
        </div>
        <p>testing</p>
        <p>testing</p>
      </Stack>
    </div>
  );
};

export default Home;
