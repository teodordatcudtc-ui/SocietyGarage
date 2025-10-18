'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const ContactHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0720637273',
      description: 'Apelează pentru consultanță rapidă',
      action: 'tel:0720637273',
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400'
    },
    {
      icon: MapPin,
      title: 'Adresă',
      value: 'Strada Petru Vodă 23',
      description: 'București 052034',
      action: 'https://maps.google.com/?q=Strada+Petru+Vodă+23,+București',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Program',
      value: 'Luni - Duminică',
      description: '09:00 - 18:00',
      action: null,
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '0720637273',
      description: 'Mesaje rapide și poze',
      action: 'https://wa.me/40720637273',
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400'
    }
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
    <section className="relative py-20 bg-gradient-to-b from-dark-bg to-dark-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Contact</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Hai să{' '}
            <span className="text-gradient">vorbim</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Gata să începi proiectul tău? Contactează-ne pentru o consultanță gratuită 
            și descoperă cum putem transforma mașina ta într-o capodoperă unică.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              className="group"
            >
              {method.action ? (
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <div className={`bg-gradient-to-br ${method.color} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group-hover:scale-105`}>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                      <method.icon className={`w-6 h-6 ${method.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </h3>
                    <div className="text-primary font-medium mb-1">
                      {method.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {method.description}
                    </div>
                  </div>
                </a>
              ) : (
                <div className={`bg-gradient-to-br ${method.color} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2`}>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                    <method.icon className={`w-6 h-6 ${method.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {method.title}
                  </h3>
                  <div className="text-primary font-medium mb-1">
                    {method.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {method.description}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Quick CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Programează consultanța gratuită
            </h3>
            <p className="text-gray-300 mb-6">
              Completează formularul de mai jos sau apelează direct pentru a programa o consultanță gratuită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="btn-primary text-lg px-8 py-4"
              >
                Completează formularul
              </a>
              <a
                href="tel:0720637273"
                className="btn-secondary text-lg px-8 py-4"
              >
                Apelează acum
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  )
}

export default ContactHero
