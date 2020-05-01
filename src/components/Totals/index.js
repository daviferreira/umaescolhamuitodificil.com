import React from 'react';

import styles from './styles.module.css';

const Totals = () => (
  <div className={styles.root}>
    <div className={styles.count}>
      <div>Casos</div>
      <div>10</div>
    </div>
    <div className={styles.count}>
      <div>Óbitos</div>
      <div>10</div>
    </div>
  </div>
);

export default Totals;
