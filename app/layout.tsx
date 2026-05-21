import type { Metadata } from 'next'
import { Bebas_Neue, Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/shared/Footer'
import LocalSEOSchema from '@/components/shared/LocalSEOSchema'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Sign & Graphics — Halifax NS',
    default: 'Acme Sign & Graphics Co.',
  },
  description:
    'Acme Sign & Graphics Co. — 42 years serving Atlantic Canada. Vehicle wraps, LED signs, channel signs, dimensional signs, window graphics, banners and apparel. Dartmouth, Nova Scotia.',
  keywords: [
    'sign company halifax ns',
    'vehicle wraps nova scotia',
    'led signs dartmouth',
    'channel signs atlantic canada',
    'acme sign graphics',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: 'Acme Sign & Graphics Co.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <LocalSEOSchema />
      </head>
      <body className="bg-chalk text-iron font-sans antialiased min-h-screen flex flex-col">
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-signal focus:text-steel focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:uppercase focus:tracking-wider focus:rounded"
        >
          Skip to content
        </a>

        <Nav />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
