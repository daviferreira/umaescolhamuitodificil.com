import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modal = ({ children, onClose }) => (
  <div className={styles.root} onClick={onClose}>
    <div className={styles.close}>
      <span>&times;</span>
    </div>
    {children}
  </div>
);

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
};

export default Modal;
