import React, { useState } from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function Header () {
  return (
    <footer className={styles.footer}>
    <a href="https://www.facebook.com/De-coco-Designs-347562266414438">
      <FontAwesomeIcon icon={faFacebook}
        className={styles.icon}
        id={styles.facebook}
      />
    </a>
    </footer>
  )
}
