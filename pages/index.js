import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../componentr/Featured'
import PizzaList from '../componentr/PizzaList'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza in Haifa</title>
        <meta name="description" content="Best pizza in Haifa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  )
}
