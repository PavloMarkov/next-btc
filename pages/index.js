import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.scss'
import { MainLayout } from './components/MainLayout'
import { addActualPrice } from '../store/currencySlice'

export default function Home() {
  const dispatch = useDispatch();
  const [everyHour, setEveryHour] = useState(0);
 
  useEffect (() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(res => {
        const newValue = {
          date: res.time.updateduk,
          currencyValue: {
            USD: res.bpi.USD.rate,
            EUR: res.bpi.EUR.rate,
            GBP: res.bpi.GBP.rate
          }
        }
        dispatch(addActualPrice(newValue));
      })

    const updateBtcValue = () => setEveryHour(prev => prev + 1)
    const btcTimeout = setTimeout(updateBtcValue, 3600000);

    return () => clearTimeout(btcTimeout);
  }, [everyHour, dispatch]);

  const btcValueByCurrency = useSelector(
    state => state.currency[state.currency.length - 1].currencyValue
  );

  return (
    <MainLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello there!
          </h1>
          <h3>
            Current BTC price is:
          </h3>
            {btcValueByCurrency
              ? <h3>{`${btcValueByCurrency.USD} USD`}</h3>
              : <p>Loading...</p>}
          
          <h4>{`${btcValueByCurrency.EUR} EUR`}</h4>
          <h4>{`${btcValueByCurrency.GBP} GBP`}</h4>
        </main>
      </div>
    </MainLayout>
  )
}
