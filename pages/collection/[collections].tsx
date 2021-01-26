import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import { getCollectionData } from '../../lib/collectionData'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router' 
import Slider from 'react-animated-slider'

export default function CollectionDetails({
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

  if (router.isFallback) {
    return (
      <Layout>
        <h1 className={utils.title}>Loading...</h1>;
      </Layout>
    )
  }

  const { collections } = router.query
  const collection = collections.toString().replace('-', ' ');

  return (
    <Layout>
      <h1 className={utils.title}>
        {collection}
      </h1>
        <Slider infinite={true}
          autoplay={200}
        >
          {collectionData.filter(colData => !colData.title
              .toLowerCase()
              .localeCompare(collection))
              [0]['products'].map((product, index) => (
              <div className={""} key={index}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <img className={utils.image}
                  src={product.imageSrc}
                />
              </div>
            )
          )}
        </Slider>
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
    params: {collections: collection.title.toLowerCase().replace(' ', '-')}
  }))

  return {
    paths,
    fallback: true
  }
}
