import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>22 Betting App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Here import the Navbar Components */}
    <Navbar/>
    {/* here importing the heroSection */}
    {/* here import the Footer */}

    </div>
  )
}
