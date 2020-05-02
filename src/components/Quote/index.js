import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.css';

const Quote = ({ date, formattedDate, onClick, onUpdate, text }) => {
  const handleVisibilityChange = inView => {
    if (inView) {
      onUpdate();
    }
  };

  return (
    <InView as="div" onChange={handleVisibilityChange} threshold={0.5}>
      <div className={styles.root}>
        <time dateTime={date} className={styles.time}>
          {formattedDate}
        </time>
        <a className={styles.link} onClick={onClick}>
          <blockquote>{text}</blockquote>
        </a>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  date: PropTypes.string,
  formattedDate: PropTypes.string,
  onClick: PropTypes.func,
  onUpdate: PropTypes.func,
  text: PropTypes.string
};

export default Quote;
