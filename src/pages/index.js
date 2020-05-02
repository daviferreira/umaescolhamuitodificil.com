import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Graph from '../components/Graph';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';
import Video from '../components/Video';

import styles from './styles.module.css';

const IndexPage = () => {
  const [open, setOpen] = useState(false);

  const { videoId } = useSelector(state => state.app);

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
      <Header />
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
