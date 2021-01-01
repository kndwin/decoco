import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import Link from 'next/link'

export default function Collection() {

  const collection = [
    {
      title: 'Furniture', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    }, 
    {
      title: 'Kitchens', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    },
    {
      title: 'Kitchens', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    },
    {
      title: 'Kitchens', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    },
    {
      title: 'Kitchens', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    },
    {
      title: 'Vanity', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    }
  ]

  return (
    <Layout>
      <h1 className={utils.title}>
        Collection
      </h1>
      <p className={utils.description}>
        With 20 years of experience, we'll take care of you.
        Our extensive collection of furniture, kitchens, vanities
        With 20 years of experience, we'll take care of you.
        With 20 years of experience, we'll take care of you.
        Our extensive collection of furniture, kitchens, vanities
        Our extensive collection of furniture, kitchens, vanities
      </p>
      <div className={utils.grid} >
      {collection.map((item, index) => (
        <Link as={`collection/${item.title.toLowerCase()}`}
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
