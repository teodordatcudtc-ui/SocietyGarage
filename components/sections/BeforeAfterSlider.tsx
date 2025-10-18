'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

const BeforeAfterSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const beforeAfterProjects = [
    {
      id: 1,
      title: 'BMW M3 Competition - Tuning Complete',
      beforeImage: '/before-after/bmw-m3-before.jpg',
      afterImage: '/before-after/bmw-m3-after.jpg',
      description: 'Transformare completă cu chip tuning Stage 2, suspensii coilover și aerodinamică custom.',
      features: ['Chip Tuning Stage 2', 'Suspensii Coilover', 'Aerodinamică Custom', 'Interior Alcantara'],
      duration: '7 zile',
      category: 'Tuning'
    },
    {
      id: 2,
      title: 'Audi A4 - Car Wrap Matte Black',
      beforeImage: '/before-after/audi-a4-before.jpg',
      afterImage: '/before-after/audi-a4-after.jpg',
      description: 'Wrap complet cu folie matte black premium și detalii aurii pentru un aspect luxury.',
      features: ['Folie Matte Black Premium', 'Detalii Gold', 'Protecție PPF', 'Garanție 5 ani'],
      duration: '5 zile',
      category: 'Car Wrap'
    },
    {
      id: 3,
      title: 'Porsche 911 - Ceramic Coating',
      beforeImage: '/before-after/porsche-911-before.jpg',
      afterImage: '/before-after/porsche-911-after.jpg',
      description: 'Detailing exterior și interior cu ceramic coating de ultimă generație pentru strălucire maximă.',
      features: ['Ceramic Coating 5 ani', 'Detailing Interior', 'Protecție Scaune', 'Polish Premium'],
      duration: '2 zile',
      category: 'Detailing'
    },
    {
      id: 4,
      title: 'Mercedes C-Class - Paint Protection Film',
      beforeImage: '/before-after/mercedes-c-before.jpg',
      afterImage: '/before-after/mercedes-c-after.jpg',
      description: 'Instalare PPF completă pentru protecția vopselei originale cu tehnologie auto-healing.',
      features: ['PPF Premium', 'Auto-Healing', 'Protecție UV', 'Garanție 10 ani'],
      duration: '3 zile',
      category: 'PPF'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterProjects.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length)
    setSliderPosition(50)
  }

  const resetSlider = () => {
    setSliderPosition(50)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleSliderMove(e)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleSliderMove = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const newPosition = Math.max(0, Math.min(100, percentage))
    setSliderPosition(newPosition)
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
            <RotateCcw className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Before & After</span>
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
            Descoperă diferența incredibilă între starea inițială și rezultatul final 
            al proiectelor noastre. Fiecare transformare spune o poveste de pasiune și perfecțiune.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="relative"
        >
          {/* Navigation Buttons */}
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

          {/* Before/After Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div
              ref={sliderRef}
              className="relative overflow-hidden rounded-2xl bg-dark-accent/50 border border-gray-700/50"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div className="relative h-96 md:h-[500px]">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img
                    src={beforeAfterProjects[currentSlide].beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ÎNAINTE
                  </div>
                </div>

                {/* After Image */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={beforeAfterProjects[currentSlide].afterImage}
                    alt="After"
                    className="w-full h-full object-cover"
                    style={{ width: `${100 / (sliderPosition / 100)}%` }}
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    DUPĂ
                  </div>
                </div>

                {/* Slider Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-primary text-dark-bg px-3 py-1 rounded-full text-sm font-medium">
                    {beforeAfterProjects[currentSlide].category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {beforeAfterProjects[currentSlide].duration}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {beforeAfterProjects[currentSlide].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {beforeAfterProjects[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {beforeAfterProjects[currentSlide].features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSlider}
              className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Reset slider"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {beforeAfterProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setSliderPosition(50)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BeforeAfterSlider
