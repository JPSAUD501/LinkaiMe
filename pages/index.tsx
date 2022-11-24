import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Linkai.Me</title>
        <meta name="description" content="Welcome to Linkai.Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://linkai.me">Linkai.Me!</a>
        </h1>

        <p className={styles.description}>
          Stay tuned for future updates!
        </p>

      </main>
    </div>
  )
}
