import Head from 'next/head'
import HelloWorld from 'components/HelloWorld'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HelloWorld />
      </main>
    </div>
  )
}
