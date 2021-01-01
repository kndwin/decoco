import Layout from '../components/Layout/Layout'
import Image from 'next/image'
import styles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>
        Decoco
      </h1>
      <p className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut. Mollis aliquam ut porttitor leo a. Turpis egestas maecenas pharetra convallis posuere. Vitae purus faucibus ornare suspendisse sed. Auctor neque vitae tempus quam. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Nisl nunc mi ipsum faucibus vitae aliquet nec. Felis eget nunc lobortis mattis. In massa tempor nec feugiat. Ut morbi tincidunt augue interdum. Lectus nulla at volutpat diam ut venenatis. Nullam non nisi est sit. Est sit amet facilisis magna etiam. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Dapibus ultrices in iaculis nunc sed. In cursus turpis massa tincidunt dui. Ipsum dolor sit amet consectetur adipiscing elit ut.
      </p>
      <Image
        src='/home-green-couch.jpg'
        width={1000}
        height={500}
      />
      <p className={styles.description}>
      Sed faucibus turpis in eu mi. Nam libero justo laoreet sit amet cursus sit amet. A diam maecenas sed enim. Interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec. At risus viverra adipiscing at in tellus integer feugiat. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ultricies mi eget mauris pharetra et ultrices neque. Porttitor eget dolor morbi non arcu. Pellentesque sit amet porttitor eget dolor morbi non arcu. Aliquam eleifend mi in nulla. Nulla pharetra diam sit amet nisl suscipit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.
        </p>
      <p className={styles.description}>
      Sit amet aliquam id diam maecenas ultricies mi eget mauris. Metus aliquam eleifend mi in nulla. Et tortor at risus viverra. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Neque egestas congue quisque egestas diam in arcu. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Maecenas pharetra convallis posuere morbi leo. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Maecenas ultricies mi eget mauris pharetra et ultrices.
      </p>
      <p className={styles.description}>
      Id volutpat lacus laoreet non curabitur gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Pharetra diam sit amet nisl suscipit adipiscing. Maecenas sed enim ut sem viverra aliquet eget. Nulla aliquet enim tortor at auctor urna nunc. Egestas pretium aenean pharetra magna ac. Vitae nunc sed velit dignissim sodales ut eu sem integer. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Scelerisque varius morbi enim nunc faucibus a. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur adipiscing. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Feugiat sed lectus vestibulum mattis ullamcorper velit. Enim ut sem viverra aliquet eget sit amet. Posuere urna nec tincidunt praesent semper feugiat nibh. Sodales ut etiam sit amet nisl purus.
      </p>
      <p className={styles.description}>
      Id volutpat lacus laoreet non curabitur gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Pharetra diam sit amet nisl suscipit adipiscing. Maecenas sed enim ut sem viverra aliquet eget. Nulla aliquet enim tortor at auctor urna nunc. Egestas pretium aenean pharetra magna ac. Vitae nunc sed velit dignissim sodales ut eu sem integer. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Scelerisque varius morbi enim nunc faucibus a. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Nisi quis eleifend quam adipiscing vitae. Ipsum dolor sit amet consectetur adipiscing. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Imperdiet sed euismod nisi porta lorem. Feugiat sed lectus vestibulum mattis ullamcorper velit. Enim ut sem viverra aliquet eget sit amet. Posuere urna nec tincidunt praesent semper feugiat nibh. Sodales ut etiam sit amet nisl purus.
      </p>
    </Layout>
  )
}
