import React, { useState } from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function Header () {
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon icon={faFacebook}
        className={styles.icon}
        id={styles.facebook}
      />
      <FontAwesomeIcon icon={faGoogle}
        className={styles.icon}
        id={styles.google}
      />
      <FontAwesomeIcon icon={faGithub}
        className={styles.icon}
        href="https://kndwin.dev"
      />
    </footer>
  )
}
