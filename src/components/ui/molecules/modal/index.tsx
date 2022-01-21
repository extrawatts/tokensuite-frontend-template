import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './modal.module.scss';
import useBodyClass from 'src/hooks/use-body-class';
import { ModalProps } from 'types/components/ui/molecules/modal';
import useModalsStore from 'src/store/modals';
import { setTimeout } from 'timers';

const Modal: React.FC<ModalProps> = ({
  contentClassName,
  className,
  onClose,
  children,
  headerClassName,
  closeButtonClassName,
}) => {
  useBodyClass(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isMount, setIsMount] = useState(false);

  const handleClickOverlay = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const parentContainer = target.closest('#modal-content');
    if (!parentContainer && onClose) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 600);
    }
  };

  useEffect(() => {
    let mountTimeout = setTimeout(() => {
      setIsMount(true);
    }, 300);
    return () => {
      clearTimeout(mountTimeout);
    };
  }, []);

  return (
    <div
      className={cx(styles.container, className, {
        [styles.isClosing]: isClosing,
        [styles.isOpen]: !isMount,
      })}
      onClick={handleClickOverlay}
      role="presentation"
    >
      <div
        id="modal-content"
        className={cx(styles.content, contentClassName, {
          [styles.isClosing]: isClosing,
          [styles.isOpen]: !isMount,
        })}
      >
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
