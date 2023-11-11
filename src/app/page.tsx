'use client'
import Header from '@/components/Header/Header'
import { ScrollProvider } from '../helpers/scrollProvider'
import Hero from '@/sections/Hero/Hero'
import AboutProject from '@/sections/AboutProject/AboutProject'
import Story from '@/sections/Story/Story'
import Future from '@/sections/Future/Future'
import RoadMap from '@/pages/RoadMap/RoadMap'

export default function Home() {

  return (
    <ScrollProvider>
      <main id="js-scroll">
        <Header />

        {false && (
          <>
          <Hero />
          <Future/>
          <AboutProject />

          <Story />
          </>
        )}

        <RoadMap />
      </main>
    </ScrollProvider>
  )
}
