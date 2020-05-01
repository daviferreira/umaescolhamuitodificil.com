import React from 'react';

import Graph from '../components/Graph';
import Layout from '../components/Layout';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';

import styles from './styles.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Totals />
      <div className={styles.background} />
      <div className={styles.quotesContainer}>
        <QuotesList />
      </div>
      <div className={styles.graph}>
        <Graph />
      </div>
    </Layout>
  );
};

export default IndexPage;
