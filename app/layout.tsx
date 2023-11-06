import './globals.css'
import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import React from 'react'
import Header from '@/components/Header'

const inter = Mukta({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Music Streaming Service',
  description:
    'An online Service that allows users to listen to music over the internet.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>{children}</Header>
      </body>
    </html>
  )
}
