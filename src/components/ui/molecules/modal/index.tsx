import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import useBodyClass from 'src/hooks/use-body-class';

import { ModalProps } from 'types/components/ui/molecules/modal';

import { useKeyPress } from 'src/hooks';

const Modal: React.FC<ModalProps> = ({
  contentClassName,
  className,
  onClose,
  headerClassName,
  closeButtonClassName,
  blur = false,
  children,
}) => {
  useBodyClass(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isMount, setIsMount] = useState(false);

  const clickEscape: boolean = useKeyPress('Escape');

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose && onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleClickOverlay = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const parentContainer = target.closest('#modal-content');
    if (!parentContainer && onClose) {
      closeModal();
    }
  };

  useEffect(() => {
    const mountTimeout = setTimeout(() => {
      setIsMount(true);
    }, 300);

    if (clickEscape && onClose) {
      closeModal();
    }
    return () => {
      clearTimeout(mountTimeout);
    };
  }, [clickEscape]);

  return (
    <div className={cx(className)} onClick={handleClickOverlay} role="presentation">
      <div id="modal-content" className={cx(contentClassName, {})}>
        <div className={cx(headerClassName)}>
          {onClose && (
            <a className={cx(closeButtonClassName)} onClick={() => onClose()}>
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
