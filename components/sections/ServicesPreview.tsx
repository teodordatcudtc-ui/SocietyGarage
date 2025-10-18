'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Car, Palette, Shield, Droplets, Sparkles, Zap } from 'lucide-react'

const ServicesPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Car,
      title: 'Tuning Auto',
      description: 'Modificări performante și estetice pentru a-ți personaliza mașina după viziunea ta.',
      features: ['Chip Tuning', 'Suspensii', 'Aerodinamică', 'Interior Custom'],
      href: '/servicii#tuning',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Palette,
      title: 'Car Wrap',
      description: 'Schimbă complet aspectul mașinii tale cu folii premium de cea mai înaltă calitate.',
      features: ['Folii Premium', 'Design Custom', 'Protecție Paint', 'Garanție 5 ani'],
      href: '/servicii#car-wrap',
      color: 'from-purple-500/20 to-pink-600/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Paint Protection Film',
      description: 'Protejează vopseaua originală cu filme transparente de ultimă generație.',
      features: ['Protecție UV', 'Rezistență Impact', 'Auto-Healing', 'Garanție 10 ani'],
      href: '/servicii#ppf',
      color: 'from-green-500/20 to-emerald-600/20',
      iconColor: 'text-green-400'
    },
    {
      icon: Droplets,
      title: 'Detailing Exterior',
      description: 'Curățare și protecție profesională pentru a menține mașina în stare perfectă.',
      features: ['Lavare Premium', 'Polish', 'Ceramic Coating', 'Protecție Long-term'],
      href: '/servicii#detailing-exterior',
      color: 'from-cyan-500/20 to-blue-600/20',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Sparkles,
      title: 'Detailing Interior',
      description: 'Curățare profundă și protecție pentru interiorul mașinii tale.',
      features: ['Curățare Profundă', 'Protecție Scaune', 'Aer Condiționat', 'Detalii Premium'],
      href: '/servicii#detailing-interior',
      color: 'from-yellow-500/20 to-orange-600/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Zap,
      title: 'Ceramic Coating',
      description: 'Protecție ceramică de ultimă generație pentru o strălucire durabilă.',
      features: ['Protecție 2-5 ani', 'Strălucire Intensă', 'Ușor de Întreținut', 'Rezistență Chimică'],
      href: '/servicii#ceramic-coating',
      color: 'from-red-500/20 to-pink-600/20',
      iconColor: 'text-red-400'
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
            <Car className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Serviciile Noastre</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Servicii premium pentru{' '}
            <span className="text-gradient">mașina ta</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            De la tuning performant la detailing de lux, oferim o gamă completă de servicii 
            pentru a-ți transforma mașina în ceva cu adevărat special.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link href={service.href}>
                <div className="relative bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <service.icon className={`w-8 h-8 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span>Află mai multe</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Nu știi ce serviciu îți trebuie?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru o consultare gratuită. Te ajutăm să alegi serviciile 
              perfecte pentru mașina ta și bugetul tău.
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Consultanță gratuită</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
