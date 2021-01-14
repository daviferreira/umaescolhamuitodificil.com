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
        href="https://twitter.com/jasonptodd/"
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
        href="https://twitter.com/tesoureiros/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tesoureiros do Jair
      </a>
      .
    </p>
    <p>
      Dados do gráfico:{' '}
      <a
        href="https://covid.saude.gov.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ministério da Saúde
      </a>
    </p>
    <p>
      Ícone do gráfico por{' '}
      <a href="https://www.flaticon.com/authors/becris" title="Becris">
        Becris
      </a>
      .
    </p>
    <p>
      <a
        href="https://docs.google.com/spreadsheets/d/18SGmEnBtA157mAV-i2wDBO_yc4I1EekW7cNS8ameiJo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Planilha com todas as frases
      </a>
    </p>
    <div className={styles.share}>
      <div className={styles.heading}>Compartilhe:</div>
      <ShareBar animated={false} />
    </div>
    <p className={styles.extra}>
      Veja também:{' '}
      <a
        href="https://www.vazajato.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linha do tempo da #VazaJato
      </a>
    </p>
  </div>
);

export default About;
