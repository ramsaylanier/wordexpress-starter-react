import React, {Component, PropTypes} from 'react'
import { graphql } from 'react-apollo'
import MenuQuery from '../../../graphql/menu.graphql'

const Menu = ({children, data}) => {
  return (
    <div>
      {React.Children.map(children, child => {
        return (
          React.cloneElement(child, {data: data})
        )
      })}
    </div>
  )
}

const MenuWithData = graphql(MenuQuery, {
  options: (props) => {
    return {
      variables: {
        menu: props.name
      }
    }
  }
})(Menu)

export default MenuWithData
