import React from 'react';
import Connector from 'src/components/ui/molecules/connector';
import Modal from 'src/components/ui/molecules/modal';
import { connectorsByWallet } from 'src/config';
import { useConnectWallet } from 'src/hooks';
import useModalsStore from 'src/store/modals';
import { ConnectWalletModalProps } from 'types/components/ui/organisms/modals/connect-wallet';
const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ onClose }) => {
  const { connect } = useConnectWallet();
  const { closeModal } = useModalsStore();

  return (
    <Modal onClose={onClose} blur>
      <div>
        <header></header>
        <div>
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
