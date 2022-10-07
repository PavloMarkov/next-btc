import Link from 'next/link'
import styles from '../styles/Home.module.scss'

import { MainLayout } from './components/MainLayout'

export default function USD () {
  return (
    <MainLayout title="USD">
      <h3>Current BTC price in USD is:</h3>
      <Link href={'/'}><a className={styles.link}>Return Home</a></Link>
    </MainLayout>
  )
}