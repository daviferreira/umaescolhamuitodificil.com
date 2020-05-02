import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Graph from '../components/Graph';
import Layout from '../components/Layout';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';
import Video from '../components/Video';

import { setVideoId } from '../reducers/app';

import styles from './styles.module.css';

const IndexPage = () => {
  const dispatch = useDispatch();

  const {
    currentDate,
    currentFormattedDate,
    currentVideoId,
    videoId
  } = useSelector(state => state.app);

  return (
    <Layout>
      <SEO title="Home" />
      <time dateTime={currentDate} className={styles.time}>
        {currentFormattedDate}
        {currentVideoId && (
          <a
            className={styles.link}
            onClick={() => dispatch(setVideoId(currentVideoId))}
          >
            Não acredita? Veja o vídeo.
          </a>
        )}
      </time>
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
    </Layout>
  );
};

export default IndexPage;
