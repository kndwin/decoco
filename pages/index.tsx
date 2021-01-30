import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import styles from './index.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout page="/">
      <h1 className={utils.title}>
        custom made living space
      </h1>
      <p className={utils.description}>
        We make all our furniture and kitchen from the ground up. This means you can customize your living space.

        Any size, any color, any design
        </p>
      <img src="kitchen/acacia.jpg"
        width={1000}
        height={500}
        className={utils.image}
      />
      <p className={utils.description}>
      Sed faucibus turpis in eu mi. Nam libero justo laoreet sit amet cursus sit amet. A diam maecenas sed enim. Interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec. At risus viverra adipiscing at in tellus integer feugiat. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ultricies mi eget mauris pharetra et ultrices neque. Porttitor eget dolor morbi non arcu. Pellentesque sit amet porttitor eget dolor morbi non arcu. Aliquam eleifend mi in nulla. Nulla pharetra diam sit amet nisl suscipit. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.
        </p>
      <h1 className={utils.title}>
        how it works
      </h1>
      <img src="furniture/lily.jpg"
        width={1000}
        height={500}
        className={utils.image}
      />
      <p className={utils.description}>
      Sit amet aliquam id diam maecenas ultricies mi eget mauris. Metus aliquam eleifend mi in nulla. Et tortor at risus viverra. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Neque egestas congue quisque egestas diam in arcu. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Eleifend mi in nulla posuere sollicitudin. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Maecenas pharetra convallis posuere morbi leo. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Maecenas ultricies mi eget mauris pharetra et ultrices.
      </p>
      <button className={styles.button}>
        <Link href='/contact-us'>
          Get in touch
        </Link>
      </button>
    </Layout>
  )
}
