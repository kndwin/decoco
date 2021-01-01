import Layout from '../components/Layout/Layout'
import Image from 'next/image'
import styles from '../styles/utils.module.scss'

export default function AboutUs() {
  return (
    <Layout>
      <h1 className={styles.title}>
        About Us
      </h1>
      <p className={styles.description}>
        Sed faucibus turpis in eu mi. Nam libero justo laoreet sit amet cursus sit amet. A diam maecenas sed enim. Interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec. At risus viverra adipiscing at in tellus integer feugiat. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ultricies mi eget mauris pharetra et ultrices neque. Porttitor eget dolor morbi non arcu. Pellentesque sit amet porttitor eget dolor morbi non arcu. Aliquam eleifend mi in nulla. Nulla pharetra diam sit amet nisl suscipit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.
      </p>
      <Image
        src='/home-green-couch.jpg'
        width={1000}
        height={500}
      />
      <p className={styles.description}>
      Id volutpat lacus laoreet non curabitur gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Pharetra diam sit amet nisl suscipit adipiscing. Maecenas sed enim ut sem viverra aliquet eget. Nulla aliquet enim tortor at auctor urna nunc. Egestas pretium aenean pharetra magna ac. Vitae nunc sed velit dignissim sodales ut eu sem integer. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Scelerisque varius morbi enim nunc faucibus a. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur adipiscing. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Feugiat sed lectus vestibulum mattis ullamcorper velit. Enim ut sem viverra aliquet eget sit amet. Posuere urna nec tincidunt praesent semper feugiat nibh. Sodales ut etiam sit amet nisl purus.
      </p>
    </Layout>
  )
}
