import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch } from 'react-redux';

import { updateGraphData } from '../../reducers/app';

import Quote from '../Quote';

import removeDuplicates from '../../utils/removeDuplicates';

const QuotesList = () => {
  const dispatch = useDispatch();

  const {
    quotes: { edges: data }
  } = useStaticQuery(graphql`
    query {
      quotes: allQuotesJson(sort: { fields: [order], order: [ASC] }) {
        edges {
          node {
            order
            cases
            date
            deaths
            formattedDate
            text
            url
            videoId
          }
        }
      }
    }
  `);

  const handleUpdate = (order, currentData) => {
    const nextQuote = data.find(({ node }) => node.order > order);
    const nextQuoteId = nextQuote && nextQuote.node.order;

    const graphData = removeDuplicates(
      data
        .filter(({ node }) => node.order <= order)
        .map(
          ({ node: { cases, date, deaths, formattedDate, url, videoId } }) => ({
            cases,
            date,
            deaths,
            formattedDate,
            url,
            videoId
          })
        ),
      'date'
    );
    dispatch(
      updateGraphData({
        data: graphData,
        currentData,
        nextQuoteId
      })
    );
  };

  return (
    <>
      {data.map(
        ({
          node: {
            cases,
            date,
            deaths,
            formattedDate,
            order,
            text,
            url,
            videoId
          }
        }) => (
          <Quote
            id={order}
            date={date}
            formattedDate={formattedDate}
            key={order}
            onUpdate={() =>
              handleUpdate(order, {
                cases,
                date,
                deaths,
                formattedDate,
                url,
                videoId
              })
            }
            text={text}
          />
        )
      )}
    </>
  );
};

export default QuotesList;
