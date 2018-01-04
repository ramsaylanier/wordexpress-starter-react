import React from 'react'
import PostContent from './PostContent'

import style from './Post.scss'

const Post = ({data}) => {

  if (data.loading) {
    return null
  }

  const {post} = data
  
  return (
    <div>
      <div className={style.header}>
        <h2 className={style.title}>{post.post_title}</h2>
      </div>
      <div className={style.content}>
        <PostContent content={post.post_content}/>
      </div>
    </div>
  )
}

export default Post