'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const ContactMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Locația Noastră</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6"
          >
            Găsește-ne pe{' '}
            <span className="text-gradient">hartă</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Atelierul nostru se află în centrul Bucureștiului, pe Strada Petru Vodă 23. 
            Cu acces ușor cu mașina și transportul public, suntem ușor de găsit.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl bg-dark-accent/50 border border-gray-700/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.569301594773!2d26.063719!3d44.400962299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ffc59745be3b%3A0xca056b59d5b9046b!2sSociety%20Garage!5e0!3m2!1sen!2sro!4v1760775708156!5m2!1sen!2sro"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-full"
              />
              <div className="absolute top-4 left-4 bg-primary text-dark-bg px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Society Garage</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                Informații de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Adresă</div>
                    <div className="text-gray-300 text-sm">
                      Strada Petru Vodă 23<br />
                      București 052034
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Telefon</div>
                    <a
                      href="tel:0720637273"
                      className="text-primary hover:text-primary-light transition-colors duration-200"
                    >
                      0720637273
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Program</div>
                    <div className="text-gray-300 text-sm">
                      Luni - Duminică: 09:00 - 18:00
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
              <h4 className="text-lg font-heading font-semibold text-white mb-4">
                Cum să ajungi
              </h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Cu mașina: Parcare gratuită disponibilă</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Metrou: Stația Piața Victoriei (10 min)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Autobuz: Linia 133, 168 (5 min)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Navigation className="w-4 h-4 text-primary" />
                  <span>Taxi/Uber: Locație ușor de găsit</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-accent/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h4 className="text-lg font-heading font-semibold text-white mb-4">
                Ce să aștepți
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• Consultanță gratuită și devis personalizat</div>
                <div>• Atelier modern cu echipamente profesionale</div>
                <div>• Echipă expertă și prietenoasă</div>
                <div>• Progresul proiectului comunicat regulat</div>
                <div>• Garanție extinsă pentru toate serviciile</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Gata să începi proiectul?
            </h3>
            <p className="text-gray-300 mb-6">
              Programează o vizită la atelierul nostru sau contactează-ne pentru o consultanță gratuită.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0720637273"
                className="btn-primary text-lg px-8 py-4"
              >
                Apelează acum
              </a>
              <a
                href="https://wa.me/40720637273?text=Bună! Vreau să programez o vizită la atelierul vostru."
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

export default ContactMap
