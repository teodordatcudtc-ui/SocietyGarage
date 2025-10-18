'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Award, Clock, Shield, Wrench, Star, CheckCircle } from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Award,
      title: 'Calitate Premium',
      description: 'Folosim doar materiale de cea mai înaltă calitate și tehnologii avansate pentru rezultate excepționale.',
      benefits: ['Materiale premium', 'Tehnologii avansate', 'Standarde înalte']
    },
    {
      icon: Clock,
      title: 'Rapiditate',
      description: 'Echipa noastră expertă finalizează proiectele în timp record, fără a compromite calitatea.',
      benefits: ['Echipă expertă', 'Timp optim', 'Eficiență maximă']
    },
    {
      icon: Shield,
      title: 'Garanție',
      description: 'Oferim garanție extinsă pentru toate serviciile noastre, asigurându-te de satisfacție pe termen lung.',
      benefits: ['Garanție extinsă', 'Suport post-vânzare', 'Satisfacție garantată']
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
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-accent">
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
            <span className="text-primary text-sm font-medium">De ce Society Garage?</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Experiență, pasiune și{' '}
            <span className="text-gradient">perfecțiune</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Cu peste 5 ani de experiență în industria auto, transformăm fiecare mașină 
            într-o capodoperă unică, combinând tehnologia avansată cu atenția la detalii.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Proiecte Finalizate' },
            { number: '5+', label: 'Ani Experiență' },
            { number: '100%', label: 'Satisfacție Client' },
            { number: '24/7', label: 'Suport Tehnic' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
