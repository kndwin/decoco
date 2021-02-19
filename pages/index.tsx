import Layout from '../components/Layout/Layout'
import utils from '../styles/utils.module.scss'
import styles from './index.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout page="/">
      <h1 className={utils.title}>
        custom made furniture
      </h1>
      <p className={utils.description}>
          Choosing your living space shouldn't have to be stressful. 
        <br/> Here at De-coco, all our furniture and kitchen are built and designed from scratch. 
        <br/> This means you can customize your living space. Any size, any color, any design.
      </p>
      <img src="furniture/FU01.jpg"
				alt="A 3-saater biege couch with white walls, a lamp and some plants"
        width={1000}
        height={500}
        className={utils.image}
      />
      <h1 className={utils.title}>
        how it works
      </h1>
      <p className={utils.description}>
				<ol>
					<li>
						Find/bring a design you're interested in (Need inspiration? 
						Check out our past designs through 
						our <Link href="/collection">collection</Link>).
					</li>
					<li>
						We'll assess the design, give you a quote and timeline.
					</li>
					<li>
						Once you accept the payment, we'll start the building process and
						notify you once it's complete!
					</li>
				</ol>
        Interested? Contact us below and we'll reach out to you within 5 business days      
			</p>
      <button className={styles.button}>
        <Link href='/contact-us'>
          Contact us
        </Link>
      </button>
    </Layout>
  )
}
