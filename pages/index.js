import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shawn Retirement Countdown</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/weary-cat_1f640.png" />
      </Head>

      <main>
        <Header title="Welcome to Shawn's page!" />
        <img src="https://avatars.githubusercontent.com/u/12153226?v=4" alt="shawn-mug">
        <p className="description">
         <script src="https://apps.elfsight.com/p/platform.js" defer></script>
         <div class="elfsight-app-7d29a667-4e41-4726-b0dc-419cff577c8e"></div>
        </p>
      </main>

      <Footer />
    </div>
  )
}
