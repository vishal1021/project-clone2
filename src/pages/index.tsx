import Head from 'next/head'

import HomePage from '../components/Home.component'

export default function Home() {


    return (
        <div >
            <Head>
                <title>Simplify Your Finances with Personalized Solutions | Balance Beam   </title>
            </Head>


            <main >
                <HomePage />
            </main>

        </div>
    )
}