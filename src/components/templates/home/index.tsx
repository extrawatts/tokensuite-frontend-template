import React from 'react';
import cx from 'classnames';
import { HomeProps } from 'types/components/ui/organisms/home';
import useModalsStore from 'src/store/modals';

const Home: React.FC<HomeProps> = ({ className }) => {
  const { openModal } = useModalsStore();

  return (
    <div className={cx(className)}>
      <button onClick={() => openModal('login')}>modal</button>
    </div>
  );
};

export default Home;
