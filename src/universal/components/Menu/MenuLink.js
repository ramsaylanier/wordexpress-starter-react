import React from 'react'
import { Link } from 'react-router-dom'

const MenuLink = ({link}) => {

  let type = ''
  let url = ''
  let to = ''

  link.post_meta.forEach(meta => {
    switch (meta.meta_key) {
      case '_menu_item_type':
        type = meta.meta_value
        break
      case '_menu_item_url':
        url = meta.meta_value
        break
    }
  })

  if (type === 'custom') {
    return (
      <a href={url}>{link.post_title}</a>
    )
  } else {
    return (
      <Link to={`/${link.post_name}`}>{link.post_title}</Link>
    )
  }
}

export default MenuLink