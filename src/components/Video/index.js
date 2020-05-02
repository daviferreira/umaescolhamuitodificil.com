import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { useDispatch } from 'react-redux';

import { setVideoId } from '../../reducers/app';

import styles from './styles.module.css';

const Video = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onEscape = ({ keyCode }) => {
      if (keyCode === 27) {
        dispatch(setVideoId(null));
      }
    };

    document.querySelector('html').classList.add('no-overflow');
    document.addEventListener('keydown', onEscape);

    return () => {
      document.querySelector('html').classList.remove('no-overflow');
      document.removeEventListener('keydown', onEscape);
    };
  }, [dispatch, id]);

  const dimensions = {};
  if (typeof window !== `undefined` && window.innerWidth < 768) {
    dimensions.height = '100%';
    dimensions.width = '100%';
  } else {
    dimensions.height = '390';
    dimensions.width = '640';
  }

  return (
    <div className={styles.modal} onClick={() => dispatch(setVideoId(null))}>
      {id && (
        <div className={styles.close}>
          <span>&times;</span> fechar
        </div>
      )}
      <div className={styles.video}>
        <YouTube
          videoId={id}
          opts={{
            ...dimensions,
            playerVars: {
              autoplay: 1
            }
          }}
        />
      </div>
    </div>
  );
};

Video.propTypes = {
  id: PropTypes.string
};

export default Video;
