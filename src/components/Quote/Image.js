import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      image6100: file(relativePath: { eq: "6100.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6200: file(relativePath: { eq: "6200.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9500: file(relativePath: { eq: "9500.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[`image${id}`].childImageSharp.fluid} />;
};

Image.propTypes = {
  id: PropTypes.number
};

export default Image;
