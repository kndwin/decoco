import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import { Breadcrumbs } from 'nextjs-breadcrumbs'

export default function Furniture() {
  return (
    <Layout>
      <h1 className={utils.title}>
        Furniture
      </h1>
      <Breadcrumbs />
      <div className={utils.grid}>
        <a href="https://nextjs.org/docs" className={utils.card}>
          <h3>Furniture</h3>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/learn" className={utils.card}>
          <h3>Kitchens</h3>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/docs" className={utils.card}>
          <h3>Furniture</h3>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/learn" className={utils.card}>
          <h3>Kitchens</h3>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>
      </div>
    </Layout>
  )
}
