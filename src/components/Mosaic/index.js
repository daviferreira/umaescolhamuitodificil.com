import React, { useEffect } from "react"

import Image from "./image"

import styles from "./styles.module.css"

const items = [{
  id: 1,
  title: 'Milícia'
}, {
  id: 1,
  title: 'Presidência'
}, {
  id: 1,
  title: 'COVID-19'
}];

const Mosaic = () => {
  useEffect(() => {
    document.body.classList.add("internal")

    return () => {
      document.body.classList.remove("internal")
    }
  })

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <div className={styles.content}>
          <Image index={1} />
          <h2 className={styles.title}>
            <span>Early days</span>
          </h2>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <Image index={2} />
          <h2 className={styles.title}>
            <span>Planalto</span>
          </h2>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <Image index={3} />
          <h2 className={styles.title}>
            <span>Campanha</span>
          </h2>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <Image index={4} />
          <h2 className={styles.title}>
            <span>Família</span>
          </h2>
        </div>
      </div>
      {items.map(({ id, title }) => (
        <div className={styles.item} key={id}>
          <div className={styles.content}>
            <Image index={4} />
            <h2 className={styles.title}>
              <span>{title}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Mosaic
