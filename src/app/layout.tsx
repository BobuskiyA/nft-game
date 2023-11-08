import React from 'react'
import { Inter } from 'next/font/google'
import '@/styles/global.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Solaris metaverse',
  description: 'Are you ready for the event horizon?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
