import { Metadata } from 'next'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactMap from '@/components/sections/ContactMap'
import CTA from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Contact Society Garage - Programează Consultanță Gratuită | București',
  description: 'Contactează Society Garage pentru consultanță gratuită. Telefon: 0720637273, Adresă: Strada Petru Vodă 23, București. Programează-te acum!',
  keywords: 'contact society garage, programare tuning, consultanta gratuita, bucuresti, telefon 0720637273',
  openGraph: {
    title: 'Contact Society Garage - Programează Consultanță Gratuită | București',
    description: 'Contactează Society Garage pentru consultanță gratuită. Telefon: 0720637273, Adresă: Strada Petru Vodă 23, București. Programează-te acum!',
    images: ['/og-contact.jpg'],
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <CTA />
    </>
  )
}
