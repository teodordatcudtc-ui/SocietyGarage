'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Wrench, Palette, Shield, Droplets, Sparkles, Zap } from 'lucide-react'

const ServicesHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    { icon: Wrench, name: 'Tuning' },
    { icon: Palette, name: 'Car Wrap' },
    { icon: Shield, name: 'PPF' },
    { icon: Droplets, name: 'Detailing' },
    { icon: Sparkles, name: 'Interior' },
    { icon: Zap, name: 'Ceramic' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Serviciile Noastre</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Servicii premium pentru{' '}
            <span className="text-gradient">mașina ta</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            De la tuning performant la detailing de lux, oferim o gamă completă de servicii 
            pentru a-ți transforma mașina în ceva cu adevărat special. Fiecare proiect este 
            realizat cu pasiune și atenție la detalii.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {services.map((service, index) => (
              <div
                key={service.name}
                className="flex flex-col items-center space-y-2 p-4 bg-dark-accent/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-white text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '500+', label: 'Proiecte Finalizate' },
              { number: '5+', label: 'Ani Experiență' },
              { number: '100%', label: 'Satisfacție Client' },
              { number: '24/7', label: 'Suport Tehnic' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  )
}

export default ServicesHero
