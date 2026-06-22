'use client'

import { useState, useEffect, useRef } from 'react'

// ─── REPLACE BEFORE GOING LIVE ──────────────────────────────────────────────
const PHONE_DISPLAY = '+91 93803 22553'
const PHONE_LINK    = 'tel:+919380322553'
const WHATSAPP      = 'https://wa.me/919380322553?text=Hi%2C%20I%27m%20interested%20in%20Sattva%20Springs.%20Please%20share%20the%20brochure.'
const RERA          = 'PRM/KA/RERA/1251/310/PR/240724/006948'

const HERO_IMAGES = [
  { src: '/images/pool.jpg',      alt: 'Swimming pool' },
  { src: '/images/gallery-2.jpg', alt: 'Living room interior' },
  { src: '/images/cricket.jpg',   alt: 'Cricket pitch' },
  { src: '/images/gallery-1.jpg', alt: 'Dining and kitchen' },
  { src: '/images/gallery-3.jpg', alt: 'Yoga and meditation room' },
]

// ─── DATA ────────────────────────────────────────────────────────────────────
const VILLA_TYPES = [
  { label: 'Type A', carpet: '2,798', builtup: '3,607', price: '4.79', status: 'subscribed' },
  { label: 'Type B', carpet: '2,887', builtup: '3,732', price: '5.00', status: 'subscribed' },
  { label: 'Type C', carpet: '2,989', builtup: '3,854', price: '5.16', status: 'available'  },
  { label: 'Type D', carpet: '3,131', builtup: '4,034', price: '5.44', status: 'available'  },
  { label: 'Type E', carpet: '3,214', builtup: '4,156', price: '5.60', status: 'available'  },
  { label: 'Type F', carpet: '3,822', builtup: '5,236', price: '7.00', status: 'available'  },
]

const AMENITY_GROUPS = [
  { category: 'Wellness & Recreation', items: ['Swimming Pool', 'Gymnasium', 'Yoga & Meditation Deck', 'Jogging Track', 'Cycling Track'] },
  { category: 'Sports & Activity', items: ['Multipurpose Sports Court', 'Badminton Court', 'Cricket Pitch', 'Skating Rink', 'Kids Pool'] },
  { category: 'Community Spaces', items: ['Grand Clubhouse', 'Party Hall & Banquet', 'Amphitheatre', 'Games Room', 'Co-working Lounge'] },
  { category: 'Outdoor & Nature', items: ['Landscaped Gardens', 'Tree-lined Avenue', "Children's Play Area", 'Pet Park', 'Outdoor Seating Gazebos'] },
]

const LOCATION_HIGHLIGHTS = [
  { place: 'Art of Living International Centre', dist: '2.2 km' },
  { place: 'Dayananda Sagar Academy', dist: '1 km' },
  { place: 'NICE Ring Road', dist: '5 km' },
  { place: 'Silk Institute Metro (Green Line)', dist: '6 km' },
  { place: 'JP Nagar / Jayanagar', dist: '25 – 30 min' },
  { place: 'Electronic City via NICE Road', dist: '35 – 40 min' },
]

const SPECS = [
  { label: 'Structure', value: 'Basement + Ground + 2 Floors + Private Terrace' },
  { label: 'Configuration', value: '4 BHK Row Villa (Triplex)' },
  { label: 'Flooring', value: 'Premium Vitrified Tiles throughout' },
  { label: 'Kitchen', value: 'Granite platform, SS sink, branded fittings' },
  { label: 'Security', value: '24×7 security personnel + CCTV surveillance' },
  { label: 'Power', value: 'DG backup for common areas & select points' },
  { label: 'Parking', value: 'Dedicated basement parking per villa' },
  { label: 'Maintenance', value: '₹14,400 – ₹20,900 / month' },
]

const TESTIMONIALS = [
  {
    name: 'Pradeep R.',
    role: 'Director, FMCG Company',
    location: 'Koramangala',
    stars: 5,
    text: 'We looked at several luxury villa projects on Kanakapura Road before choosing Sattva Springs. The density is genuinely low — 66 villas on 5.5 acres — which is rare in Bangalore. Sattva Constructions handled everything from documentation to loan processing seamlessly.',
  },
  {
    name: 'Deepa & Anand K.',
    role: 'Physicians',
    location: 'JP Nagar',
    stars: 5,
    text: "The proximity to the Art of Living campus was a significant factor for us. We're happy with the RERA compliance and the transparency around the construction timeline. The team at Sattva Constructions was patient, professional, and never pushy.",
  },
  {
    name: 'Vijay S.',
    role: 'Entrepreneur',
    location: 'Whitefield',
    stars: 5,
    text: 'What makes Sattva Springs different is that it actually delivers the privacy it promises. Unlike most "villa" communities in Bangalore, this one has real breathing room. The terrace alone sold us.',
  },
]

const AWARDS = [
  { award: 'Iconic Project, Residential — South', body: 'ET Real Estate Awards 2024' },
  { award: 'Developer of the Year, Commercial', body: 'Realty+ Excellence Awards 2024' },
  { award: 'Best Commercial Project of the Year', body: 'BAM Awards 2024' },
  { award: '142+ Projects Delivered', body: 'On-time possession track record' },
]

const TOAST_LEADS = [
  { name: 'Anjali M.', loc: 'JP Nagar',     action: 'requested a site visit' },
  { name: 'Karthik R.', loc: 'HSR Layout',  action: 'downloaded the floor plans' },
  { name: 'Pradeep & Deepa', loc: 'Koramangala', action: 'enquired about Type D Villa' },
  { name: 'Sunita K.', loc: 'Whitefield',   action: 'spoke with an advisor' },
  { name: 'Ravi S.', loc: 'Banashankari',   action: 'requested a detailed cost sheet' },
]

const BANK_LOGOS = [
  { name: 'HDFC Bank',          color: '#004C8F', bg: '#EEF4FF' },
  { name: 'SBI Home Loans',     color: '#1D3785', bg: '#EEF0FB' },
  { name: 'ICICI Bank',         color: '#B02A30', bg: '#FFF0F0' },
  { name: 'Axis Bank',          color: '#97144D', bg: '#FFF0F5' },
  { name: 'Kotak Mahindra',     color: '#ED1C24', bg: '#FFF0F0' },
  { name: 'LIC Housing Finance',color: '#1B5E20', bg: '#EDFAF3' },
  { name: 'Bank of Baroda',     color: '#E07000', bg: '#FFF8EE' },
  { name: 'PNB Housing',        color: '#003087', bg: '#EEF3FF' },
]

const FAQS = [
  { q: 'Is Sattva Springs RERA registered?',
    a: `Yes. The project is registered under Karnataka RERA — number ${RERA}. You can verify this independently at karerait.karnataka.gov.in.` },
  { q: 'What configurations are currently available?',
    a: 'Types A and B have been fully subscribed. Types C through F — 3,854 to 5,236 sq ft built-up — are open for booking.' },
  { q: 'What is the total cost of a villa?',
    a: 'All-inclusive prices range from ₹5.16 Cr (Type C) to ₹7.00 Cr (Type F). We share detailed cost sheets, payment plans, and home loan options on request.' },
  { q: 'When is possession expected?',
    a: 'RERA scheduled possession is September 2027. Construction is approximately 50% complete as of mid-2026 and progressing on schedule.' },
  { q: 'Is there any additional cost when buying through Sattva Constructions?',
    a: 'None. We offer the same pricing as the developer — the buyer pays nothing extra. What you gain is personalised advisory, documentation support, home loan facilitation, and dedicated post-booking service.' },
]

// ─── BUILDING ICON ───────────────────────────────────────────────────────────
function BuildingIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
}

// ─── STAR RATING ─────────────────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? 'text-[#F59E0B]' : 'text-[#E5E7EB]'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}


// ─── TOAST NOTIFICATIONS ─────────────────────────────────────────────────────
function ToastNotifications({ onEnquire }: { onEnquire: () => void }) {
  const [visible, setVisible] = useState<{ id: number; data: typeof TOAST_LEADS[0]; ago: string } | null>(null)
  const counter = useRef(0)

  useEffect(() => {
    const agoStrings = ['just now', '3 min ago', '8 min ago', '15 min ago', '27 min ago']
    const show = () => {
      const i = counter.current % TOAST_LEADS.length
      setVisible({ id: Date.now(), data: TOAST_LEADS[i], ago: agoStrings[i] })
      counter.current++
      setTimeout(() => setVisible(null), 5000)
    }
    const first = setTimeout(show, 6000)
    const interval = setInterval(show, 20000)
    return () => { clearTimeout(first); clearInterval(interval) }
  }, [])

  if (!visible) return null

  return (
    <div key={visible.id} className="fixed bottom-24 left-4 z-40 w-72 bg-white border border-[#E5E7EB] shadow-lg rounded-sm animate-fade-in-up overflow-hidden">
      <div className="w-full h-0.5 bg-[#2d3791]" />
      <div className="p-4 flex items-start gap-3">
        <div className="w-8 h-8 bg-[#2d3791]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
          <BuildingIcon className="w-4 h-4 text-[#2d3791]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[#1C1C2E] truncate">
            {visible.data.name} · <span className="font-normal text-[#6B7280]">{visible.data.loc}</span>
          </p>
          <p className="text-xs text-[#6B7280] mt-0.5">{visible.data.action}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[10px] text-[#9CA3AF]">{visible.ago}</span>
            <button onClick={() => { setVisible(null); onEnquire() }} className="text-[10px] font-semibold text-[#2d3791] hover:underline">
              Schedule a visit →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── ENQUIRY FORM ─────────────────────────────────────────────────────────────
function EnquiryForm({ source = 'hero', ctaLabel = 'Request a Callback', compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', config: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'done') {
    return (
      <div className="py-8 text-center animate-fade-in-up">
        <div className="w-12 h-12 rounded-full bg-[#2d3791]/10 flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-[#2d3791]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-[#1C1C2E]">Thank you, {form.name || 'there'}.</p>
        <p className="text-sm text-[#6B7280] mt-1">Our team will reach you within the hour.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-[#2d3791] hover:underline">
          Or connect on WhatsApp →
        </a>
      </div>
    )
  }

  const field = 'w-full border border-[#E5E7EB] rounded-sm px-4 py-3 text-sm text-[#1C1C2E] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2d3791] transition-colors bg-white'

  return (
    <form onSubmit={handle} className="space-y-3">
      <input required placeholder="Full Name" value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={field}
        autoComplete="name" />
      <input required type="tel" placeholder="Phone Number" value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={field}
        autoComplete="tel" />
      {!compact && (
        <input type="email" placeholder="Email Address (optional)" value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={field}
          autoComplete="email" />
      )}
      <select value={form.config} onChange={e => setForm(f => ({ ...f, config: e.target.value }))}
        className={`${field} ${!form.config ? 'text-[#9CA3AF]' : ''}`}>
        <option value="">Villa type of interest</option>
        {VILLA_TYPES.filter(v => v.status === 'available').map(v => (
          <option key={v.label} value={v.label}>{v.label} · {v.builtup} sq ft · ₹{v.price} Cr</option>
        ))}
      </select>
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-[#2d3791] hover:bg-[#232d7a] text-white font-semibold py-3.5 rounded-sm text-sm tracking-wide transition-colors disabled:opacity-50">
        {status === 'loading' ? 'Sending…' : ctaLabel}
      </button>
      {status === 'error' && <p className="text-center text-xs text-red-500">Something went wrong. Please call us directly.</p>}
      <div className="flex items-start gap-2.5 bg-[#F0F4FF] border border-[#2d3791]/15 rounded-sm px-3 py-2.5">
        <svg className="w-3.5 h-3.5 text-[#2d3791] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <p className="text-[11px] text-[#4B5563] leading-relaxed">
          <span className="font-semibold text-[#2d3791]">No spam, ever.</span> We share your number with one advisor only. No bulk calls, no repeated WhatsApp messages.
        </p>
      </div>
    </form>
  )
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E5E7EB]">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between py-5 text-left gap-6 group">
        <span className="text-sm md:text-base font-medium text-[#1C1C2E] group-hover:text-[#2d3791] transition-colors">{q}</span>
        <span className="text-[#2d3791] text-lg mt-0.5 shrink-0 font-light">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-5 text-sm text-[#6B7280] leading-relaxed animate-fade-in-up">{a}</p>}
    </div>
  )
}

// ─── EXIT INTENT ─────────────────────────────────────────────────────────────
function ExitIntent() {
  const [show, setShow] = useState(false)
  const fired = useRef(false)
  useEffect(() => {
    const h = (e: MouseEvent) => { if (e.clientY < 20 && !fired.current) { fired.current = true; setShow(true) } }
    document.addEventListener('mouseleave', h)
    return () => document.removeEventListener('mouseleave', h)
  }, [])
  if (!show) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-backdrop" onClick={() => setShow(false)}>
      <div className="bg-white max-w-md w-full shadow-2xl animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <div className="bg-[#2d3791] px-8 py-6">
          <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Before you leave</p>
          <h3 className="text-white text-xl font-semibold">Request the project brochure</h3>
          <p className="text-white/70 text-sm mt-1">Floor plans, pricing & site details sent to your number.</p>
        </div>
        <div className="px-8 py-6">
          <EnquiryForm source="exit-intent" ctaLabel="Send Me the Brochure" compact />
          <button onClick={() => setShow(false)} className="mt-4 text-xs text-[#9CA3AF] hover:text-[#6B7280] w-full text-center">Continue browsing</button>
        </div>
      </div>
    </div>
  )
}

// ─── CLIENT PAGE ─────────────────────────────────────────────────────────────
export default function SpringsClient() {
  const [mobileForm, setMobileForm] = useState(false)
  const [mounted, setMounted]       = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex(i => (i + 1) % HERO_IMAGES.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <div className="font-[var(--font-roboto)] text-[#1C1C2E]">

      {/* ── HEADER ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB]" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2d3791] rounded-sm flex items-center justify-center shrink-0">
              <BuildingIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-[#1C1C2E] leading-none">Sattva Constructions</p>
              <p className="text-[10px] text-[#9CA3AF] leading-none mt-0.5 tracking-wide">Sattva Group · Kanakapura Road, Bangalore</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_LINK} className="hidden md:flex items-center gap-1.5 text-sm text-[#4B5563] hover:text-[#2d3791] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1.5 text-sm text-[#4B5563] hover:text-[#25D366] transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
            <button onClick={scrollToForm} className="bg-[#2d3791] hover:bg-[#232d7a] text-white text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors tracking-wide">
              Schedule a Visit
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex" style={{ minHeight: 'calc(100vh - 68px)' }}>

        {/* Mobile background — slideshow with heavy overlay */}
        <div className="md:hidden absolute inset-0 z-0">
          {HERO_IMAGES.map((img, i) => (
            <img key={img.src} src={img.src} alt="" className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: i === slideIndex ? 1 : 0, transition: 'opacity 1s ease' }} />
          ))}
          <div className="absolute inset-0 bg-[#0e1830]/88" />
        </div>

        {/* LEFT: dark info panel */}
        <div className="relative z-10 w-full md:w-[44%] bg-[#0e1830]/0 md:bg-[#0e1830] flex flex-col justify-between px-8 py-10 md:px-14 md:py-14">

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#afd23a] mb-5">
              By Sattva Group
            </p>
            <h1 className="text-[56px] md:text-[68px] font-black text-white leading-none mb-4"
              style={{ letterSpacing: '-0.03em' }}>
              SATTVA<br />SPRINGS
            </h1>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Exclusive 4 BHK Row Villas · Kanakapura Road, Bangalore
            </p>

            <div className="w-12 h-px bg-[#afd23a] mb-8" />

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {[
                { label: 'Total Villas', value: '66 Units' },
                { label: 'Land Area',    value: '5.5 Acres' },
                { label: 'Villa Size',   value: '2,798 – 3,822 sq ft' },
                { label: 'Possession',  value: 'Sep 2027' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-[10px] uppercase tracking-wider text-white/35 mb-1">{s.label}</p>
                  <p className="text-white font-semibold text-sm">{s.value}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Phone CTA bar */}
          <div className="mt-8">
            <a href={PHONE_LINK}
              className="flex items-center gap-4 bg-[#afd23a] hover:bg-[#9ebe2f] rounded-sm px-5 py-4 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#0e1830]/15 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#0e1830]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-medium text-[#0e1830]/60 uppercase tracking-wider leading-none mb-1">Call us directly</p>
                <p className="text-[#0e1830] font-black text-2xl leading-none tracking-wide">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <svg className="w-3 h-3 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-[10px] text-white/30">No spam calls · One advisor · RERA {RERA.slice(0, 12)}…</p>
            </div>
          </div>
        </div>

        {/* RIGHT: slideshow — desktop only */}
        <div className="hidden md:block flex-1 relative overflow-hidden">
          {/* Image stack — fade between slides */}
          {HERO_IMAGES.map((img, i) => (
            <img key={img.src} src={img.src} alt={img.alt}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: i === slideIndex ? 1 : 0, transition: 'opacity 1s ease' }} />
          ))}

          {/* Left blend into dark panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1830]/40 via-[#0e1830]/10 to-transparent" />

          {/* Circular price badge */}
          <div className="absolute bottom-10 right-10 w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center text-center"
            style={{ background: '#2d3791', boxShadow: '0 0 0 4px #afd23a, 0 24px 48px rgba(0,0,0,0.5)' }}>
            <p className="text-[9px] uppercase tracking-wider text-white/55 leading-none mb-1">Starting @</p>
            <p className="text-[#afd23a] font-black text-[28px] leading-none">₹5.16</p>
            <p className="text-white font-bold text-xs leading-none mt-1">Crore*</p>
          </div>

          {/* RERA tag — top right */}
          <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-sm border border-white/10">
            <p className="text-[9px] uppercase tracking-wider text-white/50 leading-none mb-1">RERA Registered</p>
            <p className="text-[10px] text-white/80 font-mono leading-none">{RERA.slice(0, 26)}…</p>
          </div>

          {/* Bottom bar: urgency + slide dots */}
          <div className="absolute bottom-0 left-0 right-0 py-5 px-8"
            style={{ background: 'linear-gradient(to top, rgba(14,24,48,0.8) 0%, transparent 100%)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#afd23a] animate-pulse shrink-0" />
                <p className="text-white/80 text-sm font-medium">Only 4 villa configurations available — Types C, D, E & F</p>
              </div>
              <div className="flex items-center gap-1.5">
                {HERO_IMAGES.map((_, i) => (
                  <button key={i} onClick={() => setSlideIndex(i)}
                    className="rounded-full transition-all"
                    style={{
                      width:  i === slideIndex ? 20 : 6,
                      height: 6,
                      background: i === slideIndex ? '#afd23a' : 'rgba(255,255,255,0.35)',
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ─────────────────────────────────────────────────────── */}
      <div ref={formRef} className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_460px] gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Limited Availability</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C2E] mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Schedule a site visit or get the brochure
              </h2>
              <p className="text-[#6B7280] text-base mb-8">
                Types C through F are currently open. Our advisor will walk you through floor plans, payment schedules, and home loan options — no sales pressure, just clarity.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'RERA registered — verify independently at karerait.karnataka.gov.in',
                  'Same pricing as the developer — no extra cost to you',
                  'Home loan pre-approval assistance with 8 major banks',
                ].map(t => (
                  <div key={t} className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <span className="w-4 h-4 bg-[#2d3791] text-white rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">✓</span>
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={PHONE_LINK}
                  className="flex items-center gap-2 bg-[#2d3791] hover:bg-[#232d7a] text-white font-semibold px-6 py-3.5 rounded-sm text-sm transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  Call Now
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 border border-[#2d3791] text-[#2d3791] hover:bg-[#2d3791] hover:text-white font-semibold px-6 py-3.5 rounded-sm text-sm transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-white p-8 border border-[#E5E7EB]" style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}>
              <p className="text-xs uppercase tracking-widest text-[#9CA3AF] mb-1">Get in Touch</p>
              <h3 className="text-lg font-bold text-[#1C1C2E] mb-5">Request a Callback</h3>
              <EnquiryForm source="hero" ctaLabel="Request a Callback" />
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ───────────────────────────────────────────────────────── */}
      <div className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {[
            'RERA Registered & Verified',
            'Clear Freehold Title',
            'Bank Pre-approved Project',
            'No Brokerage for Buyer',
            'On-schedule Construction',
          ].map(label => (
            <div key={label} className="flex items-center gap-2 text-xs text-[#4B5563]">
              <span className="w-4 h-4 bg-[#2d3791] text-white rounded-full flex items-center justify-center text-[9px] font-bold shrink-0">✓</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECT DETAILS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">About the Project</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1C1C2E] mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                A boutique villa community designed for discerning families
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-4">
                Sattva Springs is an ultra-exclusive gated enclave of just 66 row villas spread across 5.5 verdant acres on Kanakapura Road, South Bangalore — directly opposite the Art of Living International Centre.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Each villa is a B+G+2+Terrace triplex with carpet areas ranging from 2,798 to 3,822 sq ft. The low-density design ensures privacy, open skies, and a genuinely villa lifestyle — a rarity in Bangalore.
              </p>
              <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-sm p-5">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-[#1C1C2E]">Construction Progress</p>
                  <p className="text-sm font-bold text-[#2d3791]">50%</p>
                </div>
                <div className="h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#2d3791] rounded-full" style={{ width: '50%' }} />
                </div>
                <p className="text-xs text-[#9CA3AF] mt-2">On schedule · Possession: September 2027</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Villa Specifications</p>
              <div className="divide-y divide-[#F3F4F6]">
                {SPECS.map(s => (
                  <div key={s.label} className="flex justify-between py-3 gap-4">
                    <p className="text-sm text-[#9CA3AF] shrink-0 w-28">{s.label}</p>
                    <p className="text-sm text-[#1C1C2E] text-right">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e1830] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#afd23a] font-semibold mb-3">Gallery</p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-8" style={{ letterSpacing: '-0.02em' }}>The Residences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: '/images/gallery-1.jpg', label: 'Villa Exterior' },
              { src: '/images/gallery-2.jpg', label: 'Interior Spaces' },
              { src: '/images/pool.jpg',      label: 'Swimming Pool' },
              { src: '/images/gallery-3.jpg', label: 'Community Views' },
            ].map(img => (
              <div key={img.src} className="aspect-[4/3] rounded-sm overflow-hidden relative group">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-xs">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 mt-3">
            <div className="aspect-[16/6] rounded-sm overflow-hidden relative group">
              <img src="/images/elevation.jpg" alt="Project Elevation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/80 text-xs">Project Elevation</p>
              </div>
            </div>
            <div className="aspect-[4/3] md:aspect-auto rounded-sm overflow-hidden relative group">
              <img src="/images/cricket.jpg" alt="Cricket Pitch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/80 text-xs">Cricket Pitch</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/30 mt-3">Actual project images. Contact us for the complete walkthrough video.</p>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Pricing</p>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#1C1C2E]" style={{ letterSpacing: '-0.02em' }}>Villa Configurations & Pricing</h2>
              <p className="text-[#6B7280] text-sm mt-1">All-inclusive pricing. Payment plans and home loan options available on request.</p>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-sm px-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
              <span className="text-xs text-amber-700 font-medium">Only 4 configurations remaining</span>
            </div>
          </div>

          {/* ── Mobile: card layout ── */}
          <div className="md:hidden space-y-3">
            {VILLA_TYPES.map(v => (
              <div key={v.label} className={`border border-[#E5E7EB] rounded-sm p-4 ${v.status === 'subscribed' ? 'opacity-40' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1C1C2E]">{v.label}</span>
                    <span className="text-base font-bold text-[#2d3791]">₹{v.price} Cr</span>
                  </div>
                  {v.status === 'available'
                    ? <span className="text-[10px] font-bold text-[#16a34a] bg-green-50 border border-green-200 px-2 py-0.5 rounded-sm uppercase tracking-wide">Available</span>
                    : <span className="text-[10px] text-[#9CA3AF] border border-[#E5E7EB] px-2 py-0.5 rounded-sm">Subscribed</span>}
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">Carpet Area</p>
                    <p className="text-sm text-[#4B5563] mt-0.5">{v.carpet} sq ft</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF]">Built-up Area</p>
                    <p className="text-sm text-[#4B5563] mt-0.5">{v.builtup} sq ft</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Desktop: table layout ── */}
          <div className="hidden md:block border border-[#E5E7EB] rounded-sm overflow-hidden">
            <div className="grid grid-cols-5 bg-[#F9FAFB] border-b border-[#E5E7EB]">
              {['Villa Type', 'Carpet Area', 'Built-up Area', 'Price', 'Status'].map(h => (
                <div key={h} className="px-5 py-3">
                  <p className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-semibold">{h}</p>
                </div>
              ))}
            </div>
            {VILLA_TYPES.map(v => (
              <div key={v.label} className={`grid grid-cols-5 border-b border-[#F3F4F6] last:border-0 transition-colors hover:bg-[#F9FAFB] ${v.status === 'subscribed' ? 'opacity-40' : ''}`}>
                <div className="px-5 py-4"><p className="font-semibold text-sm text-[#1C1C2E]">{v.label}</p></div>
                <div className="px-5 py-4"><p className="text-sm text-[#6B7280]">{v.carpet} sq ft</p></div>
                <div className="px-5 py-4"><p className="text-sm text-[#6B7280]">{v.builtup} sq ft</p></div>
                <div className="px-5 py-4"><p className="text-sm font-semibold text-[#1C1C2E]">₹{v.price} Cr</p></div>
                <div className="px-5 py-4">
                  {v.status === 'available'
                    ? <span className="text-xs font-semibold text-[#16a34a]">Available</span>
                    : <span className="text-xs text-[#9CA3AF]">Fully Subscribed</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#9CA3AF] mt-3">* Prices are indicative and subject to revision. Introductory pricing valid until 15 July 2026.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={scrollToForm} className="bg-[#2d3791] hover:bg-[#232d7a] text-white font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors tracking-wide">
              Request Detailed Cost Sheet
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-[#E5E7EB] text-[#4B5563] hover:border-[#2d3791] hover:text-[#2d3791] font-semibold px-8 py-3.5 rounded-sm text-sm transition-colors">
              Download Brochure via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── BANK APPROVED ────────────────────────────────────────────────────── */}
      <div className="bg-white border-y border-[#E5E7EB] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold mb-1">Bank-Approved Project</p>
            <p className="text-sm text-[#6B7280]">Home loans available from all leading banks — assistance at no cost to you</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {BANK_LOGOS.map(b => (
              <div key={b.name} className="flex items-center gap-2 px-4 py-2.5 rounded-sm border font-bold text-xs"
                style={{ backgroundColor: b.bg, borderColor: `${b.color}30`, color: b.color }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                {b.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AMENITIES ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Amenities</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C2E] mb-10" style={{ letterSpacing: '-0.02em' }}>30+ Curated Lifestyle Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITY_GROUPS.map(g => (
              <div key={g.category}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2d3791] mb-3 pb-2 border-b border-[#E5E7EB]">{g.category}</p>
                <ul className="space-y-2">
                  {g.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                      <span className="w-1 h-1 rounded-full bg-[#2d3791] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Location</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C2E] mb-2" style={{ letterSpacing: '-0.02em' }}>Kanakapura Road, South Bangalore</h2>
          <p className="text-[#6B7280] text-sm mb-10">129 Kanakapura Road, Badamanavarathekaval, Bengaluru 560082 — directly opposite the Art of Living International Centre.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-px border border-[#E5E7EB] rounded-sm overflow-hidden">
              {LOCATION_HIGHLIGHTS.map((l, i) => (
                <div key={l.place} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}`}>
                  <p className="text-sm text-[#4B5563]">{l.place}</p>
                  <p className="text-sm font-semibold text-[#2d3791] shrink-0 ml-4">{l.dist}</p>
                </div>
              ))}
            </div>
            <div className="rounded-sm overflow-hidden border border-[#E5E7EB] min-h-[280px] md:min-h-[320px]">
              <iframe
                src="https://maps.google.com/maps?q=Art+of+Living+International+Centre,+Kanakapura+Road,+Bengaluru,+Karnataka&output=embed&z=14"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280, display: 'block' }}
                allowFullScreen
                loading="lazy"
                title="Sattva Springs – Kanakapura Road, Bangalore"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPER ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0e1830] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#afd23a] font-semibold mb-3">The Developer</p>
              <div className="flex items-center gap-4 mb-6">
                <img src="/images/sattva-logo.webp" alt="Sattva Group" className="h-10 object-contain" />
                <div className="w-px h-10 bg-white/10" />
                <h2 className="text-2xl md:text-3xl font-black" style={{ letterSpacing: '-0.02em' }}>Sattva Group</h2>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Established in 1993, Sattva Group is one of India's foremost real estate conglomerates with a 31-year record of on-time delivery across residential, commercial, IT parks, co-living, and warehousing segments.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                The group has consistently ranked among India's top developers and has been recognised at prestigious industry forums for both commercial and residential excellence.
              </p>
              <div className="space-y-2">
                {AWARDS.map(a => (
                  <div key={a.award} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-sm px-4 py-3">
                    <span className="text-[#afd23a] text-sm mt-0.5 shrink-0">★</span>
                    <div>
                      <p className="text-white text-xs font-semibold">{a.award}</p>
                      <p className="text-white/40 text-[10px] mt-0.5">{a.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: '31+', l: 'Years in Real Estate' },
                { v: '142+', l: 'Completed Projects' },
                { v: '69M sq ft', l: 'Delivered' },
                { v: '7 Cities', l: 'Pan-India Presence' },
              ].map(s => (
                <div key={s.l} className="border border-white/10 p-5">
                  <p className="text-2xl font-black text-white">{s.v}</p>
                  <p className="text-white/40 text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Testimonials</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C2E] mb-10" style={{ letterSpacing: '-0.02em' }}>What our buyers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="border border-[#E5E7EB] p-6 flex flex-col">
                <Stars count={t.stars} />
                <p className="text-[#4B5563] text-sm leading-relaxed mt-4 flex-1">"{t.text}"</p>
                <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                  <p className="text-sm font-semibold text-[#1C1C2E]">{t.name}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{t.role} · {t.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="text-sm font-bold text-[#1C1C2E]">4.8 / 5</span>
            </div>
            <div className="w-px h-4 bg-[#E5E7EB]" />
            <p className="text-xs text-[#9CA3AF]">Based on buyer feedback · Sattva Group — 800+ Google reviews</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#F9FAFB] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">Contact Us</p>
              <h2 className="text-3xl font-black text-[#1C1C2E] mb-4" style={{ letterSpacing: '-0.02em' }}>Speak with a Property Advisor</h2>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
                We offer the same pricing as the developer — with no additional cost to you. We provide personalised site visit coordination, complete documentation support, home loan tie-ups, and dedicated relationship management through possession.
              </p>
              <div className="space-y-4">
                <a href={PHONE_LINK} className="flex items-center gap-3 text-[#1C1C2E] hover:text-[#2d3791] transition-colors group">
                  <div className="w-10 h-10 border border-[#E5E7EB] rounded-sm flex items-center justify-center group-hover:border-[#2d3791] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Call directly</p>
                    <p className="text-sm font-semibold">{PHONE_DISPLAY}</p>
                  </div>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#1C1C2E] hover:text-[#25D366] transition-colors group">
                  <div className="w-10 h-10 border border-[#E5E7EB] rounded-sm flex items-center justify-center group-hover:border-[#25D366] transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">WhatsApp</p>
                    <p className="text-sm font-semibold">Send a message</p>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-white border border-[#E5E7EB] p-8" style={{ boxShadow: '0 4px 33px 1px rgba(0,0,0,.06)' }}>
                <EnquiryForm source="contact" ctaLabel="Request a Callback" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-[#2d3791] font-semibold mb-3">FAQs</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#1C1C2E] mb-10" style={{ letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
          {FAQS.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 bg-[#2d3791] rounded-sm flex items-center justify-center">
                  <BuildingIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="font-bold text-sm">Sattva Constructions</p>
              </div>
              <p className="text-[#6B7280] text-xs leading-relaxed">Sattva Group · Kanakapura Road, Bangalore</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold mb-3">Project</p>
              <p className="text-sm text-[#9CA3AF]">Sattva Springs</p>
              <p className="text-sm text-[#9CA3AF]">Kanakapura Road, Bangalore</p>
              <p className="text-xs text-[#6B7280] mt-2">RERA: {RERA}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6B7280] font-semibold mb-3">Contact</p>
              <a href={PHONE_LINK} className="text-sm text-[#9CA3AF] hover:text-white transition-colors block mb-1">{PHONE_DISPLAY}</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8">
            <p className="text-[11px] text-[#4B5563] leading-relaxed">
              <strong className="text-[#6B7280]">Disclaimer:</strong> Sattva Constructions is an authorised channel partner of Sattva Group and is not the developer or promoter. All project details, specifications, pricing, and timelines are as provided by the developer and are subject to change without prior notice. Prices are indicative. Prospective buyers are advised to independently verify all information, review RERA filings, and consult qualified legal and financial advisors before making investment decisions. RERA No: {RERA}.
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ────────────────────────────────────────────────── */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-5 z-40 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        style={{ width: 52, height: 52 }}>
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>

      {/* ── MOBILE BOTTOM BAR ────────────────────────────────────────────────── */}
      {mounted && (
        <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-[#E5E7EB]">
          <div className="flex">
            <a href={PHONE_LINK} className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-[#2d3791] border-r border-[#E5E7EB]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              Call Us
            </a>
            <button onClick={() => setMobileForm(true)} className="flex-1 bg-[#2d3791] text-white py-4 text-sm font-semibold">
              Schedule a Visit
            </button>
          </div>
        </div>
      )}

      {/* Mobile form sheet */}
      {mounted && mobileForm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:hidden animate-backdrop" onClick={() => setMobileForm(false)}>
          <div className="bg-white w-full p-6 animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <div className="w-8 h-0.5 bg-[#E5E7EB] mx-auto mb-5 rounded-full" />
            <p className="font-bold text-[#1C1C2E] mb-4">Schedule a Site Visit</p>
            <EnquiryForm source="mobile" ctaLabel="Request Callback" compact />
          </div>
        </div>
      )}

      {/* Toast notifications */}
      {mounted && <ToastNotifications onEnquire={scrollToForm} />}

      {/* Exit intent */}
      {mounted && <ExitIntent />}
    </div>
  )
}
