import { Metadata } from 'next'
import GalleryHero from '@/components/sections/GalleryHero'
import GalleryFilter from '@/components/sections/GalleryFilter'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Galerie Proiecte - Society Garage | Before & After Tuning, Car Wrap',
  description: 'Descoperă transformările spectaculoase realizate de Society Garage. Galerie cu proiecte de tuning, car wrap, PPF și detailing în București.',
  keywords: 'galerie tuning, before after car wrap, proiecte auto, transformari masini, galerie bucuresti',
  openGraph: {
    title: 'Galerie Proiecte - Society Garage | Before & After Tuning, Car Wrap',
    description: 'Descoperă transformările spectaculoase realizate de Society Garage. Galerie cu proiecte de tuning, car wrap, PPF și detailing în București.',
    images: ['/og-galerie.jpg'],
  },
}

export default function Galerie() {
  return (
    <>
      <GalleryHero />
      <GalleryFilter />
      <CTA />
    </>
  )
}
