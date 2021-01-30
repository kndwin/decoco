import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import styles from './index.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout page="/">
      <h1 className={utils.title}>
        living spaces made easy
      </h1>
      <p className={utils.description}>
          Choosing your living space shouldn't have to be stressful. 
        <br/> Here at De-coco, all our furniture and kitchen are built and designed from scratch. 
        <br/> This means you can customize your living space.
        <br/> Any size, any color, any design.
      </p>
      <img src="furniture/FU01.jpg"
        width={1000}
        height={500}
        className={utils.image}
      />
      <h1 className={utils.title}>
        interested?
      </h1>
      <p className={utils.description}>
        Get in touch with us and we'll reach out to you within 5 business days      
        <br/> Need inspiration? Check out our {' '}
        <a className={styles.link}>
          <Link href="/collection">
            collection
          </Link>
        </a>
        .
      </p>
      <button className={styles.button}>
        <Link href='/contact-us'>
          Get in touch
        </Link>
      </button>
    </Layout>
  )
}
