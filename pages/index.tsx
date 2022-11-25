import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const hostname = window.location.hostname.split('.');
    if (hostname.length <= 1) return;
    const subdomain = hostname.shift();
    const domain = hostname.join('.');
    if (!subdomain) return;
    console.log(subdomain, domain);
    if (subdomain.length < 4) throw window.location.hostname = domain;
    window.location.href = window.location.href.replace(window.location.hostname, domain) + subdomain;
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Linkai.Me</title>
        <meta name="description" content='Welcome to Linkai.Me' />
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
