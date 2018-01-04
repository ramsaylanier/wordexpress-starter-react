import React, {Component} from 'react'
import parseContent from 'universal/helpers/parseContent'
import {map} from 'lodash'
import {withRouter} from 'react-router'

import styles from './Post.scss'

class PostContent extends Component{
  render () {
    return (
      <div 
        className={styles.postContent}
        dangerouslySetInnerHTML={this.parseContent()}
        ref={c => this._el = c}/> 
    )
  }

  componentDidMount () {
    const anchors = this._el.getElementsByTagName('a')
    const r = new RegExp('^(?:[a-z]+:)?//', 'i')
    const m = new RegExp('mailto', 'g')

    // add transitions to all internal links
    map(anchors, anchor => {
      const target = anchor.getAttribute('href')
      if (!r.test(target) && !m.test(target)) {
        anchor.addEventListener('click', (e) => {
          e.preventDefault()
          this.props.history.push(target)
        })
      }
    })
  }

  parseContent () {
    return {__html: parseContent(this.props.content) }
  }
}

export default withRouter(PostContent)