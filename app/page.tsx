import Hero from '@/components/sections/Hero'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Showcase from '@/components/sections/Showcase'
import ServicesPreview from '@/components/sections/ServicesPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export const metadata = {
  title: 'Society Garage — Atelier tuning auto & car wrap în București',
  description: 'Society Garage oferă servicii premium de tuning, car wrap, paint protection film și detailing profesional în București. Programează o consultare: 0720637273.',
  openGraph: {
    title: 'Society Garage — Atelier tuning auto & car wrap în București',
    description: 'Society Garage oferă servicii premium de tuning, car wrap, paint protection film și detailing profesional în București. Programează o consultare: 0720637273.',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Showcase />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </>
  )
}
