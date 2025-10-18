'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Award, Heart, Lightbulb, Shield, Users, Target } from 'lucide-react'

const AboutValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Award,
      title: 'Calitate Superioară',
      description: 'Folosim doar materiale premium și tehnologii avansate pentru a asigura rezultate excepționale în fiecare proiect.',
      features: [
        'Materiale premium de la producători recunoscuți',
        'Tehnologii avansate și echipamente profesionale',
        'Control calitate strict la fiecare etapă',
        'Garanție extinsă pentru toate serviciile'
      ]
    },
    {
      icon: Heart,
      title: 'Pasiune & Dedicare',
      description: 'Fiecare proiect este realizat cu pasiune și atenție la detalii, de la primul schiț până la finalizare.',
      features: [
        'Pasiune pentru fiecare detaliu',
        'Atenție la cerințele specifice ale fiecărui client',
        'Dedicare pentru rezultate perfecte',
        'Comunicare transparentă pe tot parcursul proiectului'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Inovație & Creativitate',
      description: 'Continuăm să inovăm și să adoptăm cele mai noi tehnologii din domeniul modificărilor auto.',
      features: [
        'Adoptarea tehnologiilor noi',
        'Soluții creative pentru proiecte complexe',
        'Cercetare și dezvoltare continuă',
        'Colaborare cu producători de materiale premium'
      ]
    },
    {
      icon: Shield,
      title: 'Siguranță & Fiabilitate',
      description: 'Siguranța și fiabilitatea sunt priorități absolute în toate proiectele noastre.',
      features: [
        'Respectarea standardelor de siguranță',
        'Testare riguroasă a tuturor modificărilor',
        'Instrucțiuni clare de întreținere',
        'Suport tehnic post-vânzare'
      ]
    },
    {
      icon: Users,
      title: 'Echipa & Colaborare',
      description: 'Echipa noastră este formată din specialiști pasionați care lucrează împreună pentru rezultate perfecte.',
      features: [
        'Echipă de specialiști cu expertiză diversă',
        'Colaborare strânsă între membrii echipei',
        'Formare continuă și dezvoltare profesională',
        'Comunicare eficientă și transparentă'
      ]
    },
    {
      icon: Target,
      title: 'Orientare Client',
      description: 'Clientul este în centrul atenției noastre. Ne străduim să depășim așteptările în fiecare proiect.',
      features: [
        'Consultanță personalizată pentru fiecare client',
        'Flexibilitate în programare și execuție',
        'Comunicare regulată despre progresul proiectului',
        'Suport complet după finalizarea proiectului'
      ]
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
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Valorile Noastre</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Ce ne{' '}
            <span className="text-gradient">definește</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Valorile noastre sunt fundamentul pe care construim fiecare proiect. 
            Ele ne ghidează în fiecare decizie și ne ajută să oferim servicii de cea mai înaltă calitate.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {value.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Angajamentul Nostru
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Ne angajăm să oferim servicii de cea mai înaltă calitate, să respectăm termenii 
              conveniți și să depășim așteptările clienților noștri în fiecare proiect. 
              Pasiunea noastră pentru perfecțiune este ceea ce ne diferențiază.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">100%</div>
                <div className="text-gray-300 text-sm">Satisfacție Garantată</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Suport Tehnic</div>
              </div>
              <div>
                <div className="text-2xl font-heading font-bold text-primary mb-2">5+</div>
                <div className="text-gray-300 text-sm">Ani Experiență</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutValues
