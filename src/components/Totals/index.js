import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';

import usePrevious from '../../hooks/usePrevious';

import styles from './styles.module.css';

const Totals = () => {
  const { totalCases, totalDeaths } = useSelector(state => state.app);

  const previousTotalCases = usePrevious(totalCases);
  const previousTotalDeaths = usePrevious(totalDeaths);

  return (
    <div className={styles.root}>
      <div className={styles.count}>
        <div>Casos</div>
        <CountUp
          start={previousTotalCases}
          end={totalCases}
          style={{ color: 'rgba(75, 192, 192, 1)' }}
        />
      </div>
      <div className={styles.count}>
        <div>Óbitos</div>
        <CountUp
          start={previousTotalDeaths}
          end={totalDeaths}
          style={{ color: 'red' }}
        />
      </div>
    </div>
  );
};

export default Totals;
