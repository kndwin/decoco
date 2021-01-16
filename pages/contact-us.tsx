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
      <div>
        <p className={utils.description}>
          Fill out the form below to get in touch!
        </p>
        <ContactForm />
      </div>
      <Map />
    </Layout>
  )
}
