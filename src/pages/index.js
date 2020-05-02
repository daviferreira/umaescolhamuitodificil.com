import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Graph from '../components/Graph';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import ShareBar from '../components/ShareBar';
import Totals from '../components/Totals';
import Video from '../components/Video';

import { setVideoId } from '../reducers/app';

import styles from './styles.module.css';

const IndexPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {
    currentDate,
    currentFormattedDate,
    currentVideoId,
    videoId
  } = useSelector(state => state.app);

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className={styles.about}
        onClick={() => setOpen(true)}
        title="Sobre este site"
      >
        ?
      </div>
      <header className={styles.header}>
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
      <Totals />
      <div className={styles.background} />
      <div className={styles.quotesContainer}>
        <QuotesList />
      </div>
      <div className={styles.gradient} />
      <div className={styles.graph}>
        <Graph />
      </div>
      <div className={styles.gradientBottom} />
      {videoId && <Video id={videoId} />}
      {open && (
        <Modal closeOnOverlay={false} onClose={() => setOpen(false)}>
          About
        </Modal>
      )}
    </Layout>
  );
};

export default IndexPage;
