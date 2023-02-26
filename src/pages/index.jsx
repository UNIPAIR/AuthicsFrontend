import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solution } from '@/components/Solution'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'


export default function Home() {
  return (
    <>
      <Head>
        <title>Waldo</title>
        <meta
          name="description"
          content="Waldo is a pipeline for verified media content to prevent deepfakes, fake news, and misinformation."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Solution />
        <CallToAction />
      </main>
    </>
  )
}
