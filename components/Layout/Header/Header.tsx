import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header ({
  scrolled,
}: {
  scrolled: boolean
}) {
  
  const [clicked, setClick] = useState<boolean>(false)

  const handleClick = () => {
    setClick(!clicked)
  }

  return (
  <>
    <header id={styles.nav}
      className={scrolled ? styles.scrolled : ""}
      onClick={handleClick}
    >
      <img src='/logo-black.png' 
        alt="Logo for Decoco" 
        className={styles.logo}
      />
      <div className={clicked ? styles.link : styles.collapse}>
        <Link href="/">
          <a id={styles.homeLink}>
            Home
          </a>
        </Link>          
        <Link href="/about-us">
          <a>About Us</a>
        </Link>
        <Link href="/collection">
          <a>Collection</a>
        </Link>
        <Link href='/contact-us'>
          <a>Contact Us</a>
        </Link>
      </div>
    </header>
  </>
  )
}
