import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>FKCP</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Factory Knowledge & Capability Platform</h1>
          <p className="mt-4">Welcome. <Link href="/login"><a className="text-blue-600 underline">Sign in</a></Link></p>
        </div>
      </div>
    </>
  )
}
