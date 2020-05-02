import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentData, updateGraphData } from '../../reducers/app';

import Quote from '../Quote';

import removeDuplicates from '../../utils/removeDuplicates';

const QuotesList = () => {
  const dispatch = useDispatch();

  const { lastLoadedDate } = useSelector(state => state.app);

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

    if (currentData.date <= lastLoadedDate) {
      return dispatch(
        updateCurrentData({
          ...currentData,
          nextQuoteId
        })
      );
    }

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
    dispatch(updateGraphData(graphData, nextQuoteId));
  };

  return (
    <>
      {data.map(
        ({ node: { date, formattedDate, order, text, url, videoId } }) => (
          <Quote
            id={order}
            date={date}
            formattedDate={formattedDate}
            key={order}
            onUpdate={() =>
              handleUpdate(order, { date, formattedDate, url, videoId })
            }
            text={text}
          />
        )
      )}
    </>
  );
};

export default QuotesList;
