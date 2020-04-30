import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2a2e55`,
      borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      color: `#fafafa`,
      marginBottom: `1.45rem`,
      padding: 12
    }}
  >
    <Link
      to="/"
      style={{
        color: `#ccc`,
        textDecoration: `none`
      }}
    >
      Capa
    </Link>{' '}
    / Tópicos
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
