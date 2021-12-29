import React from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'src/types/components/ui/organisms/home';
import WithSidebar from '../../molecules/with-sidebar';
import Switcher from '../../molecules/switcher';
import Box from '../../molecules/box';
/* import Stack from '../../molecules/stack';
import Center from '../../molecules/center'; */

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={cx(styles.home, className)}>
      <WithSidebar contentMinPercentage="percent66" sideWidth="sm" side="right">
        <input className={styles.input} placeholder="hey" />
        <button className={styles.button}>asdfsda</button>
      </WithSidebar>
      <Switcher limit="one" threshold="deviceMd" gap="gapLg">
        <Box>sadlkgfhjasdg</Box>
        <Box>sadlkgfhjasdg</Box>
        <Box>sadlkgfhjasdg</Box>
        <Box>sadlkgfhjasdg</Box>
      </Switcher>
    </div>
  );
};

export default Home;
