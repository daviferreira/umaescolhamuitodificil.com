import animateScrollTo from 'animated-scroll-to';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import About from '../components/About';
import Graph from '../components/Graph';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import NextButton from '../components/NextButton';
import QuotesList from '../components/QuotesList';
import SEO from '../components/Seo';
import Totals from '../components/Totals';
import Video from '../components/Video';

import styles from './styles.module.css';

const IndexPage = () => {
  const [open, setOpen] = useState(false);

  const { nextQuoteId, videoId } = useSelector(state => state.app);

  const handleNextClick = () => {
    animateScrollTo(document.getElementById(`quote-${nextQuoteId}`), {
      speed: 600
    });
  };

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
      {nextQuoteId && (
        <div className={styles.next}>
          <NextButton onClick={handleNextClick} />
        </div>
      )}
      <div className={styles.gradient} />
      <div className={styles.graph}>
        <Graph />
      </div>
      <div className={styles.gradientBottom} />
      {videoId && <Video id={videoId} />}
      {open && (
        <Modal closeOnOverlay={false} onClose={() => setOpen(false)}>
          <About />
        </Modal>
      )}
    </Layout>
  );
};

export default IndexPage;
