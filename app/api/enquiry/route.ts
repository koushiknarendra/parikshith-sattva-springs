import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, phone, email, config, source } = body

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
  }

  // Log the lead (replace this block with email / CRM / WhatsApp integration)
  console.log('[Lead] Sattva Springs enquiry:', { name, phone, email, config, source, ts: new Date().toISOString() })

  // TODO: Send to email via SendGrid / Resend
  // TODO: Trigger WhatsApp notification via Interakt / Aisensy
  // TODO: Push to HubSpot / Zoho CRM

  return NextResponse.json({ success: true })
}
