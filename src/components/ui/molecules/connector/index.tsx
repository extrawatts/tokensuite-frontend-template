import React from 'react';
import { IConnectorsByWallet } from 'types';
import Image from 'next/image';

const Connector: React.FC<{ connector: IConnectorsByWallet; onClick: () => void }> = ({
  connector,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <figure>
        <Image src={connector.icon} width="64" height="64" alt="wallet_icon" />
        <figcaption>{connector.name}</figcaption>
      </figure>
    </div>
  );
};
export default Connector;
