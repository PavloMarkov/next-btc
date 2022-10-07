import Link from "next/link";
import Head from 'next/head'

import styles from '../../styles/Home.module.scss'

export function MainLayout ({ children, title = 'test-task' }) {
  return (
    <>
      <Head>
        <title> Next-BTC | {title}</title>
        <meta name="description" content="next app with BTC price" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <Link href={'/'}><a>HOME</a></Link>
        <Link href={'/usd'}><a>USD</a></Link>
        <Link href={'/euro'}><a>EURO</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/PavloMarkov?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Pavlo Markov
        </a>
      </footer>
    </>
  )
}