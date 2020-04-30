/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

import './layout.css';

const Layout = ({ children, withHeader }) => (
  <div>
    {withHeader && <Header />}
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  withHeader: PropTypes.bool
};

export default Layout;
