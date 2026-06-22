'use client'

import { useSearchParams } from 'next/navigation'

const PHONE_DISPLAY = '+91 93803 22553'
const PHONE_LINK    = 'tel:+919380322553'
const WHATSAPP      = 'https://wa.me/919380322553?text=Hi%2C%20I%20just%20submitted%20my%20interest%20in%20Sattva%20Springs.%20Please%20share%20the%20brochure.'
const RERA          = 'PRM/KA/RERA/1251/310/PR/240724/006948'

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
}

export default function ThankYouClient() {
  const params = useSearchParams()
  const name   = params.get('name') || ''

  return (
    <div className="min-h-screen bg-[#0e1830] flex flex-col">

      {/* Header */}
      <header className="border-b border-white/8 px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <a href="/sattva-springs" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#2d3791] rounded-sm flex items-center justify-center shrink-0">
              <BuildingIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-white leading-none">Sattva Springs</p>
              <p className="text-[10px] text-white/40 leading-none mt-0.5 tracking-wide">By Sattva Group · Kanakapura Road</p>
            </div>
          </a>
          <a href="/sattva-springs" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Back to project
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Check */}
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
          style={{ background: 'rgba(175,210,58,0.15)', boxShadow: '0 0 0 8px rgba(175,210,58,0.06)' }}>
          <svg className="w-10 h-10 text-[#afd23a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#afd23a] font-semibold mb-4">
          Interest Registered
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
          {name ? `Thank you, ${name}.` : 'Thank you.'}
        </h1>
        <p className="text-white/50 text-base max-w-sm">
          Your interest in Sattva Springs has been received. An advisor will reach you within the hour.
        </p>

        {/* What happens next */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {[
            { step: '01', title: 'Call within 60 mins', desc: 'A dedicated advisor will call you to understand your requirement.' },
            { step: '02', title: 'Pricing & brochure', desc: 'Full project details, pricing sheet, and floor plan PDFs shared.' },
            { step: '03', title: 'Site visit arranged', desc: 'We\'ll schedule a guided walk-through at Kanakapura Road.' },
          ].map(s => (
            <div key={s.step} className="bg-white/5 border border-white/8 rounded-sm px-5 py-5 text-left">
              <p className="text-[#afd23a] font-black text-2xl leading-none mb-3">{s.step}</p>
              <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
              <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb358] text-white font-semibold py-3.5 rounded-sm text-sm transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <a href={PHONE_LINK}
            className="flex-1 flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold py-3.5 rounded-sm text-sm transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Project snapshot */}
        <div className="mt-14 w-full max-w-2xl border-t border-white/8 pt-10">
          <p className="text-xs uppercase tracking-widest text-white/25 mb-6">While you wait — project highlights</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              { label: 'Location',   value: 'Kanakapura Road' },
              { label: 'Villa Size', value: '2,798 – 3,822 sq ft' },
              { label: 'Starting at', value: '₹5.16 Cr' },
              { label: 'Possession', value: 'Sep 2027' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">{s.label}</p>
                <p className="text-white font-semibold text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 px-6 py-5">
        <p className="text-center text-[10px] text-white/20 max-w-2xl mx-auto leading-relaxed">
          RERA: {RERA}. Parikshith is an authorised channel partner of Sattva Group and is not the developer or promoter. All details are subject to change without notice.
        </p>
      </footer>

    </div>
  )
}
