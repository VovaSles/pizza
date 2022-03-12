import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './componentr/Footer'
import Layout from './componentr/Layout'
import Navbar from './componentr/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Head>
        <title>Pizza in Haifa</title>
        <meta name="description" content="Best pizza in Haifa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
      <Footer/>
    </div>
  )
}
