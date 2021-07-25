import animateScrollTo from 'animated-scroll-to';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from 'store2';

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
import { setShowGraph } from '../reducers/app';

import styles from './styles.module.css';

const IndexPage = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { nextQuoteId, previousQuoteId, showGraph, videoId } = useSelector(
    state => state.app
  );

  const handleNextClick = () => {
    animateScrollTo(document.getElementById(`quote-${nextQuoteId}`), {
      speed: 600
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(
        setShowGraph(
          store.get('show_graph') === true || store.get('show_graph') === 'true'
        )
      );

      if (window.location.search) {
        const match = window.location.search.match(/\d+/);
        if (match && match[0]) {
          const el = document.getElementById(`quote-${match[0]}`);
          el && el.scrollIntoView();
        }
      }
    }
  }, [dispatch]);

  useEffect(() => {
    let timer;

    const onKeyDown = e => {
      clearTimeout(timer);

      // space or arrow up/down
      if (
        !(e.altKey || e.metaKey || e.shiftKey) &&
        (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 40)
      ) {
        e.preventDefault();
        const el = document.getElementById(
          `quote-${e.keyCode === 38 ? previousQuoteId : nextQuoteId}`
        );

        if (el) {
          timer = setTimeout(() => {
            animateScrollTo(el, {
              speed: 600
            });
          }, 0);
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [nextQuoteId, previousQuoteId]);

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
      {showGraph && (
        <div className={styles.graph}>
          <Graph />
        </div>
      )}
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
