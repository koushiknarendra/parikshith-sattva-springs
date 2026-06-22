'use client'

import dynamic from 'next/dynamic'

const ThankYouClient = dynamic(() => import('./ThankYouClient'), { ssr: false })

export default function ThankYouPage() {
  return <ThankYouClient />
}
