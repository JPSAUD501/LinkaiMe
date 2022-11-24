import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const user = router.query.user?.toString();
  if (!user) throw router.push('/');

  return (
    <div className={styles.container}>
      <Head>
        <title>{user} - Linkai.Me</title>
        <meta name="description" content={user} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {user}&apos;s <a href="https://linkai.me">Linkai.Me!</a>
        </h1>

        <p className={styles.description}>
          Stay tuned for future updates!
        </p>

      </main>
    </div>
  )
}
