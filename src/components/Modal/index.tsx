import React, { useState, useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './index.less';

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  title?: ReactNode;
  children?: ReactNode;
  maskClosable?: boolean;
  width?: number | string;
  className?: string;
  centered?: boolean;
  footer?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  title,
  children,
  maskClosable = true,
  width = '80%',
  className,
  centered = true,
  footer,
}) => {
  const [animatedVisible, setAnimatedVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    } else {
      const timer = setTimeout(() => {
        setAnimatedVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!animatedVisible && !visible) {
    return null;
  }

  const handleMaskClick = () => {
    if (maskClosable && onClose) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const defaultFooter = footer || (
    <div className="modal-default-footer">
      <button className="modal-confirm-btn" onClick={onClose}>
        我知道了
      </button>
    </div>
  );

  const modalNode = (
    <div
      className={classNames('modal-container', {
        'modal-visible': visible,
      })}
      onClick={handleMaskClick}
    >
      <div
        className={classNames('modal-content', className, {
          'modal-content-visible': visible,
          'modal-centered': centered,
        })}
        style={{ width }}
        onClick={handleModalClick}
      >
        {title && (
          <div className="modal-header">
            {title && <div className="modal-title">{title}</div>}
          </div>
        )}
        <div className="modal-body">{children}</div>
        {footer ? <div className="modal-footer">{footer}</div> : defaultFooter}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalNode, document.body);
};

export default Modal;
