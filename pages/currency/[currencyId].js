import { useRouter } from "next/router"
import { MainLayout } from '../components/MainLayout'
import styles from '../../styles/Home.module.scss'

import Link from "next/link"

export default function Currency () {
  const router = useRouter()

  return (
    <MainLayout title={router.query.currencyId}>
      <h1>
        Currency {router.query.currencyId}
      </h1>
      <Link href={'/'}><a className={styles.link}>Return Home</a></Link>
    </MainLayout>
  )
}