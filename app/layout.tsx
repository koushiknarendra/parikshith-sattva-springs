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
  title: 'Sattva Springs – Ultra-Luxury 4 BHK Villas | Kanakapura Road, Bangalore',
  description:
    'Book exclusive 4 BHK Row Villas by Sattva Group on Kanakapura Road, Bangalore. Starting ₹4.79 Cr. RERA Approved. Only 4 configurations left. Contact Sattva Constructions – Authorised Channel Partner.',
  openGraph: {
    title: 'Sattva Springs | 4 BHK Luxury Villas | Kanakapura Road',
    description: 'Ultra-luxury row villas starting ₹4.79 Cr. Only 4 types remaining. RERA: PRM/KA/RERA/1251/310/PR/240724/006948',
    siteName: 'Sattva Constructions',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
