import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./styles.module.css"

const Image = ({ index }) => {
  const data = useStaticQuery(graphql`
    query {
      bolsonaro1: file(relativePath: { eq: "bolsonaro1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bolsonaro2: file(relativePath: { eq: "bolsonaro2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bolsonaro3: file(relativePath: { eq: "bolsonaro3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bolsonaro4: file(relativePath: { eq: "bolsonaro4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      alt=""
      className={styles.image}
      fluid={data[`bolsonaro${index}`].childImageSharp.fluid}
    />
  )
}

Image.propTypes = {
  index: PropTypes.number,
}

export default Image
