'use client'

import dynamic from 'next/dynamic'

const SpringsClient = dynamic(() => import('./SpringsClient'), { ssr: false })

export default function ClientWrapper() {
  return <SpringsClient />
}
