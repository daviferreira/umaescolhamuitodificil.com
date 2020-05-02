import React from 'react';

import ShareBar from '../ShareBar';

import styles from './styles.module.css';

const About = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Uma escolha muito difícil?</h2>
    <p>
      <a
        href="https://github.com/daviferreira/umaescolhamuitodificil.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desenvolvido
      </a>{' '}
      por{' '}
      <a
        href="http://twitter.com/davitferreira/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Davi Ferreira
      </a>{' '}
      com base no gráfico criado por{' '}
      <a
        href="https://twitter.com/jasonptodd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Julio Ponce
      </a>
      .
    </p>
    <p>
      Ideia da conta{' '}
      <a
        href="https://twitter.com/tesoureiros/status/1255576526457798660"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tesoureiros do Jair
      </a>
      .
    </p>
    <p>
      Dados:{' '}
      <a
        href="https://covid.saude.gov.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ministério da Saúde
      </a>
    </p>
    <div className={styles.share}>
      <div className={styles.heading}>Compartilhe:</div>
      <ShareBar animated={false} />
    </div>
  </div>
);

export default About;
