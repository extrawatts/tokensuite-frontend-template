import React from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'src/types/components/ui/organisms/home';
import Box from '../../molecules/box';
import Cluster from '../../molecules/cluster';

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={cx(styles.home, className)}>
      <Box padding="s1" borderSize="thick">
        <Cluster justify="justifyBetween" align="alignCenter">
          <div>text</div>
          <Cluster justify="justifyStart" align="alignStart" gap="sm">
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
          </Cluster>
        </Cluster>
      </Box>
    </div>
  );
};

export default Home;
