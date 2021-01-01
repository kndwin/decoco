import React, { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.scss'

export default function Layout ({ 
  children, 
  title = 'Decoco Designs'
}: {
  children?: ReactNode
  title?: string
}) {

  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleScroll = () => {
    const offset = window.pageYOffset
    if (offset > 110) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header id={styles.nav}
        className={`${scrolled ? styles.scrolled : "" }`}>
        <Link href="/">
          <a id={styles.homeLink}>
            <img src='/logo-black.png' 
              alt="Logo for Decoco" 
              className={styles.logo}
            />
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
      </header>
      <div className={styles.container}>
        <div className={styles.main}>
          {children}
        </div>
        <footer className={styles.footer}>
          <a href="https://kndwin.dev">
          <span style={{fontWeight: 'bold'}}>{`{ }`}</span>
          &nbsp; with ❤ by kndwin
          </a>
        </footer>
      </div>
    </div>
  )
} 
