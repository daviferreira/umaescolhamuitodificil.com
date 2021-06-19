import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import styles from './styles.module.css';

const Quote = ({ id, date, modifier, onUpdate, text }) => {
  const handleVisibilityChange = inView => {
    if (inView) {
      if (
        typeof window !== `undefined` &&
        window.history &&
        window.history.replaceState
      ) {
        window.history.replaceState(
          null,
          null,
          id === 100 ? window.location.href.split('?')[0] : `?quote=${id}`
        );
      }
      onUpdate();
    }
  };

  return (
    <InView as="div" onChange={handleVisibilityChange} threshold={0.5}>
      <div
        className={classnames(styles.root, {
          [styles[modifier]]: modifier
        })}
        data-date={date}
        id={`quote-${id}`}
      >
        <blockquote>{text}</blockquote>
      </div>
    </InView>
  );
};

Quote.propTypes = {
  modifier: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
  onUpdate: PropTypes.func,
  text: PropTypes.string
};

export default Quote;
