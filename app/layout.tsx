import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyContact from '@/components/StickyContact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Society Garage — Atelier tuning auto & car wrap în București',
  description: 'Society Garage oferă servicii premium de tuning, car wrap, paint protection film și detailing profesional în București. Programează o consultare: 0720637273.',
  keywords: 'tuning auto, car wrap, paint protection film, detailing, ceramic coating, București, Society Garage',
  authors: [{ name: 'Society Garage' }],
  creator: 'Society Garage',
  publisher: 'Society Garage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://societygarage.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Society Garage — Atelier tuning auto & car wrap în București',
    description: 'Society Garage oferă servicii premium de tuning, car wrap, paint protection film și detailing profesional în București. Programează o consultare: 0720637273.',
    url: 'https://societygarage.ro',
    siteName: 'Society Garage',
    images: [
      {
        url: '/images/hero/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Society Garage - Atelier tuning auto premium',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Society Garage — Atelier tuning auto & car wrap în București',
    description: 'Society Garage oferă servicii premium de tuning, car wrap, paint protection film și detailing profesional în București.',
    images: ['/images/hero/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <meta name="theme-color" content="#f2c244" />
        <meta name="msapplication-TileColor" content="#f2c244" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Society Garage",
              "description": "Atelier premium de tuning auto, car wrap, paint protection film și detailing profesional în București",
              "url": "https://societygarage.ro",
              "telephone": "0720637273",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Petru Vodă 23",
                "addressLocality": "București",
                "postalCode": "052034",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.400962299999996",
                "longitude": "26.063719"
              },
              "openingHours": "Mo-Su 09:00-18:00",
              "priceRange": "$$$",
              "serviceArea": {
                "@type": "City",
                "name": "București"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii Auto Premium",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tuning Auto"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Car Wrap"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Paint Protection Film"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Detailing Exterior"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Detailing Interior"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ceramic Coating"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.instagram.com/societygarage.ro/"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  )
}
