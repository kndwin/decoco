import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import Link from 'next/link'
import { getCollectionData } from '../../lib/collectionData'
import { GetStaticProps } from 'next'

export default function Collection({
  collectionData
}: {
  collectionData: {
    title: string
    description: string
    imageSrc: string
    products: {
      title: string
      description: string
      imageSrc: string
    }[]
  }[]
}) {

  return (
    <Layout page="collection">
      <h1 className={utils.title}>
        Collection
      </h1>
      <p className={utils.description}>
        With 20 years of experience, we'll take care of you
      </p>
      <div className={utils.grid} >
      {collectionData.map((item, index) => (
         <Link as={`collection/${item.title.toLowerCase().replace(' ', '-')}`}
          href="/collection/[collections]">
          <a className={utils.card} key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img className={utils.image}
              src={item.imageSrc}
              width={1000} height={500}
            />
          </a>
        </Link>
      ))}
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const collectionData = getCollectionData()
  return {
    props: {
      collectionData
    }
  }
}
