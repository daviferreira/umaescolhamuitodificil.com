import React from 'react';
import { useSelector } from 'react-redux';

import Graph from '../components/Graph';
import Layout from '../components/Layout';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';

import styles from './styles.module.css';

const IndexPage = () => {
  const { currentDate } = useSelector(state => state.app);

  return (
    <Layout>
      <SEO title="Home" />
      {currentDate && <time className={styles.time}>{currentDate}</time>}
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
    </Layout>
  );
};

export default IndexPage;
