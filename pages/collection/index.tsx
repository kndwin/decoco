import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import Link from 'next/link'

export default function Collection() {
  const collection = [
    {
      title: 'Lounge', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg',
      products: [
        {
          title: 'Sofa',
          description: 'Sofas, Lounges, Ottomans',
          imageSrc: '/furniture/sophia.png'
        },
        {
          title: 'Beth',
          description: 'Sofas, Lounges, Ottomans',
          imageSrc: '/furniture/sophia.png'
        }
      ]
    }, 
    {
      title: 'Kitchens', 
      description: 'Sofas, Lounges, Ottomans',
      imageSrc: '/home-green-couch.jpg'
    },
    {
      title: 'Living room', 
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
        With 20 years of experience, we'll take care of you
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
