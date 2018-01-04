import React from 'react'

import MenuContainer from 'universal/containers/Menu/MenuContainer'
import Menu from 'universal/components/Menu/Menu'

import styles from './Header.scss'

const AppHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <MenuContainer name="primary-navigation">
          <Menu/>
        </MenuContainer>
      </div>
    </header>
  )
}

export default AppHeader