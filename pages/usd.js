import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'

import MainLayout from './components/MainLayout'

export default function USD () {
  const btcUsdValue = useSelector(
    state => state.currency[state.currency.length - 1].currencyValue.USD
  );
  return (
    <MainLayout title="USD">
      <div className={styles.currencyValue}>
        <h3>Current BTC price in USD is: {btcUsdValue} USD</h3>
        <div>
          <Link href={'/'}><a className={styles.link}>Return Home</a></Link>
        </div>
      </div>
    </MainLayout>
  )
}