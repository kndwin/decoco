import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import styles from './contact-us.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Map from '../components/Map/Map'


export default function ContactUs() {
  return (
    <Layout page="contact-us">
      <h1 className={utils.title}>
        Contact Us
      </h1>
      <div className={utils.width100}>
        <p className={utils.description}>
          Fill out the form below to get in touch!
        </p>
        <ContactForm />
      </div>
      <h1 className={utils.title}>
        Visit Us
      </h1>
      <div className={styles.mapDescription}>
        <div className={styles.description}>
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
             0421606978
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
        </div>
        <Map />
      </div>
    </Layout>
  )
}
