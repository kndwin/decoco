import { useState } from 'react'
import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import styles from './contact-us.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Map from '../components/Map/Map'

export default function ContactUs() {
  const [visible, setVisibility] = useState<boolean>(false)
  const handleFormVisbility = () => {
    setVisibility(!visible)
  }

  return (
    <Layout page="contact-us">
      <h1 className={utils.title}>
        Contact Us
      </h1>
      <div className={styles.mapDescription}>
        <div className={visible ? styles.form : styles.noForm}>
          <h2 className={`${styles.titleH2}`}>
            Fill out form below!
          </h2>
          <ContactForm isCancel={handleFormVisbility}/>
        </div>
        <div className={!visible ? styles.description : styles.noForm}>
          <h2 className={`${styles.titleH2}`}>
            Location
          </h2>
          <p className={`${styles.fontDescription}`}>
             865 Punchbowl Road, Punchbowl, NSW, 2196, Australia
            <br/>
          </p>
          <h2 className={`${styles.titleH2}`}>
           Phone number
          </h2>
          <p className={`${styles.fontDescription}`}>
            0401119989
          </p>
          <h2 className={`${styles.titleH2}`}>
             Opening hours
          </h2>
          <p className={`${styles.fontDescription}`}>
            Monday - Friday: 9AM to 5PM
            <br/>
            Saturday: 10AM - 4PM
            <br/>
            Sunday: Closed
          </p>
          <button className={styles.button}
            onClick={handleFormVisbility}>
            Get in touch
          </button>
        </div>
        <Map />
      </div>
    </Layout>
  )
}
