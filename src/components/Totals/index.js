import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';

import styles from './styles.module.css';

const Totals = () => {
  const { currentDate, totalCases, totalDeaths } = useSelector(
    state => state.app
  );

  return (
    <div className={styles.root}>
      {currentDate && <time>{currentDate}</time>}
      <div className={styles.count}>
        <div>Casos</div>
        <CountUp end={totalCases} style={{ color: 'rgba(75, 192, 192, 1)' }} />
      </div>
      <div className={styles.count}>
        <div>Óbitos</div>
        <CountUp end={totalDeaths} style={{ color: 'red' }} />
      </div>
    </div>
  );
};

export default Totals;
