import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Shawn's page!" />
        <p className="description">
         <script src="https://apps.elfsight.com/p/platform.js" defer></script>
         <div class="elfsight-app-7d29a667-4e41-4726-b0dc-419cff577c8e"></div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
