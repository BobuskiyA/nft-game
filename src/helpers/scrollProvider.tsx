import React, { useRef, useEffect, ReactNode } from 'react'
import { ScrollContext } from './scrollContext'

type ScrollProviderProps = {
  children: ReactNode 
}

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void


export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  
  const locomotiveScroll = useRef<any>(null)

  
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      locomotiveScroll.current = new LocomotiveScroll({
          el: document.querySelector('#js-scroll'),
          smooth: true,
          duration: 0.7,
          smoothTouch: true,
          smoothWheel: true
      })
    })()
  }, [])

  const scrollTo: ScrollToFunction = (e, currentLink) => {
    console.log(currentLink)
    e.preventDefault() 
    locomotiveScroll.current.scrollTo(currentLink, { 
      duration: 2.7, 
      offset: -100 
    })
  }

  return (
    <ScrollContext.Provider value={scrollTo}>{children}</ScrollContext.Provider>
  )
}
