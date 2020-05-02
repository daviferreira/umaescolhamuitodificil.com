import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.css';

const Quote = ({ date, onUpdate, text }) => {
  const handleVisibilityChange = inView => {
    if (inView) {
      onUpdate();
    }
  };

  return (
    <InView as="div" onChange={handleVisibilityChange} threshold={0.5}>
      <div className={styles.root} data-date={date}>
        <blockquote>{text}</blockquote>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  date: PropTypes.string,
  onUpdate: PropTypes.func,
  text: PropTypes.string
};

export default Quote;
