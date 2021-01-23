import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'

export default function AboutUs() {
  return (
    <Layout page="about-us">
      <h1 className={utils.title}>
        About Us
      </h1>
      <p className={utils.description}>
        With 20 years of experience, we'll take care of you
      </p>
      <img className={utils.image}
        src='/home-green-couch.jpg'
        width={1000}
        height={500}
      />
      <p className={utils.description}>
      Id volutpat lacus laoreet non curabitur gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Pharetra diam sit amet nisl suscipit adipiscing. Maecenas sed enim ut sem viverra aliquet eget. Nulla aliquet enim tortor at auctor urna nunc. Egestas pretium aenean pharetra magna ac. Vitae nunc sed velit dignissim sodales ut eu sem integer. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Scelerisque varius morbi enim nunc faucibus a. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur adipiscing. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Feugiat sed lectus vestibulum mattis ullamcorper velit. Enim ut sem viverra aliquet eget sit amet. Posuere urna nec tincidunt praesent semper feugiat nibh. Sodales ut etiam sit amet nisl purus.
      </p>
    </Layout>
  )
}
