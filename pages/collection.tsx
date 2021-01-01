import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'

export default function Collection() {
  return (
    <Layout>
      <h1 className={utils.title}>
        Collection
      </h1>
      <p className={utils.description}>
        With 20 years of experience, we'll take care of you
      </p>
      <div className={utils.grid}>
        <a href="https://nextjs.org/docs" className={utils.card}>
          <h3>Furniture</h3>
          <p>
            Sofas, Lounges, Ottomans
          </p>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/learn" className={utils.card}>
          <h3>Kitchens</h3>
          <p>
            Sofas, Lounges, Ottomans
          </p>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/docs" className={utils.card}>
          <h3>Furniture</h3>
          <p>
            Sofas, Lounges, Ottomans
          </p>
          <img className={utils.image}
            src='/home-green-couch.jpg'
            width={1000}
            height={500}
          />
        </a>

        <a href="https://nextjs.org/learn" className={utils.card}>
          <h3>Kitchens</h3>
          <p>
            Sofas, Lounges, Ottomans
          </p>
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
