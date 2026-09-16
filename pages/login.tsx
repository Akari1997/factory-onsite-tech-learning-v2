import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head><title>Sign in - FKCP</title></Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Factory Knowledge & Capability</h1>
          <p className="mb-6 text-sm text-gray-600">Sign in with your corporate account</p>
          <a
            href="/api/auth/entra/login"
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign in with Microsoft
          </a>
        </div>
      </div>
    </>
  )
}
