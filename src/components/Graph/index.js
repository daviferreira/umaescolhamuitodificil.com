import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { getDataOptions, getOptions } from './utils';

import { COLOR_CASES, COLOR_DEATHS } from '../../constants/colors';

import removeDuplicates from '../../utils/removeDuplicates';

const Graph = () => {
  const { cases, deaths, labels } = useSelector(state => state.app);
  const [render, setRender] = useState(false);

  const {
    quotes: { edges }
  } = useStaticQuery(graphql`
    query {
      quotes: allQuotesJson(sort: { fields: [cases], order: ASC }) {
        edges {
          node {
            cases
            date
            formattedDate
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
        label: 'Mortes',
        data: deaths
      }
    ]
  };

  const suggestedMax = edges[edges.length - 1].node.cases;

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 500);
  }, []);

  if (!render) {
    return null;
  }

  return (
    <Line
      id="graph"
      key="graph"
      data={data}
      options={getOptions({
        edges: removeDuplicates(
          edges.map(({ node: { date, formattedDate } }) => ({
            date,
            formattedDate
          })),
          'date'
        ),
        suggestedMax
      })}
    />
  );
};

export default Graph;
