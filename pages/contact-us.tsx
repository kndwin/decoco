import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import ContactForm from '../components/ContactForm/ContactForm'
import Map from '../components/Map/Map'


export default function ContactUs() {
  return (
    <Layout>
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
      <div className={utils.width100}>
        <p className={utils.description}>
          Find us at 865 Punchbowl Road, Punchbowl
        </p>
        <Map />
      </div>
    </Layout>
  )
}
