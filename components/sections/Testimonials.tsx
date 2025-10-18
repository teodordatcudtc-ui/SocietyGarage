'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: 'Alexandru Popescu',
      role: 'Proprietar BMW M3',
      content: 'Am fost impresionat de profesionalismul echipei Society Garage. Tuning-ul făcut pe mașina mea a depășit toate așteptările. Calitatea lucrării și atenția la detalii sunt excepționale.',
      rating: 5,
      image: '/testimonials/alexandru-popescu.jpg'
    },
    {
      id: 2,
      name: 'Maria Ionescu',
      role: 'Proprietar Audi A4',
      content: 'Car wrap-ul făcut la Society Garage arată incredibil! Folia este de cea mai bună calitate și instalarea a fost perfectă. Recomand cu încredere!',
      rating: 5,
      image: '/testimonials/maria-ionescu.jpg'
    },
    {
      id: 3,
      name: 'Cristian Radu',
      role: 'Proprietar Mercedes C-Class',
      content: 'Ceramic coating-ul aplicat pe mașina mea îi dă o strălucire incredibilă. De 6 luni arată ca nouă după fiecare spălare. Serviciul este de 5 stele!',
      rating: 5,
      image: '/testimonials/cristian-radu.jpg'
    },
    {
      id: 4,
      name: 'Andreea Stan',
      role: 'Proprietar Porsche 911',
      content: 'PPF-ul instalat de Society Garage protejează perfect vopseaua mașinii mele. Calitatea materialului și instalarea sunt de nivel profesional. Mulțumesc!',
      rating: 5,
      image: '/testimonials/andreea-stan.jpg'
    },
    {
      id: 5,
      name: 'Mihai Constantinescu',
      role: 'Proprietar VW Golf',
      content: 'Detailing-ul interior și exterior făcut la Society Garage a transformat complet mașina mea. Echipamentul și produsele folosite sunt de cea mai bună calitate.',
      rating: 5,
      image: '/testimonials/mihai-constantinescu.jpg'
    },
    {
      id: 6,
      name: 'Elena Dumitrescu',
      role: 'Proprietar Mini Cooper',
      content: 'Serviciul de detailing interior a fost excepțional. Mașina mea arată și miroase ca nouă. Personalul este foarte prietenos și profesional.',
      rating: 5,
      image: '/testimonials/elena-dumitrescu.jpg'
    }
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
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Testimoniale</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Ce spun{' '}
            <span className="text-gradient">clienții noștri</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Satisfacția clienților noștri este prioritatea noastră. 
            Descoperă experiențele lor cu serviciile Society Garage.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">5.0</div>
            <div className="text-gray-300 font-medium">Rating Mediu</div>
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
            <div className="text-gray-300 font-medium">Clienți Mulțumiți</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-primary mb-2">100%</div>
            <div className="text-gray-300 font-medium">Satisfacție Garantată</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
