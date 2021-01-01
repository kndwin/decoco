import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import TradingHours from '../components/TradingHours/TradingHours'
import ContactForm from '../components/ContactForm/ContactForm'
import Map from '../components/Map/Map'


export default function ContactUs() {
  return (
    <Layout>
      <h1 className={utils.title}>
        Contact Us
      </h1>
      <ContactForm />
      <h1 className={utils.title}>
        Visit us
      </h1>
      <div className={utils.flexrow}>
        <TradingHours />
        <Map />
      </div>
    </Layout>
  )
}
