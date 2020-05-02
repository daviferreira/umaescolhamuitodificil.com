import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { useDispatch } from 'react-redux';

import Modal from '../Modal';

import { setVideoId } from '../../reducers/app';

import styles from './styles.module.css';

const Video = ({ id }) => {
  const dispatch = useDispatch();

  const dimensions = {};
  if (typeof window !== `undefined` && window.innerWidth < 768) {
    dimensions.height = '100%';
    dimensions.width = '100%';
  } else {
    dimensions.height = '390';
    dimensions.width = '640';
  }

  return (
    <Modal onClose={() => dispatch(setVideoId(null))}>
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
    </Modal>
  );
};

Video.propTypes = {
  id: PropTypes.string
};

export default Video;
