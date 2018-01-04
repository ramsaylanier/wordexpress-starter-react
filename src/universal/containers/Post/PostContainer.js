import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import PostQuery from '../../../graphql/post.graphql'
import Post from 'universal/components/Post/Post'

const PostWithData = graphql(PostQuery, {
  options: (props) => {
    return {
      variables: {
        name: props.match.params.name
      }
    }
  }
})(Post)

export default PostWithData
