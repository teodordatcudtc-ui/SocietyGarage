'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Phone, MessageCircle } from 'lucide-react'

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Tuning Auto',
    'Car Wrap',
    'Paint Protection Film',
    'Detailing Exterior',
    'Detailing Interior',
    'Ceramic Coating',
    'Consultanță Generală'
  ]

  const budgetRanges = [
    'Sub 1000 RON',
    '1000 - 3000 RON',
    '3000 - 5000 RON',
    '5000 - 10000 RON',
    'Peste 10000 RON',
    'Nu știu încă'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        budget: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact-form" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Trimite-ne un{' '}
              <span className="text-gradient">mesaj</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Completează formularul de mai jos și te vom contacta în cel mai scurt timp 
              pentru a discuta despre proiectul tău.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Introdu numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="0720 123 456"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Serviciu dorit
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">Selectează un serviciu</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                    Buget estimat
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Selectează bugetul</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Descrie proiectul tău sau întrebările pe care le ai..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Trimite mesajul</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mesajul a fost trimis cu succes! Te vom contacta în curând.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                    <AlertCircle className="w-5 h-5" />
                    <span>A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Contactează-ne direct
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:0720637273"
                    className="flex items-center space-x-3 p-4 bg-dark-accent/50 rounded-lg hover:bg-dark-accent transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-white font-medium">0720637273</div>
                      <div className="text-gray-400 text-sm">Apelează acum</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/40720637273?text=Bună! Am nevoie de informații despre serviciile voastre."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-dark-accent/50 rounded-lg hover:bg-dark-accent transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-medium">WhatsApp</div>
                      <div className="text-gray-400 text-sm">Mesaje rapide</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">
                  Informații utile
                </h4>
                <div className="space-y-3 text-sm text-gray-300">
                  <div>
                    <strong className="text-white">Răspuns rapid:</strong> Răspundem în maxim 2 ore
                  </div>
                  <div>
                    <strong className="text-white">Consultanță gratuită:</strong> Prima consultanță este gratuită
                  </div>
                  <div>
                    <strong className="text-white">Devis personalizat:</strong> Oferim devis detaliate pentru fiecare proiect
                  </div>
                  <div>
                    <strong className="text-white">Garanție:</strong> Toate serviciile vin cu garanție extinsă
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
