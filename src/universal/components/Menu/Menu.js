import React from 'react'
import MenuLink from './MenuLink'
import {Link} from 'react-router-dom'

import styles from './Menu.scss'

const Menu = ({data}) => {
  if (data.loading){
    return null
  }

  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link to="/">Home</Link>
      </li>
      {data.menus.items.map(item => {
        return (
          <li className={styles.item} key={item.id}>
            <MenuLink link={item.navitem}/>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu