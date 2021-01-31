import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'

export default function AboutUs() {
  return (
    <Layout page="about-us">
      <h1 className={utils.title}>
        About Us
      </h1>
      <p className={utils.description}>
        We are Australian kitchen, furniture and vanity manufacturers based in Sydney, NSW.
      </p>
      <p className={utils.description}>
        We provide high-quality, custom-made designs to suit your living space.
      </p>
    </Layout>
  )
}
