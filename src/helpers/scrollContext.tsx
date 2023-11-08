import React, { createContext, ReactNode } from 'react'

type ScrollToFunction = (event: React.MouseEvent, currentLink: string) => void

export const ScrollContext = createContext<ScrollToFunction>(() => {})
