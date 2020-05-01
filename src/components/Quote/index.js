import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';

import { updateGraphData } from '../../reducers/app';

import styles from './styles.module.css';

const Quote = ({ date, graphData, text }) => {
  const dispatch = useDispatch();

  const handleVisibilityChange = (inView, entry) => {
    if (inView) {
      dispatch(updateGraphData(graphData));
    }
  };

  return (
    <InView
      as="div"
      onChange={handleVisibilityChange}
      threshold={0.5}
      triggerOnce
    >
      <div className={styles.root}>
        <a href="#" className={styles.link}>
          <blockquote>{text}</blockquote>
          {/* <time className={styles.time}>{date}</time> */}
        </a>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  date: PropTypes.string,
  graphData: PropTypes.object,
  text: PropTypes.string
};

export default Quote;
