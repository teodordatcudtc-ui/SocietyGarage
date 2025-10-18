import Link from 'next/link'
import { Phone, MapPin, Instagram, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Tuning Auto', href: '/servicii#tuning' },
    { name: 'Car Wrap', href: '/servicii#car-wrap' },
    { name: 'Paint Protection Film', href: '/servicii#ppf' },
    { name: 'Detailing Exterior', href: '/servicii#detailing-exterior' },
    { name: 'Detailing Interior', href: '/servicii#detailing-interior' },
    { name: 'Ceramic Coating', href: '/servicii#ceramic-coating' },
  ]

  const quickLinks = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Despre', href: '/despre' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-dark-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-dark-bg font-bold text-xl">SG</span>
              </div>
              <span className="text-xl font-heading font-bold text-gradient">
                Society Garage
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Atelier premium de tuning auto, car wrap și detailing profesional în București. 
              Transformăm mașinile tale în opere de artă pe roți.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/societygarage.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-dark-bg rounded-lg transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicii</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:0720637273"
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    0720637273
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Strada Petru Vodă 23<br />
                    București 052034
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Luni - Duminică: 09:00 - 18:00<br />
                    <span className="text-xs text-gray-400">Program la cerere</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Society Garage. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/politica-confidentialitate"
                className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                href="/termeni-conditii"
                className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
