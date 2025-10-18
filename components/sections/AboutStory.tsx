'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Calendar, Target, Lightbulb, Heart } from 'lucide-react'

const AboutStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      year: '2019',
      title: 'Începutul Poveștii',
      description: 'Society Garage a fost înființat cu o viziune simplă: să oferim servicii de tuning auto de cea mai înaltă calitate în București.',
      icon: Calendar
    },
    {
      year: '2020',
      title: 'Prima Transformare',
      description: 'Am finalizat primul nostru proiect major - o transformare completă BMW M3 care a stabilit standardul pentru toate proiectele viitoare.',
      icon: Target
    },
    {
      year: '2021',
      title: 'Expansiunea Serviciilor',
      description: 'Am adăugat servicii de car wrap și paint protection film, devenind un atelier complet de modificări auto.',
      icon: Lightbulb
    },
    {
      year: '2022',
      title: 'Recunoaștere',
      description: 'Am câștigat primul premiu pentru cel mai bun atelier de tuning din București, recunoaștere care ne-a motivat să continuăm.',
      icon: Heart
    },
    {
      year: '2023',
      title: 'Echipa Perfectă',
      description: 'Am format echipa noastră de specialiști, fiecare cu expertiza sa unică în domeniul modificărilor auto.',
      icon: Heart
    },
    {
      year: '2024',
      title: 'Viitorul',
      description: 'Continuăm să inovăm și să ne dezvoltăm, cu planuri de expansiune și noi tehnologii în domeniul tuning-ului auto.',
      icon: Target
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
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Povestea Noastră</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            De la{' '}
            <span className="text-gradient">vis la realitate</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Society Garage s-a născut din pasiunea pentru mașini și dorința de a oferi 
            servicii de cea mai înaltă calitate. Iată cum am ajuns să fim unul dintre 
            cei mai respectați ateliere de tuning din București.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-primary" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-primary">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-white">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-dark-bg z-10" />

                {/* Spacer */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8">
            Ce ne definește
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Pasiunea',
                description: 'Fiecare proiect este realizat cu pasiune și atenție la detalii, de la primul schiț până la finalizare.'
              },
              {
                title: 'Calitatea',
                description: 'Folosim doar materiale premium și tehnologii avansate pentru a asigura rezultate excepționale.'
              },
              {
                title: 'Inovația',
                description: 'Continuăm să inovăm și să adoptăm cele mai noi tehnologii din domeniul modificărilor auto.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-heading font-semibold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutStory
