import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'

export default function AboutUs() {
  return (
    <Layout page="about-us">
      <h1 className={utils.title}>
        About Us
      </h1>
      <p className={utils.description}>
        We are Australian Kitchen, Furniture and Vanity Manyfacturers and Wholesales based in Sydney, NSW.
      </p>
      <p className={utils.description}>
        We provide high-quality, custom-made designs to suit your living space.
      </p>
    </Layout>
  )
}
