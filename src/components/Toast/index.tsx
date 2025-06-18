import React, { useEffect } from 'react';
import './index.less';
import { createRoot } from 'react-dom/client';

interface ToastProps {
  content: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ content, duration = 2000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  return (
    <div className="toast-container">
      <div className="toast-content">{content}</div>
    </div>
  );
};

interface ToastOptions {
  duration?: number;
}

const toast = (content: string, options?: ToastOptions) => {
  const div = document.createElement('div');
  div.className = 'toast-wrapper';
  document.body.appendChild(div);

  const duration = options?.duration || 2000;
  const root = createRoot(div);

  const destroy = () => {
    root.unmount();
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };

  root.render(
    <Toast
      content={content}
      duration={duration}
      onClose={destroy}
    />
  );
};

export default toast;
