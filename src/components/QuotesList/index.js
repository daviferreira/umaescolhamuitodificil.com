import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch } from 'react-redux';

import { updateGraphData } from '../../reducers/app';

import Quote from '../Quote';

const QuotesList = () => {
  const dispatch = useDispatch();

  const {
    quotes: { edges: data }
  } = useStaticQuery(graphql`
    query {
      quotes: allQuotesJson(sort: { fields: [id], order: ASC }) {
        edges {
          node {
            id
            cases
            date
            deaths
            formattedDate
            text
          }
        }
      }
    }
  `);

  const handleUpdate = id => {
    const graphData = data
      .filter(({ node }) => node.id <= id)
      .map(({ node: { cases, deaths, formattedDate } }) => ({
        cases,
        deaths,
        label: formattedDate
      }));
    dispatch(updateGraphData(graphData));
  };

  return (
    <>
      {data.map(({ node: { id, text } }) => (
        <Quote key={id} onUpdate={() => handleUpdate(id)} text={text} />
      ))}
    </>
  );
};

export default QuotesList;
