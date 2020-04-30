import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/Layout';
import Mosaic from '../components/Mosaic';
import SEO from '../components/Seo';

const SecondPage = () => (
  <Layout withHeader>
    <SEO title="Page two" />
    <Mosaic />
  </Layout>
);

export default SecondPage;
