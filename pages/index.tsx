import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>FKCP</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Factory Knowledge &amp; Capability Platform</h1>
          <p className="mt-4">
            Welcome.{' '}
            <Link href="/login" className="text-blue-600 underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
