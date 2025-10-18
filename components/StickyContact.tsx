'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Calendar, X } from 'lucide-react'
import Link from 'next/link'

const StickyContact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show after scrolling 20% of the page
      if (scrollPosition > windowHeight * 0.2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
      isMinimized ? 'translate-y-0' : 'translate-y-0'
    }`}>
      {!isMinimized ? (
        <div className="bg-dark-bg border border-primary/20 rounded-2xl shadow-2xl backdrop-blur-md p-4 max-w-xs">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold text-sm">Ai nevoie de ajutor?</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Minimize contact bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            <a
              href="tel:0720637273"
              className="flex items-center space-x-3 w-full p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-200 group"
            >
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-200" />
              <span className="text-white text-sm font-medium">Apelează acum</span>
            </a>
            
            <a
              href="https://wa.me/40720637273?text=Bună! Am nevoie de informații despre serviciile voastre."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 w-full p-3 bg-green-600/10 hover:bg-green-600/20 rounded-lg transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-white text-sm font-medium">WhatsApp</span>
            </a>
            
            <Link
              href="/contact"
              className="flex items-center space-x-3 w-full p-3 bg-primary hover:bg-primary-light text-dark-bg rounded-lg transition-all duration-200 group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm font-semibold">Programează-te</span>
            </Link>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-gray-400 text-xs text-center">
              Răspundem în maxim 30 de minute
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 bg-primary hover:bg-primary-light text-dark-bg rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Open contact options"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

export default StickyContact
