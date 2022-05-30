import Head from 'next/head'
import Header from "../components/Header";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main>
        <Header />
      </main>
      <footer>

      </footer>
    </div>
  )
}
