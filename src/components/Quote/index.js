import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.css';

const Quote = ({ onUpdate, text }) => {
  const handleVisibilityChange = (inView, entry) => {
    if (inView) {
      onUpdate();
    }
  };

  return (
    <InView as="div" onChange={handleVisibilityChange} threshold={0.5}>
      <div className={styles.root}>
        <a href="#" className={styles.link}>
          <blockquote>{text}</blockquote>
        </a>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  onUpdate: PropTypes.func,
  text: PropTypes.string
};

export default Quote;
