import React from 'react'
import {Link} from 'react-router-dom'

import formatDate from 'universal/helpers/formatDate'

import styles from './PostList.scss'

const PostListItem = ({post}) => {
  return (
    <div className={styles.item}>
      <Link to={`/post/${post.post_name}`} className={styles.link}>
        <h3 className={styles.title}>{post.post_title}</h3>
        <p className={styles.date}>{formatDate(post.post_date)}</p>
      </Link>
      <ul className={styles.categories}>
        {post.categories.map(category => {
          return (
            <li className={styles.category} key={category.term_id}>
              <Link to={`/category/${category.term_id}`}>
                {category.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostListItem