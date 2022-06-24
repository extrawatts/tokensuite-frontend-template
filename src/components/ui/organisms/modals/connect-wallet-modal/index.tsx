import React from 'react';
import Title from 'src/components/ui/atoms/title';
import Connector from 'src/components/ui/molecules/connector';
import Modal from 'src/components/ui/molecules/modal';
import { connectorsByWallet } from 'src/config';
import { useConnectWallet } from 'src/hooks';
import useModalsStore from 'src/store/modals';
import { ConnectWalletModalProps } from 'types/components/ui/organisms/modals/connect-wallet';
import styles from './connect-wallet-modal.module.scss';
const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ onClose }) => {
  const { connect } = useConnectWallet();
  const { closeModal } = useModalsStore();

  return (
    <Modal onClose={onClose} blur>
      <div className={styles.connectWallet}>
        <header className={styles.connectWallet__title}>
          <Title size="h5">Connect Wallet</Title>
        </header>
        <div className={styles.connectWallet__wallets}>
          {connectorsByWallet.map((connector) => (
            <Connector
              connector={connector}
              key={connector.name}
              onClick={async () => {
                try {
                  await connect(connector.connectorId);
                  closeModal();
                } catch (e) {
                  console.log(e);
                }
              }}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};
export default ConnectWalletModal;
