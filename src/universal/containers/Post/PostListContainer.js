import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import PostsQuery from '../../../graphql/posts.graphql'
import PostList from 'universal/components/Post/PostList'

const PostListWithData = graphql(PostsQuery, {
  options: {
    variables: {
      name: 'homepage'
    }
  }
})(PostList)

export default PostListWithData
