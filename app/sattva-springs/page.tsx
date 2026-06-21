'use client'

import dynamic from 'next/dynamic'

// SpringsClient is loaded only in the browser — ssr: false means React never
// tries to reconcile server HTML against client state, permanently eliminating
// hydration errors regardless of browser extensions or environment differences.
const SpringsClient = dynamic(() => import('./SpringsClient'), { ssr: false })

export default function SattvaSpringPage() {
  return <SpringsClient />
}
