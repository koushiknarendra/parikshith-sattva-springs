import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sattvaconstructions.in'),
  title: {
    default: 'Sattva Constructions – Authorised Channel Partner | Bangalore',
    template: '%s | Sattva Constructions',
  },
  description: 'Authorised channel partner of Sattva Group. Expert advisory and booking support for premium residential projects in Bangalore.',
  openGraph: {
    siteName: 'Sattva Constructions – Authorised Channel Partner',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
