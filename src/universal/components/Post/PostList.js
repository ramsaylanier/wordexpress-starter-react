import React from 'react'
import PageHeader from 'universal/components/Page/PageHeader'
import PostListItem from './PostListItem'

import styles from './PostList.scss'

const PostList = ({data}) => {

  if (data.loading) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <PageHeader page={{post_title: 'Posts'}}/>
      <div className={styles.content}>
        <div className={styles.posts}>
          {data.posts.map(post => {
            return (
              <PostListItem post={post} key={post.id}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PostList