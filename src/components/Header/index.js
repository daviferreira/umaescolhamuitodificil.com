import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setVideoId } from '../../reducers/app';

import ShareBar from '../ShareBar';

import styles from './styles.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const {
    currentDate,
    currentFormattedDate,
    currentVideoId,
    url
  } = useSelector(state => state.app);

  return (
    <header className={styles.root}>
      <time dateTime={currentDate} className={styles.time}>
        {currentFormattedDate}
        {currentVideoId ? (
          <a
            className={styles.link}
            onClick={() => dispatch(setVideoId(currentVideoId))}
          >
            Veja o vídeo
          </a>
        ) : (
          url && (
            <a
              className={styles.link}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url.includes('facebook') ? 'Veja o vídeo' : 'Veja a reportagem'}
            </a>
          )
        )}
      </time>
      <ShareBar />
    </header>
  );
};

export default Header;
