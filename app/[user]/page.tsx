import Link from 'next/link';

export default function User({ params }:{
  params: { user: string }
}) {
  return (
    <div>
      <main>
        <h1>
          Welcome to {params.user}&apos;s <Link href={'/'}>Linkai.Me!</Link>
        </h1>

        <p>
          Stay tuned for future updates!
        </p>

      </main>
    </div>
  )
}
