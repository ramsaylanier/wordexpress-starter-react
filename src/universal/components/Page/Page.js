import React, {Component} from 'react'
import PageWithHeader from './PageWithHeader'
import PostList from 'universal/containers/Post/PostListContainer'

import styles from './Page.scss';

const LayoutMap = {
  PageWithHeader,
  PostList
}

export default class Page extends Component{
  render () {

    if (this.props.data.loading){
      return null
    }

    const {post} = this.props.data

    return (
      <div>
        {post && this.renderLayout()}
      </div>
    )
  }

  renderLayout () {
    const Layout = LayoutMap[this.props.data.post.layout.meta_value]
    return (
      <Layout page={this.props.data.post}/>
    )
  }
}