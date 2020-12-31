import React, { ReactNode } from 'react'
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
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={styles.nav}>
          <Link href="/">
            <a>Home</a>
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
        </nav>
      </header>
      <div className={styles.container}>
        <div className={styles.main}>
          {children}
        </div>
        <footer className={styles.footer}>
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </footer>
      </div>
    </div>
  )
} 
