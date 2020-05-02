import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

import styles from './styles.module.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.notFound}>
      <h1>Página não encontrada :(</h1>
      <Link to="/">Voltar</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
