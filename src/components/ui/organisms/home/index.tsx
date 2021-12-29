import React from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'src/types/components/ui/organisms/home';
import WithSidebar from '../../molecules/with-sidebar';

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={cx(styles.home, className)}>
      <WithSidebar contentMinPercentage="percent66" sideWidth="sm" side="right">
        <input className={styles.input} placeholder="hey" />
        <button className={styles.button}>asdfsda</button>
      </WithSidebar>
    </div>
  );
};

export default Home;
