import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { AuditButton, Footer, Navbar } from '@/components'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='     '>
        <Head>
          <title>Contract Guardian Ai</title>
          <meta name="description" content="Contract Guardian Ai build on Next.js and Tailwindcss" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className=' particle-bg h-fit' >

          <Navbar />
          <AuditButton />
        </div>


      </div>

    </>
  )
}
