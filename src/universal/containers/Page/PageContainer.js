import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import PageQuery from '../../../graphql/page.graphql'
import Page from 'universal/components/Page/Page'

const PageWithData = graphql(PageQuery, {
  options: (props) => {
    return {
      variables: {
        name: props.match.params.name || 'homepage'
      }
    }
  }
})(Page)

export default PageWithData
