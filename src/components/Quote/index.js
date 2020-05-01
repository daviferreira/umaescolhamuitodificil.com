import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Quote = ({ date, text }) => (
  <div className={styles.root}>
    <a href="#" className={styles.link}>
      <blockquote>{text}</blockquote>
      <time className={styles.time}>{date}</time>
    </a>
  </div>
);

Quote.propTypes = {
  date: PropTypes.string,
  text: PropTypes.string
};

export default Quote;
