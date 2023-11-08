'use client'
import Header from '@/components/Header/Header'
import { ScrollProvider } from '../helpers/scrollProvider'

export default function Home() {

  return (
    <ScrollProvider>
      <main id="js-scroll">
        <Header />
      </main>
    </ScrollProvider>
  )
}
