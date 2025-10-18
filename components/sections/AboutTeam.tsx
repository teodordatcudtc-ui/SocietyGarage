'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Wrench, Palette, Shield, Droplets, Sparkles, Zap, Linkedin, Instagram } from 'lucide-react'

const AboutTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: 'Alexandru Popescu',
      role: 'Fondator & Șef Atelier',
      specialization: 'Tuning & Modificări',
      experience: '8+ ani',
      description: 'Pasiunea pentru tuning a început în adolescență. Cu peste 8 ani de experiență, Alex a finalizat sute de proiecte complexe.',
      image: '/team/alexandru-popescu.jpg',
      icon: Wrench,
      social: {
        linkedin: 'https://linkedin.com/in/alexandru-popescu',
        instagram: 'https://instagram.com/alex_tuning'
      }
    },
    {
      name: 'Maria Ionescu',
      role: 'Specialist Car Wrap',
      specialization: 'Design & Instalare',
      experience: '6+ ani',
      description: 'Maria este specialistul nostru în car wrap și design. Fiecare proiect este o operă de artă în mâinile ei.',
      image: '/team/maria-ionescu.jpg',
      icon: Palette,
      social: {
        linkedin: 'https://linkedin.com/in/maria-ionescu',
        instagram: 'https://instagram.com/maria_wrap'
      }
    },
    {
      name: 'Cristian Radu',
      role: 'Specialist PPF & Detailing',
      specialization: 'Paint Protection',
      experience: '5+ ani',
      description: 'Cristian este expertul nostru în paint protection film și detailing. Atenția la detalii este excepțională.',
      image: '/team/cristian-radu.jpg',
      icon: Shield,
      social: {
        linkedin: 'https://linkedin.com/in/cristian-radu',
        instagram: 'https://instagram.com/cristian_detailing'
      }
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
            <span className="text-primary text-sm font-medium">Echipa Noastră</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Cunoaste{' '}
            <span className="text-gradient">echipa</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Echipa noastră este formată din specialiști pasionați, fiecare cu expertiza sa unică. 
            Împreună, transformăm fiecare proiect într-o capodoperă de calitate superioară.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <member.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-1">
                    {member.role}
                  </div>
                  <div className="text-gray-400 text-sm mb-3">
                    {member.specialization} • {member.experience}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-dark-bg transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '6', label: 'Specialiști' },
            { number: '35+', label: 'Ani Experiență Totală' },
            { number: '500+', label: 'Proiecte Finalizate' },
            { number: '100%', label: 'Satisfacție Client' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTeam
