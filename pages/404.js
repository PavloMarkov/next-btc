import Link from "next/link";
import styles from '../styles/Home.module.scss'
import { MainLayout } from "./components/MainLayout";

export default function ErrorPage () {
  return (
    <MainLayout>
      <h1>
        <span className={styles.error}>Page</span> not found. <br />
        <Link href={'/'}><a className={styles.link}>Go back home?</a></Link>
      </h1>
    </MainLayout>
  )
}