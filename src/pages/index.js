import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from "./styles.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.cover}>
      <div className={styles.image}>
        <Image />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Uma escolha muito difícil</h1>
        </div>
        <p className={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper mi est, pretium auctor sapien imperdiet nec. Maecenas nec
          turpis non odio fermentum varius eu vel sapien. Donec at cursus odio.
        </p>
        <div className={styles.actions}>
          <Link to="/page-2" className={styles.button} role="button">
            Lorem ipsum dolor
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
