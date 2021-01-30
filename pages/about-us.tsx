import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'

export default function AboutUs() {
  return (
    <Layout page="about-us">
      <h1 className={utils.title}>
        About Us
      </h1>
      <p className={utils.description}>
        Our story started when we were upholstering furniture from the ground up.
      </p>
      <img className={utils.image}
        src="/about-us.jpg"
        width={1000}
        height={500}
      />
      <p className={utils.description}>
      Since then, our journey has branched out and diversified our skill set.
      <br />
      We picked up skills to build beds, kitchens and vanity. 
      <br />
      With this skillset, we hope to offer our customer the ability to truly customize their living space.
      </p>
    </Layout>
  )
}
