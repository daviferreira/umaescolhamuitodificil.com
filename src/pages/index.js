import React from 'react';
import { useSelector } from 'react-redux';

import Graph from '../components/Graph';
import Layout from '../components/Layout';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';
import Video from '../components/Video';

import styles from './styles.module.css';

const IndexPage = () => {
  const { videoId } = useSelector(state => state.app);

  return (
    <Layout>
      <SEO title="Home" />
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
