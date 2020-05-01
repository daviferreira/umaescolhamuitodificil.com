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
            date
            formattedDate
            text
          }
        }
      }
    }
  `);

  return (
    <>
      {data.map(({ node: { id, formattedDate: date, text } }) => (
        <Quote key={id} date={date} text={text} />
      ))}
    </>
  );
};

export default QuotesList;
