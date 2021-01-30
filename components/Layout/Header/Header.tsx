import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'
import { getCollectionData } from '../../../lib/collectionData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Header ({
  scrolled,
  page,
}: {
  scrolled: boolean
  page?: string
}) {
  
  const [clicked, setClick] = useState<boolean>(false)
  const [dropdown, setDropdown] = useState<boolean>(false)
  const collectionData = getCollectionData()

  const handleClick = () => setClick(!clicked)
  const handleDropdown = () => setDropdown(!dropdown)

  const ref = useRef(null);
  const handleClickOutsideOfDropdown = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideOfDropdown, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideOfDropdown, true);
    };
  });


  return (
  <>
    <header id={styles.nav}
      className={scrolled ? styles.scrolled : ""}
      onClick={handleClick}
    >
      <div id={`${styles.logoCss}`}>
        <Link href="/">
          <a>
            De<span style={{color: "darkorange"}}>-</span>coco
          </a>
        </Link>
      </div>
      <div className={clicked ? styles.link : styles.collapse}>
        <Link href="/">
          <a className={page == "/" ? styles.underline : ""}>
            Home
          </a>
        </Link>          
        <div className={styles.collection} >
          <Link href="/collection">
            <a className={page == "collection" ? styles.underline : ""}>
              Collections
            </a>
          </Link>
          <FontAwesomeIcon icon={faCaretDown}
            onClick={handleDropdown}
            className={styles.icon}
          />
          <div className={dropdown ? styles.dropdown : styles.dropCollapse}
            ref={ref}
          >
            {collectionData.map((item, index) => (
              <Link as={`/collection/${item.title.toLowerCase().replace(' ', '-')}`}
                href="/collection/[collections]">
                <a key={index}>{item.title}</a>
              </Link>
            ))}
          </div>
        </div>
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
