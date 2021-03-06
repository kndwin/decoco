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
        Need inspiration? Check out the designs that we offer below.
      </p>
      <div className={utils.grid} >
      {collectionData.map((item, index) => (
         <Link as={`collection/${item.title.toLowerCase().replace(' ', '-')}`}
          href="/collection/[collections]">
					<a className={utils.card} key={index}>
						<h3 className={utils.titleH3}>{item.title}</h3>
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
