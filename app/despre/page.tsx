import { Metadata } from 'next'
import AboutHero from '@/components/sections/AboutHero'
import AboutStory from '@/components/sections/AboutStory'
import AboutTeam from '@/components/sections/AboutTeam'
import AboutValues from '@/components/sections/AboutValues'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Despre Society Garage - Atelier Tuning Auto Premium București',
  description: 'Society Garage - atelier premium de tuning auto în București cu peste 5 ani experiență. Echipă expertă, materiale premium și servicii de calitate superioară.',
  keywords: 'despre society garage, atelier tuning bucuresti, echipa auto, experienta tuning, servicii premium',
  openGraph: {
    title: 'Despre Society Garage - Atelier Tuning Auto Premium București',
    description: 'Society Garage - atelier premium de tuning auto în București cu peste 5 ani experiență. Echipă expertă, materiale premium și servicii de calitate superioară.',
    images: ['/og-despre.jpg'],
  },
}

export default function Despre() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutValues />
      <CTA />
    </>
  )
}
