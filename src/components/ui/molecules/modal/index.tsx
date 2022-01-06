import React from 'react';
import cx from 'classnames';
import styles from './modal.module.scss';
import useBodyClass from 'src/hooks/use-body-class';
import { ModalProps } from 'types/components/ui/molecules/modal';

const Modal: React.FC<ModalProps> = ({
  contentClassName,
  className,
  onClose,
  children,
  headerClassName,
  closeButtonClassName,
}) => {
  useBodyClass(true);

  const handleClickOverlay = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const parentContainer = target.closest('#modal-content');
    if (!parentContainer && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={cx(styles.container, className)}
      onClick={handleClickOverlay}
      role="presentation"
    >
      <div id="modal-content" className={cx(styles.content, contentClassName)}>
        <div className={cx(styles.header, headerClassName)}>
          {onClose && (
            <a className={cx(styles.closeButton, closeButtonClassName)} onClick={() => onClose()}>
              X
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
