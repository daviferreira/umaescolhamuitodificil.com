import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import image1 from '../../images/6100.jpg';
import image2 from '../../images/6200.gif';

import styles from './styles.module.css';

const IMAGES = {
  6100: image1,
  6200: image2
};

const Quote = ({ id, date, image, onUpdate, text, url }) => {
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
      <div className={styles.root} data-date={date} id={`quote-${id}`}>
        {image ? (
          <a
            className={styles.image}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IMAGES[id]} />
            {id === 6100 && <small>Foto: Orlando Brito</small>}
          </a>
        ) : (
          <blockquote>{text}</blockquote>
        )}
      </div>
    </InView>
  );
};

Quote.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  image: PropTypes.bool,
  onUpdate: PropTypes.func,
  text: PropTypes.string,
  url: PropTypes.string
};

export default Quote;
