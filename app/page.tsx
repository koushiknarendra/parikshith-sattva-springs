import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.sattvaconstructions.in/sattva-springs' },
}

export default function Home() {
  redirect('/sattva-springs')
}
