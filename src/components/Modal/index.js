import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modal = ({ children, closeOnOverlay = true, onClose }) => (
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

Modal.propTypes = {
  children: PropTypes.node,
  closeOnOverlay: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;
