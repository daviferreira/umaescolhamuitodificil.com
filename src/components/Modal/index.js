import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modal = ({ children, closeOnOverlay = true, onClose }) => {
  useEffect(() => {
    const onEscape = ({ keyCode }) => {
      if (keyCode === 27) {
        onClose();
      }
    };

    const html = document.querySelector('html');

    html.classList.add('no-overflow');
    document.addEventListener('keydown', onEscape);

    return () => {
      html.classList.remove('no-overflow');
      document.removeEventListener('keydown', onEscape);
    };
  }, [onClose]);

  return (
    <div className={styles.root} onClick={closeOnOverlay ? onClose : undefined}>
      <div
        className={styles.close}
        onClick={!closeOnOverlay ? onClose : undefined}
      >
        <span>&times;</span>
      </div>
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  closeOnOverlay: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
