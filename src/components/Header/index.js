import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setVideoId } from '../../reducers/app';

import ShareBar from '../ShareBar';

import styles from './styles.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const { currentDate, currentFormattedDate, currentVideoId } = useSelector(
    state => state.app
  );

  return (
    <header className={styles.root}>
      <time dateTime={currentDate} className={styles.time}>
        {currentFormattedDate}
        {currentVideoId && (
          <a
            className={styles.link}
            onClick={() => dispatch(setVideoId(currentVideoId))}
          >
            Veja o vídeo
          </a>
        )}
      </time>
      <ShareBar />
    </header>
  );
};

export default Header;
