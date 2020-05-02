import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import FacebookIcon from './facebook.svg';
import TwitterIcon from './twitter.svg';
import WhatsappIcon from './whatsapp.svg';

import styles from './styles.module.css';

const ShareBar = ({
  animated = true,
  text = 'Uma escolha muito difícil - Bolsonaro e a pandemia',
  url = 'https://www.umaescolhamuitodificil.com'
}) => (
  <div
    className={classnames(styles.root, {
      [styles.animated]: animated
    })}
  >
    <a
      className={styles.button}
      href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
      rel="noopener noreferrer"
      target="_blank"
      title="Compartilhe no Facebook"
    >
      <FacebookIcon />
    </a>
    <a
      className={styles.button}
      href={`https://twitter.com/share?text=${text}&url=${url}&via=davitferreira`}
      rel="noopener noreferrer"
      target="_blank"
      title="Compartilhe no Twitter"
    >
      <TwitterIcon />
    </a>
    <a
      className={styles.button}
      data-action="share/whatsapp/share"
      href={`whatsapp://send?text=${text} - ${url}`}
      title="Compartilhe no Whatsapp"
    >
      <WhatsappIcon />
    </a>
  </div>
);

ShareBar.propTypes = {
  animated: PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string
};

export default ShareBar;
