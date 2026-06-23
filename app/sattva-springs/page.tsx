import type { Metadata } from 'next'
import ClientWrapper from './ClientWrapper'

const RERA     = 'PRM/KA/RERA/1251/310/PR/240724/006948'
const BASE_URL = 'https://www.sattvaconstructions.in'
const PAGE_URL = `${BASE_URL}/sattva-springs`

// ─── METADATA ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sattva Springs – 4 BHK Luxury Row Villas on Kanakapura Road, Bangalore | From ₹4.79 Cr',
  description:
    'Sattva Springs by Sattva Group — ultra-luxury 4 BHK row villas on Kanakapura Road, South Bangalore. 3,607–5,236 sq ft. Starting ₹4.79 Cr. RERA registered. 5 configurations available. Book a free site visit with our authorised channel partner team.',
  keywords: [
    'Sattva Springs',
    'Sattva Springs Kanakapura Road',
    'luxury villas Bangalore',
    '4 BHK villas Kanakapura Road',
    'row villas South Bangalore',
    'Sattva Group villas Bangalore',
    'luxury homes near Art of Living',
    'RERA approved villas Bangalore',
    'buy villa Bangalore 2025',
    'Sattva Constructions channel partner',
    'villa above 4 crore Bangalore',
    'triplex villa Kanakapura Road',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Sattva Springs | 4 BHK Luxury Row Villas | Kanakapura Road, Bangalore',
    description:
      'Ultra-luxury 4 BHK row villas by Sattva Group on Kanakapura Road, South Bangalore. Starting ₹4.79 Cr. 3,607–5,236 sq ft. RERA: ' + RERA,
    url: PAGE_URL,
    images: [
      {
        url: '/images/elevation.jpg',
        width: 1200,
        height: 630,
        alt: 'Sattva Springs – Luxury Row Villa Elevation, Kanakapura Road, Bangalore',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sattva Springs | Luxury 4 BHK Villas | Kanakapura Road, Bangalore',
    description:
      'Ultra-luxury row villas by Sattva Group. From ₹4.79 Cr. RERA approved. Book a free site visit today.',
    images: ['/images/elevation.jpg'],
  },
}

// ─── STRUCTURED DATA (JSON-LD) ────────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // FAQPage — feeds Google FAQ rich results, People Also Ask, and AI answer engines
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Sattva Springs RERA registered?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes. Sattva Springs is registered under Karnataka RERA — number ${RERA}. You can verify this independently at karerait.karnataka.gov.in.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Sattva Springs located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sattva Springs is located at 129 Kanakapura Road, Badamanavarathekaval, Bengaluru 560082 — directly opposite the Art of Living International Centre, South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What villa configurations are available at Sattva Springs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only Type C is fully subscribed. Types A, B, D, E, and F — ranging from 3,607 to 5,236 sq ft built-up area — are currently open for booking.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the price of a villa at Sattva Springs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All-inclusive prices at Sattva Springs range from ₹4.79 Cr (Type A, 3,607 sq ft) to ₹7.00 Cr (Type F, 5,236 sq ft). Detailed cost sheets, payment plans, and home loan facilitation are available on request.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the possession date for Sattva Springs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'RERA-scheduled possession is September 2027. Construction is approximately 50% complete as of mid-2026 and is progressing on schedule.',
          },
        },
        {
          '@type': 'Question',
          name: 'What amenities does Sattva Springs offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sattva Springs offers 30+ curated amenities including a swimming pool, gymnasium, yoga and meditation deck, jogging track, cricket pitch, badminton court, grand clubhouse, party hall, amphitheatre, landscaped gardens, children\'s play area, and pet park.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any extra cost when buying through a channel partner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. As an authorised channel partner of Sattva Group, we offer the same pricing as the developer — buyers pay nothing extra. You gain personalised advisory, documentation support, home loan facilitation, and dedicated post-booking service.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far is Sattva Springs from Electronic City and JP Nagar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sattva Springs is approximately 35–40 minutes from Electronic City via NICE Road, and 25–30 minutes from JP Nagar / Jayanagar. The NICE Ring Road is 5 km away.',
          },
        },
      ],
    },

    // RealEstateAgent — channel partner local business
    {
      '@type': 'RealEstateAgent',
      '@id': `${BASE_URL}/#agent`,
      name: 'Parikshith – Authorised Channel Partner, Sattva Group',
      url: BASE_URL,
      telephone: '+919380322553',
      description:
        'Authorised channel partner of Sattva Group offering expert advisory, documentation support, and booking assistance for Sattva Springs luxury villas on Kanakapura Road, Bangalore.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'City', name: 'Bengaluru' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Sattva Springs – Available Villa Configurations',
        itemListElement: [
          { '@type': 'Offer', name: 'Type A – 3,607 sq ft built-up', price: '47900000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Type B – 3,732 sq ft built-up', price: '50000000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Type C – 3,854 sq ft built-up', price: '51600000', priceCurrency: 'INR', availability: 'https://schema.org/SoldOut' },
          { '@type': 'Offer', name: 'Type D – 4,034 sq ft built-up', price: '54400000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Type E – 4,156 sq ft built-up', price: '56000000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
          { '@type': 'Offer', name: 'Type F – 5,236 sq ft built-up', price: '70000000', priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
        ],
      },
    },

    // Residence — the property itself
    {
      '@type': 'Residence',
      '@id': `${PAGE_URL}/#property`,
      name: 'Sattva Springs',
      description:
        'Ultra-luxury 4 BHK row villas (triplex) by Sattva Group on Kanakapura Road, South Bangalore. 66 villas across 5.5 acres. Built-up area 3,607–5,236 sq ft. Starting ₹4.79 Cr. RERA: ' + RERA,
      url: PAGE_URL,
      image: [
        `${BASE_URL}/images/elevation.jpg`,
        `${BASE_URL}/images/pool.jpg`,
        `${BASE_URL}/images/gallery-1.jpg`,
        `${BASE_URL}/images/gallery-2.jpg`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '129 Kanakapura Road, Badamanavarathekaval',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560082',
        addressCountry: 'IN',
      },
      numberOfRooms: '4',
      floorSize: {
        '@type': 'QuantitativeValue',
        minValue: 3607,
        maxValue: 5236,
        unitCode: 'FTK',
        unitText: 'sq ft',
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool',            value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Gymnasium',                value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Cricket Pitch',            value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Grand Clubhouse',          value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Yoga & Meditation Deck',   value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Badminton Court',          value: true },
        { '@type': 'LocationFeatureSpecification', name: "Children's Play Area",     value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Landscaped Gardens',       value: true },
        { '@type': 'LocationFeatureSpecification', name: 'DG Power Backup',          value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Basement Parking',         value: true },
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '47900000',
        highPrice: '70000000',
        offerCount: '5',
      },
      brand: {
        '@type': 'Organization',
        name: 'Sattva Group',
        url: 'https://sattvagroup.in',
        foundingDate: '1993',
        description: 'One of India\'s foremost real estate conglomerates with 31+ years of on-time delivery across residential, commercial, IT parks, and co-living segments.',
      },
    },

    // BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',           item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Sattva Springs', item: PAGE_URL },
      ],
    },
  ],
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SattvaSpringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientWrapper />
    </>
  )
}
