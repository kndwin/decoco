import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import styles from './collections.module.scss'
import { getCollectionData } from '../../lib/collectionData'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router' 
import { Carousel } from 'react-responsive-carousel'

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
      <Carousel showArrows={true} 
        autoPlay={true}
        dynamicHeight={true}
        showStatus={false}
        className={styles.carouselContainer}
      >
        {collectionData.filter(
					colData => !colData.title
					.toLowerCase()
					.localeCompare(collection)
					)[0]['products'].map((product, index) => (
						<div key={index} className={styles.carouselSlide}>
							<img src={product.imageSrc} 
								alt={product.description}
								className={styles.imageResponsive}
							/>
						</div>
					))
        }
      </Carousel>
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
