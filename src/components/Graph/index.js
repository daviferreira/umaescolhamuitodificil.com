import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { getDataOptions, getOptions } from './utils';

const COLOR_CASES = 'rgba(75,192,192,1)';
const COLOR_DEATHS = 'red';

const Graph = () => {
  const { cases, deaths, labels } = useSelector(state => state.app);

  const {
    quotes: { edges }
  } = useStaticQuery(graphql`
    query {
      quotes: allQuotesJson(sort: { fields: [cases], order: DESC }, limit: 1) {
        edges {
          node {
            cases
          }
        }
      }
    }
  `);

  const data = {
    labels,
    datasets: [
      {
        ...getDataOptions({ color: COLOR_CASES }),
        borderColor: COLOR_CASES,
        label: 'Casos confirmados',
        data: cases
      },
      {
        ...getDataOptions({ color: COLOR_DEATHS }),
        borderColor: COLOR_DEATHS,
        label: 'Óbitos',
        data: deaths
      }
    ]
  };

  const suggestedMax = edges[0].node.cases;

  return (
    <Line
      id="graph"
      key="graph"
      data={data}
      options={getOptions({ suggestedMax })}
    />
  );
};

export default Graph;
