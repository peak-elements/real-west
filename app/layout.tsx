import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { DM_Serif_Display, Work_Sans, Caveat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

const work = Work_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-body" })
const display = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-display" })
const hand = Caveat({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-hand" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-body: ${work.style.fontFamily};
  --font-display: ${display.style.fontFamily};
  --font-hand: ${hand.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${work.className} ${display.variable} ${hand.variable} bg-paper text-stone-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
