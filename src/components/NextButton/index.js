import React from 'react';
import PropTypes from 'prop-types';

import NextIcon from './next.svg';

import styles from './styles.module.css';

const NextButton = ({ onClick }) => (
  <div className={styles.root} onClick={onClick}>
    <NextIcon />
  </div>
);

NextButton.propTypes = {
  onClick: PropTypes.func
};

export default NextButton;
