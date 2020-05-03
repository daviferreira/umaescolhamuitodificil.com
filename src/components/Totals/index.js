import React from 'react';
import { useSelector } from 'react-redux';
import CountUp from 'react-countup';

import usePrevious from '../../hooks/usePrevious';

import { COLOR_CASES, COLOR_DEATHS } from '../../constants/colors';

import styles from './styles.module.css';

const Totals = () => {
  const { totalCases, totalDeaths } = useSelector(state => state.app);

  const previousTotalCases = usePrevious(totalCases) || 0;
  const previousTotalDeaths = usePrevious(totalDeaths) || 0;

  return (
    <div className={styles.root}>
      <div className={styles.count}>
        <div>Casos</div>
        <CountUp
          separator="."
          start={previousTotalCases}
          end={totalCases}
          style={{ color: COLOR_CASES }}
        />
      </div>
      <div className={styles.count}>
        <div>Mortes</div>
        <CountUp
          separator="."
          start={previousTotalDeaths}
          end={totalDeaths}
          style={{ color: COLOR_DEATHS }}
        />
      </div>
    </div>
  );
};

export default Totals;
