import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza in Haifa</title>
        <meta name="description" content="Best pizza in Haifa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hime Page</h1>
    </div>
  )
}
