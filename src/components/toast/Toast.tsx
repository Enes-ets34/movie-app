import { useEffect } from 'react';
import './toast.scss';

import { ToastProps } from './toast.types';

const Toast = ({ message, type, hideToast }: ToastProps) => {
  useEffect(() => {
    if (message && type) {
      const timer = setTimeout(() => {
        hideToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, type, hideToast]);

  return (
    <>
      {message && type && (
        <div className={`toast ${type} show`}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Toast;
