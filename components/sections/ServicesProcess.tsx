'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MessageCircle, Wrench, CheckCircle, Star } from 'lucide-react'

const ServicesProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      number: '01',
      title: 'Consultanță Gratuită',
      description: 'Discutăm despre nevoile tale și îți oferim recomandări personalizate pentru proiectul tău.',
      icon: MessageCircle,
      details: [
        'Analiză mașină și obiective',
        'Recomandări tehnice',
        'Devis personalizat',
        'Programare flexibilă'
      ]
    },
    {
      number: '02',
      title: 'Planificare & Pregătire',
      description: 'Pregătim totul pentru proiect: materiale, echipamente și echipa de specialiști.',
      icon: Wrench,
      details: [
        'Comandă materiale premium',
        'Pregătire echipamente',
        'Alocare specialiști',
        'Programare detaliată'
      ]
    },
    {
      number: '03',
      title: 'Execuție Profesională',
      description: 'Echipa noastră expertă execută proiectul cu atenție la detalii și respectarea standardelor.',
      icon: CheckCircle,
      details: [
        'Execuție conform standardelor',
        'Control calitate continuu',
        'Documentare progres',
        'Comunicare regulată'
      ]
    },
    {
      number: '04',
      title: 'Finalizare & Garanție',
      description: 'Livrăm proiectul finalizat cu garanție extinsă și instrucțiuni de întreținere.',
      icon: Star,
      details: [
        'Inspecție finală detaliată',
        'Instrucțiuni întreținere',
        'Garanție extinsă',
        'Suport post-vânzare'
      ]
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
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Procesul Nostru</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Cum{' '}
            <span className="text-gradient">lucrăm</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Procesul nostru de lucru este structurat în 4 etape clare, 
            asigurându-ne că fiecare proiect este finalizat la cel mai înalt standard de calitate.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-4xl font-heading font-bold text-primary/20">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connection Dot */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-primary rounded-full border-4 border-dark-bg transform -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Gata să începi proiectul tău?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru o consultanță gratuită și descoperă cum 
              putem transforma mașina ta într-o capodoperă unică.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0720637273"
                className="btn-primary text-lg px-8 py-4"
              >
                Apelează acum: 0720637273
              </a>
              <a
                href="https://wa.me/40720637273?text=Bună! Am nevoie de informații despre serviciile voastre."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesProcess
