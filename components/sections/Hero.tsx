'use client'

// Removed useRef import
import Link from 'next/link'
import { ChevronDown, Play, Star } from 'lucide-react'

const Hero = () => {
  // Removed parallax scroll effect

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero/hero-bg.jpg)',
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-dark-bg/40 to-dark-bg/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-screen py-16 lg:py-20">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left lg:col-span-1">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Atelier Premium București</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Transformăm mașinile tale în{' '}
            <span className="text-gradient">opere de artă</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Society Garage oferă servicii premium de tuning, car wrap, paint protection film 
            și detailing profesional. Fiecare proiect este o poveste unică de pasiune și perfecțiune.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 glow-effect hover:scale-105 transition-all duration-300"
            >
              Programează o consultare
            </Link>
            <Link
              href="/galerie"
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Vezi proiectele noastre</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm">Disponibil acum</span>
            </div>
            <a
              href="tel:0720637273"
              className="text-lg font-semibold hover:text-primary transition-colors duration-200"
            >
              0720637273
            </a>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-300">București, România</span>
          </div>
          </div>

          {/* Right side - Featured image - Hidden on mobile */}
          <div className="relative group hidden lg:block">
            {/* Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-accent/40 to-dark-accent/20 border-2 border-gray-700/30 group-hover:border-primary/40 transition-all duration-500 shadow-2xl">
              {/* Inner glow border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <img
                src="/images/hero/featured-car.jpg"
                alt="Mașină tuning Society Garage"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-transparent" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-2xl" />
              
              {/* Title overlay */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg">
                  <h3 className="text-white font-bold text-sm mb-1">BMW M4 CS</h3>
                  <p className="text-gray-300 text-xs">Transformare tuning</p>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  )
}

export default Hero
