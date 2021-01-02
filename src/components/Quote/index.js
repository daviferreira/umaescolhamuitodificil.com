import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';

import Image from './Image';

import styles from './styles.module.css';

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
            <div>
              <Image id={id} />
              {id === 6100 ? (
                <small>Foto: Orlando Brito</small>
              ) : (
                id === 6200 && <small>Foto: Neyara Pinheiro/ TV Clube</small>
              )}
            </div>
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
