import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { DEFAULT_DATA_OPTIONS } from './constants';
import { getOptions } from './utils';

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
        ...DEFAULT_DATA_OPTIONS,
        borderColor: 'rgba(75,192,192,1)',
        label: 'Casos confirmados',
        data: cases
      },
      {
        ...DEFAULT_DATA_OPTIONS,
        borderColor: 'red',
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
