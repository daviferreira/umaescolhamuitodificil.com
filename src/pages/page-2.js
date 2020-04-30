import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/layout';
import Mosaic from '../components/Mosaic';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout withHeader>
    <SEO title="Page two" />
    <Mosaic />
  </Layout>
);

export default SecondPage;
