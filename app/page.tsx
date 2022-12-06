import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to <Link href={'/'}>Linkai.Me!</Link>
        </h1>

        <p>
          Stay tuned for future updates!
        </p>
      </main>
    </div>
  )
}
