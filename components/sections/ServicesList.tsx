'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Car, Palette, Shield, Droplets, Sparkles, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      id: 'tuning',
      icon: Car,
      title: 'Tuning Auto',
      description: 'Modificări performante și estetice pentru a-ți personaliza mașina după viziunea ta. De la chip tuning la modificări complete de caroserie.',
      features: [
        'Chip Tuning Stage 1, 2, 3',
        'Suspensii Coilover & Air Ride',
        'Aerodinamică Custom',
        'Interior Personalizat',
        'Sistem Audio Premium',
        'Iluminat LED Custom'
      ],
      benefits: [
        'Performanță îmbunătățită',
        'Aspect unic personalizat',
        'Garanție pentru modificări',
        'Consultanță tehnică gratuită'
      ],
      price: 'De la 500 RON',
      duration: '1-7 zile',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      id: 'car-wrap',
      icon: Palette,
      title: 'Car Wrap',
      description: 'Schimbă complet aspectul mașinii tale cu folii premium de cea mai înaltă calitate. Design custom sau modele predefinite.',
      features: [
        'Folii Premium 3M, Avery, Oracal',
        'Design Custom & Predefinit',
        'Protecție Paint Original',
        'Instalare Profesională',
        'Garanție 5 ani',
        'Servicii Post-Instalare'
      ],
      benefits: [
        'Protecție vopsea originală',
        'Aspect complet nou',
        'Reversibilitate 100%',
        'Valorificare la revânzare'
      ],
      price: 'De la 2000 RON',
      duration: '3-5 zile',
      color: 'from-purple-500/20 to-pink-600/20',
      iconColor: 'text-purple-400'
    },
    {
      id: 'ppf',
      icon: Shield,
      title: 'Paint Protection Film',
      description: 'Protejează vopseaua originală cu filme transparente de ultimă generație. Auto-healing și protecție UV maximă.',
      features: [
        'PPF Premium Xpel, 3M, SunTek',
        'Auto-Healing Technology',
        'Protecție UV 99%',
        'Instalare Fără Cusături',
        'Garanție 10 ani',
        'Instrucțiuni Întreținere'
      ],
      benefits: [
        'Protecție maximă vopsea',
        'Auto-reparare zgârieturi',
        'Strălucire naturală',
        'Valoare păstrată'
      ],
      price: 'De la 1500 RON',
      duration: '2-3 zile',
      color: 'from-green-500/20 to-emerald-600/20',
      iconColor: 'text-green-400'
    },
    {
      id: 'detailing-exterior',
      icon: Droplets,
      title: 'Detailing Exterior',
      description: 'Curățare și protecție profesională pentru a menține mașina în stare perfectă. Produse premium și tehnici avansate.',
      features: [
        'Lavare Premium 2-Step',
        'Polish & Compound',
        'Ceramic Coating',
        'Protecție Scaune',
        'Detalii Premium',
        'Inspecție Finală'
      ],
      benefits: [
        'Strălucire intensă',
        'Protecție durabilă',
        'Ușor de întreținut',
        'Aspect showroom'
      ],
      price: 'De la 300 RON',
      duration: '4-8 ore',
      color: 'from-cyan-500/20 to-blue-600/20',
      iconColor: 'text-cyan-400'
    },
    {
      id: 'detailing-interior',
      icon: Sparkles,
      title: 'Detailing Interior',
      description: 'Curățare profundă și protecție pentru interiorul mașinii tale. De la scaune la sistemul de aer condiționat.',
      features: [
        'Curățare Profundă Scaune',
        'Protecție Piele & Textil',
        'Curățare Aer Condiționat',
        'Detalii Premium',
        'Dezinfecție & Deodorizare',
        'Protecție Dashboard'
      ],
      benefits: [
        'Interior ca nou',
        'Protecție durabilă',
        'Hygienă maximă',
        'Comfort îmbunătățit'
      ],
      price: 'De la 200 RON',
      duration: '3-6 ore',
      color: 'from-yellow-500/20 to-orange-600/20',
      iconColor: 'text-yellow-400'
    },
    {
      id: 'ceramic-coating',
      icon: Zap,
      title: 'Ceramic Coating',
      description: 'Protecție ceramică de ultimă generație pentru o strălucire durabilă și protecție maximă.',
      features: [
        'Ceramic Coating 2-5 ani',
        'Strălucire Intensă',
        'Rezistență Chimică',
        'Ușor de Întreținut',
        'Protecție UV',
        'Garanție Extinsă'
      ],
      benefits: [
        'Protecție 2-5 ani',
        'Strălucire showroom',
        'Rezistență înaltă',
        'Întreținere minimă'
      ],
      price: 'De la 800 RON',
      duration: '1-2 zile',
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
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold text-white">
                      {service.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{service.price}</span>
                      <span>•</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-semibold mb-4">Ce include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-4">Beneficii:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Solicită ofertă</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative overflow-hidden rounded-2xl bg-dark-accent/50 border border-gray-700/50">
                  <img
                    src={`/images/services/${service.id}-1.jpg`}
                    alt={service.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList
