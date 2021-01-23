import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header ({
  scrolled,
  page
}: {
  scrolled: boolean
  page?: string
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
          <a className={page == "/" ? styles.underline : ""}>
            Home
          </a>
        </Link>          
        <Link href="/collection">
          <a className={page == "collection" ? styles.underline : ""}>
            Collections 
          </a>
        </Link>
        <Link href="/about-us">
          <a className={page == "about-us" ? styles.underline : ""}>
            About us
          </a>
        </Link>
        <Link href="/contact-us">
          <a className={page == "contact-us" ? styles.underline : ""}>
            Contact us
          </a>
        </Link>
      </div>
    </header>
  </>
  )
}
