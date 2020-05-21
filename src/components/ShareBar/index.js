import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import FacebookIcon from './facebook.svg';
import TwitterIcon from './twitter.svg';
import WhatsappIcon from './whatsapp.svg';

import styles from './styles.module.css';

const ShareBar = ({
  animated = true,
  text,
  url = 'https://www.umaescolhamuitodificil.com'
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  let shareText = text || site.siteMetadata.title;
  let shareUrl = url;

  if (typeof window !== 'undefined' && window.location.search) {
    const match = window.location.search.match(/\d+/);
    if (match && match[0] && match[0] !== '100') {
      const el = document.getElementById(`quote-${match[0]}`);
      if (el) {
        shareUrl += window.location.search;
        shareText = encodeURIComponent(`"${el.textContent || el.innerText}"`);

        shareUrl = encodeURIComponent(shareUrl);
      }
    }
  }

  return (
    <div
      className={classnames(styles.root, {
        [styles.animated]: animated
      })}
    >
      <a
        className={styles.button}
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        rel="noopener noreferrer"
        target="_blank"
        title="Compartilhe no Facebook"
      >
        <FacebookIcon />
      </a>
      <a
        className={styles.button}
        href={`https://twitter.com/share?text=${shareText}&url=${shareUrl}`}
        rel="noopener noreferrer"
        target="_blank"
        title="Compartilhe no Twitter"
      >
        <TwitterIcon />
      </a>
      <a
        className={styles.button}
        data-action="share/whatsapp/share"
        href={`whatsapp://send?text=${shareText} - ${shareUrl}`}
        title="Compartilhe no Whatsapp"
      >
        <WhatsappIcon />
      </a>
    </div>
  );
};

ShareBar.propTypes = {
  animated: PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string
};

export default ShareBar;
