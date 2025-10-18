'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Camera, Eye, Star } from 'lucide-react'

const GalleryHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '500+', label: 'Proiecte Finalizate' },
    { number: '50+', label: 'Before & After' },
    { number: '100%', label: 'Satisfacție Client' },
    { number: '5+', label: 'Ani Experiență' }
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
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Galerie Proiecte</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Transformări{' '}
            <span className="text-gradient">spectaculoase</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Descoperă câteva dintre proiectele noastre cele mai impresionante. 
            Fiecare mașină spune o poveste unică de pasiune, creativitate și perfecțiune tehnică.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
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

          {/* Featured Projects Preview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                image: '/images/gallery/featured-1.jpg',
                title: 'BMW X6',
                category: 'Tuning Complete',
                description: 'Transformare completă cu chip tuning, suspensii și aerodinamică custom.'
              },
              {
                image: '/images/gallery/featured-2.jpg',
                title: 'Aston Martin DBX',
                category: 'Car Wrap Matte',
                description: 'Wrap complet cu folie matte black premium și detalii aurii.'
              },
              {
                image: '/images/gallery/featured-3.jpg',
                title: 'VW Scirocco Ti',
                category: 'Ceramic Coating',
                description: 'Detailing exterior și interior cu ceramic coating de ultimă generație.'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-dark-accent/30 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content below image */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-primary text-dark-bg px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
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

export default GalleryHero
