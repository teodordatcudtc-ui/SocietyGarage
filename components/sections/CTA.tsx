'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, MessageCircle, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    'Consultanță gratuită',
    'Devis personalizat',
    'Programare flexibilă',
    'Garanție extinsă'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          
          <div className="relative z-10 py-16 px-8 text-center">
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Programează-te Acum</span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            >
              Gata să-ți transformi{' '}
              <span className="text-gradient">mașina?</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Contactează-ne astăzi pentru o consultanță gratuită și descoperă cum 
              putem transforma mașina ta într-o capodoperă unică.
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-4 glow-effect hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Programează consultanța</span>
              </Link>
              
              <a
                href="tel:0720637273"
                className="btn-secondary text-lg px-8 py-4 hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Apelează acum</span>
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-700/50"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a
                    href="tel:0720637273"
                    className="text-lg font-semibold hover:text-primary transition-colors duration-200"
                  >
                    0720637273
                  </a>
                </div>
                <div className="hidden sm:block text-gray-400">•</div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <a
                    href="https://wa.me/40720637273?text=Bună! Am nevoie de informații despre serviciile voastre."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-primary transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="hidden sm:block text-gray-400">•</div>
                <div className="text-sm text-gray-300">
                  Luni - Duminică: 09:00 - 18:00
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
