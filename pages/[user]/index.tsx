import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

export default function User() {
  const router = useRouter();
  const username = router.query.user?.toString();

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${username} | Linkai.Me`}</title>
        <meta name="description" content={username} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {username}&apos;s <a href="https://linkai.me">Linkai.Me!</a>
        </h1>

        <p className={styles.description}>
          Stay tuned for future updates!
        </p>

      </main>
    </div>
  )
}
