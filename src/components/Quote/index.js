import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.css';

const Quote = ({ onClick, onUpdate, text }) => {
  const handleVisibilityChange = inView => {
    if (inView) {
      onUpdate();
    }
  };

  return (
    <InView as="div" onChange={handleVisibilityChange} threshold={0.5}>
      <div className={styles.root}>
        <a className={styles.link} onClick={onClick}>
          <blockquote>{text}</blockquote>
        </a>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  onClick: PropTypes.func,
  onUpdate: PropTypes.func,
  text: PropTypes.string
};

export default Quote;
