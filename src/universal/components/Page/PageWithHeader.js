import React, {Component} from 'react'
import PageHeader from './PageHeader'
import PostContent from 'universal/components/Post/PostContent'

import styles from './Page.scss'

export default class PageWithHeader extends Component{
  render () {
    return (
      <div className={styles.wrapper}>
        <PageHeader page={this.props.page}/>
        <div className={styles.pageContent}>
          <PostContent content={this.props.page.post_content}/>
        </div>
      </div>
    ) 
  }
}