import React from 'react'
import Button from './Button'
import Link from './Link'
import Logo from './Logo'
import styles from '../app.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo></Logo>
        <Link ></Link>
        <Button></Button>
    </div>
  )
}

export default Navbar