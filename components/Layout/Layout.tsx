import React, { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import Header from './Header/Header'

export default function Layout ({ 
  children, 
  title = 'Decoco Designs',
  page
}: {
  children?: ReactNode
  title?: string
  page?: string
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
      <div className={styles.container}>
        <Header scrolled={scrolled}
          page={page}
        />
        <div className={scrolled ? `${styles.main} ${styles.navPadding}` : styles.main}>
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
