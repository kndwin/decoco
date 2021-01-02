import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import { getCollectionData } from '../../lib/collectionData'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router' 

export default function Furniture({
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

  const router = useRouter()
  const { collections } = router.query


  if (router.isFallback) {
    return (
      <Layout>
        <h1 className={utils.title}>Loading...</h1>;
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className={utils.title}>
        {collections}
      </h1>
      {collectionData
        .filter(colData => !colData.title
          .toLowerCase()
          .localeCompare(collections))
          [0]
        ['products'].map((product, index) => {
          return (
          <a className={utils.card} key={index}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img className={utils.image}
              src={product.imageSrc}
              width={1000} height={500}
            />
          </a>
          )
      })}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const collectionData = getCollectionData()
  const paths = collectionData.map(collection => ({
    params: {collections: collection.title}
  }))

  return {
    paths,
    fallback: true
  }
}
