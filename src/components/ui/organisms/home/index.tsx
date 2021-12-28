import React from 'react';
import styles from './home.module.scss';
import cx from 'classnames';
import { HomeProps } from 'src/types/components/ui/organisms/home';

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={cx(styles.home, className)}>
      Hi there
      <p>testing</p>
    </div>
  );
};

export default Home;
