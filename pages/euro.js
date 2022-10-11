import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'


import MainLayout from './components/MainLayout'

export default function Euro () {
  const btcEuroValue = useSelector(
    state => state.currency[state.currency.length - 1].currencyValue.EUR
  );
  return (
    <MainLayout title="EURO">
      <div className={styles.currencyValue}>
        <h3>Current BTC price in EUR is: {btcEuroValue} Euro</h3>
        <div>
          <Link href={'/'}><a className={styles.link}>Return Home</a></Link>
        </div>
      </div>  
    </MainLayout>
  )
}