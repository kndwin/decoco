import Layout from '../../components/Layout/Layout'
import utils from '../../styles/utils.module.scss'
import { useRouter } from 'next/router'

export default function Furniture() {
  const router = useRouter()
  const { collections } = router.query

  return (
    <Layout>
      <h1 className={utils.title}>
        {collections}
      </h1>
    </Layout>
  )
}
