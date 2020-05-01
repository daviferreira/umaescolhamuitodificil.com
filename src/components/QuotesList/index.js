import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Quote from '../Quote';

const QuotesList = () => {
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

  return (
    <>
      {data.map(
        ({ node: { id, cases, date, deaths, formattedDate, text } }) => (
          <Quote
            key={id}
            date={formattedDate}
            graphData={{
              cases,
              date,
              deaths,
              label: formattedDate
            }}
            text={text}
          />
        )
      )}
    </>
  );
};

export default QuotesList;
