'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Instagram } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Despre', href: '/despre' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-dark-bg font-bold text-xl">SG</span>
            </div>
            <span className="text-xl lg:text-2xl font-heading font-bold text-gradient">
              Society Garage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/societygarage.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-primary transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Programează-te
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-bg/95 backdrop-blur-md rounded-lg mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-white hover:text-primary hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="https://www.instagram.com/societygarage.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-white hover:text-primary transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <Link
                  href="/contact"
                  className="block mx-3 mt-3 btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programează-te
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
