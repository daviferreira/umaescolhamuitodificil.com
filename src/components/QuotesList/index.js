import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch } from 'react-redux';

import { setVideoId, updateGraphData } from '../../reducers/app';

import Quote from '../Quote';

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

const QuotesList = () => {
  const dispatch = useDispatch();

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
            videoId
          }
        }
      }
    }
  `);

  const handleUpdate = date => {
    const graphData = removeDuplicates(
      data
        .filter(({ node }) => node.date <= date)
        .map(({ node: { cases, deaths, formattedDate } }) => ({
          cases,
          deaths,
          label: formattedDate
        })),
      'label'
    );
    dispatch(updateGraphData(graphData));
  };

  return (
    <>
      {data.map(({ node: { date, id, text, videoId } }) => (
        <Quote
          key={id}
          onClick={() => dispatch(setVideoId(videoId))}
          onUpdate={() => handleUpdate(date)}
          text={text}
        />
      ))}
    </>
  );
};

export default QuotesList;
