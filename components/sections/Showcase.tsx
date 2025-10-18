'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react'
import Link from 'next/link'

const Showcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'BMW M3 Competition - Full PPF',
      category: 'PPF',
      image: '/images/projects/bmw-m3-1.jpg',
      beforeImage: '/images/before-after/bmw-m3-before.jpg',
      afterImage: '/images/before-after/bmw-m3-after.jpg',
      description: ' This BMW M3 Competition has been fully wrapped with PPF on all carbon elements, along with the installation of premium parts. The result? An aggressive look, protected and ready to turn heads.',
      features: ['Chip Tuning Stage 2', 'Suspensii Coilover', 'Aerodinamică Custom', 'Interior Alcantara']
    },
    {
      id: 2,
      title: 'BMW M5 Competition - Colantare',
      category: 'Car Wrap',
      image: '/images/projects/m5-comp.jpg',
      beforeImage: '',
      afterImage: '',
      description: 'This M5 Competition just got a fresh new color! We used a colored PPF wrap that not only protects the paint, but also gives the car a whole new vibe.',
      features: ['Folie Matte Black', 'Detalii Gold', 'Protecție PPF', 'Garanție 5 ani']
    },
    {
      id: 3,
      title: 'McLaren Artura - Full PPF',
      category: 'Detailing',
      image: '/images/projects/mclaren.jpg',
      beforeImage: '',
      afterImage: '',
      description: 'McLaren Artura - Full PPF',
      features: ['Ceramic Coating 5 ani', 'Detailing Interior', 'Protecție Scaune', 'Polish Premium']
    },
    {
      id: 4,
      title: 'Ferrari Portofino - Colantare',
      category: 'PPF',
      image: '/images/projects/ferrari.jpg',
      beforeImage: '',
      afterImage: '',
      description: 'Ferrari Portofino - Colantare',
      features: ['PPF Premium', 'Auto-Healing', 'Protecție UV', 'Garanție 10 ani']
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

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
    <section className="py-20 bg-gradient-to-b from-dark-accent to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Proiectele Noastre</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Transformări{' '}
            <span className="text-gradient">spectaculoase</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Descoperă câteva dintre proiectele noastre cele mai impresionante. 
            Fiecare mașină spune o poveste unică de pasiune și perfecțiune.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="relative"
        >
          <div className="max-w-2xl mx-auto">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-dark-accent/50 border border-gray-700/50 mb-6">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 h-full flex items-center justify-center p-4 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Title Overlay */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-bold text-lg">
                          {project.title}
                        </h3>
                        <span className="bg-primary text-dark-bg px-2 py-1 rounded text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Buttons - Fixed on the square container */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Content Below Image */}
            <div className="text-center">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {projects[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {projects[currentSlide].features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>


            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link
            href="/galerie"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Vezi toate proiectele</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
