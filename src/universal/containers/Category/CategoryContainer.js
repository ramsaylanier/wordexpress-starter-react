import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import CategoryQuery from '../../../graphql/category.graphql'
import CategoryList from 'universal/components/Category/CategoryList'

const CategoryWithData = graphql(CategoryQuery, {
  options: (props) => {
    return {
      variables: {
        term_id: props.match.params.id
      }
    }
  }
})(CategoryList)

export default CategoryWithData
