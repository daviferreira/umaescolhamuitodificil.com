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
      quotes: allQuotesJson(sort: { fields: [date], order: [ASC] }) {
        edges {
          node {
            id
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

  const handleUpdate = (date, currentData) => {
    if (date <= lastLoadedDate) {
      return dispatch(updateCurrentData(currentData));
    }

    const graphData = removeDuplicates(
      data
        .filter(({ node }) => node.date <= date)
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
    dispatch(updateGraphData(graphData));
  };

  return (
    <>
      {data.map(({ node: { date, formattedDate, id, text, url, videoId } }) => (
        <Quote
          date={date}
          formattedDate={formattedDate}
          key={id}
          onUpdate={() =>
            handleUpdate(date, { date, formattedDate, url, videoId })
          }
          text={text}
        />
      ))}
    </>
  );
};

export default QuotesList;
