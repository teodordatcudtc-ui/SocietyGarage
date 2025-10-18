'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Star } from 'lucide-react'

const AboutHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Award, number: '500+', label: 'Proiecte Finalizate' },
    { icon: Users, number: '200+', label: 'Clienți Mulțumiți' },
    { icon: Clock, number: '5+', label: 'Ani Experiență' },
    { icon: Star, number: '5.0', label: 'Rating Mediu' }
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
    <section className="relative py-20 bg-gradient-to-b from-dark-bg to-dark-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Despre Noi</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Pasiunea pentru{' '}
            <span className="text-gradient">perfecțiune</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Society Garage este mai mult decât un atelier de tuning auto. Suntem o echipă de 
            pasionați care transformă mașinile în opere de artă, combinând tehnologia avansată 
            cu atenția la detalii și pasiunea pentru perfecțiune.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Misiunea Noastră
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Să oferim servicii de tuning auto de cea mai înaltă calitate, folosind doar 
              materiale premium și tehnologii avansate. Fiecare proiect este o oportunitate 
              de a demonstra pasiunea noastră pentru detalii și de a depăși așteptările clienților.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  )
}

export default AboutHero
