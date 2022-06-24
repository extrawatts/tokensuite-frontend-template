import React from 'react';
import { IConnectorsByWallet } from 'types';
import styles from './connector.module.scss';
import Image from 'next/image';

const Connector: React.FC<{ connector: IConnectorsByWallet; onClick: () => void }> = ({
  connector,
  onClick,
}) => {
  return (
    <div className={styles.connector} onClick={onClick}>
      <figure>
        <Image src={connector.icon} width="64px" height="64px" alt="wallet_icon" />
        <figcaption>{connector.name}</figcaption>
      </figure>
    </div>
  );
};
export default Connector;
