'use client'
import Header from '@/components/Header/Header'
import { ScrollProvider } from '../helpers/scrollProvider'
import Hero from '@/sections/Hero/Hero'
import AboutProject from '@/sections/AboutProject/AboutProject'

export default function Home() {

  return (
    <ScrollProvider>
      <main id="js-scroll">
        <Header />

        <Hero />

        <AboutProject />
      </main>
    </ScrollProvider>
  )
}
