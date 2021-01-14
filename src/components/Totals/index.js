import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';

import { toggleGraph } from '../../reducers/app';

import usePrevious from '../../hooks/usePrevious';

import { COLOR_CASES, COLOR_DEATHS } from '../../constants/colors';

import styles from './styles.module.css';

const Totals = () => {
  const dispatch = useDispatch();
  const { showGraph, totalCases, totalDeaths } = useSelector(
    state => state.app
  );

  const previousTotalCases = usePrevious(totalCases);
  const previousTotalDeaths = usePrevious(totalDeaths);

  return (
    <div className={styles.root}>
      <div className={styles.count}>
        <div>Casos</div>
        <CountUp
          separator="."
          start={previousTotalCases || 0}
          end={totalCases}
          style={{ color: COLOR_CASES }}
        />
      </div>
      <div className={styles.count}>
        <div>Mortes</div>
        <CountUp
          separator="."
          start={previousTotalDeaths || 0}
          end={totalDeaths}
          style={{ color: COLOR_DEATHS }}
        />
      </div>
      <div className={styles.graphToggler}>
        <label>
          <input
            type="checkbox"
            checked={showGraph}
            onChange={() => dispatch(toggleGraph())}
          />
          Exibir gráfico
        </label>
      </div>
    </div>
  );
};

export default Totals;
