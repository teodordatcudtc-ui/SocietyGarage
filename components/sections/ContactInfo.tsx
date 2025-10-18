'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, Instagram, Car, Wrench, Shield } from 'lucide-react'

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const infoSections = [
    {
      icon: MapPin,
      title: 'Locația Noastră',
      content: {
        address: 'Strada Petru Vodă 23, București 052034',
        description: 'Atelierul nostru se află în centrul Bucureștiului, cu acces ușor cu mașina și transportul public.',
        features: [
          'Parcare gratuită pentru clienți',
          'Acces ușor cu transportul public',
          'Locație centrală în București',
          'Atelier modern și spațios'
        ]
      },
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Clock,
      title: 'Program de Lucru',
      content: {
        schedule: 'Luni - Duminică: 09:00 - 18:00',
        description: 'Suntem disponibili 7 zile din 7 pentru a te ajuta cu proiectul tău.',
        features: [
          'Program extins 7 zile/săptămână',
          'Programare flexibilă',
          'Urgențe în weekend',
          'Consultanță la cerere'
        ]
      },
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Phone,
      title: 'Contact Direct',
      content: {
        phone: '0720637273',
        email: 'contact@societygarage.ro',
        description: 'Contactează-ne direct pentru consultanță rapidă sau programare.',
        features: [
          'Răspuns în maxim 2 ore',
          'Consultanță telefonică gratuită',
          'WhatsApp pentru poze și mesaje',
          'Suport tehnic 24/7'
        ]
      },
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400'
    }
  ]

  const services = [
    { icon: Car, name: 'Tuning Auto', description: 'Modificări performante și estetice' },
    { icon: Wrench, name: 'Car Wrap', description: 'Schimbă aspectul mașinii tale' },
    { icon: Shield, name: 'PPF & Detailing', description: 'Protecție și curățare profesională' }
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
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Informații Contact</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6"
          >
            Găsește-ne{' '}
            <span className="text-gradient">aici</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Suntem aici să te ajutăm cu proiectul tău. Contactează-ne prin orice metodă 
            preferi și te vom ajuta să transformi mașina ta într-o capodoperă.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {infoSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="group"
            >
              <div className={`bg-gradient-to-br ${section.color} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                  <section.icon className={`w-8 h-8 ${section.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {section.title}
                </h3>

                <div className="mb-6">
                  <div className="text-primary font-medium text-lg mb-2">
                    {section.content.address || section.content.schedule || section.content.phone}
                  </div>
                  {section.content.email && (
                    <div className="text-primary font-medium text-lg mb-2">
                      {section.content.email}
                    </div>
                  )}
                  <p className="text-gray-300 leading-relaxed">
                    {section.content.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {section.content.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Preview */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-8">
            Serviciile noastre principale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-dark-accent/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-white mb-2">
                  {service.name}
                </h4>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
