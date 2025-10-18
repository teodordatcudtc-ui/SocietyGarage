import { Metadata } from 'next'
import ServicesHero from '@/components/sections/ServicesHero'
import ServicesList from '@/components/sections/ServicesList'
import ServicesProcess from '@/components/sections/ServicesProcess'
import ServicesFAQ from '@/components/sections/ServicesFAQ'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Servicii Premium - Society Garage | Tuning, Car Wrap, PPF, Detailing',
  description: 'Servicii: Tuning, Car wrap, PPF, Detailing exterior & interior, Ceramic coating. Specialiști în proiecte custom, finisaje de calitate în București.',
  keywords: 'servicii tuning, car wrap bucuresti, paint protection film, detailing auto, ceramic coating, servicii auto premium',
  openGraph: {
    title: 'Servicii Premium - Society Garage | Tuning, Car Wrap, PPF, Detailing',
    description: 'Servicii: Tuning, Car wrap, PPF, Detailing exterior & interior, Ceramic coating. Specialiști în proiecte custom, finisaje de calitate în București.',
    images: ['/og-servicii.jpg'],
  },
}

export default function Servicii() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesFAQ />
      <CTA />
    </>
  )
}
