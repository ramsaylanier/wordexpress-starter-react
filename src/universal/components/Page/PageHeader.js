import React from 'react'

import styles from './Page.scss'

const PageHeader = ({page}) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageHeaderContent}>
        <h2 className={styles.pageTitle}>{page.post_title}</h2>
      </div>
    </div>
  )
}

export default PageHeader