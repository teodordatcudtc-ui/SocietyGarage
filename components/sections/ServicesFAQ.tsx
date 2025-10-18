'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const ServicesFAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Cât durează un proiect de tuning complet?',
      answer: 'Durata unui proiect de tuning variază în funcție de complexitatea modificărilor. Un tuning de bază (chip tuning) durează 1-2 zile, în timp ce un proiect complet cu modificări de caroserie poate dura 1-2 săptămâni. Îți oferim o estimare precisă după consultanța inițială.'
    },
    {
      question: 'Car wrap-ul afectează vopseaua originală?',
      answer: 'Nu, car wrap-ul protejează vopseaua originală. Folosim doar folii premium care nu afectează vopseaua subiacentă. De fapt, wrap-ul oferă protecție suplimentară împotriva zgârieturilor și a factorilor de mediu. Când decizi să îndepărtezi wrap-ul, vopseaua originală va fi intactă.'
    },
    {
      question: 'Ce diferență face Paint Protection Film (PPF)?',
      answer: 'PPF-ul oferă protecție maximă pentru vopseaua mașinii tale. Are proprietăți auto-healing, rezistă la zgârieturi, impacturi mici și protejează împotriva radiațiilor UV. Cu o durată de viață de până la 10 ani, PPF-ul este investiția perfectă pentru a păstra valoarea mașinii.'
    },
    {
      question: 'Cât de des trebuie să fac detailing?',
      answer: 'Pentru detailing exterior, recomandăm o curățare profesională la fiecare 3-4 luni. Pentru detailing interior, intervalul recomandat este de 2-3 luni. Cu ceramic coating, intervalul se poate extinde la 6-12 luni. Îți oferim un program personalizat de întreținere.'
    },
    {
      question: 'Oferiți garanție pentru serviciile voastre?',
      answer: 'Da, oferim garanție extinsă pentru toate serviciile noastre: 2 ani pentru tuning, 5 ani pentru car wrap, 10 ani pentru PPF, și 1 an pentru detailing. Garanția acoperă defectele de material și execuție, iar echipa noastră oferă suport tehnic gratuit pe durata garanției.'
    },
    {
      question: 'Pot să văd progresul proiectului în timp real?',
      answer: 'Absolut! Te ținem la curent cu progresul prin mesaje WhatsApp cu poze și update-uri regulate. De asemenea, poți vizita atelierul oricând pentru a vedea progresul live. Transparența și comunicarea sunt priorități pentru noi.'
    },
    {
      question: 'Ce materiale folosiți pentru serviciile voastre?',
      answer: 'Folosim doar materiale premium de la producători recunoscuți: 3M, Avery, Oracal pentru folii, Xpel și SunTek pentru PPF, și produse profesionale pentru detailing. Toate materialele vin cu certificări de calitate și garanții de producător.'
    },
    {
      question: 'Cum calculez costul unui proiect?',
      answer: 'Costul depinde de tipul de serviciu, complexitatea proiectului și materialele alese. Oferim consultanță gratuită și devis personalizat pentru fiecare proiect. Contactează-ne la 0720637273 sau completează formularul de pe site pentru o estimare precisă.'
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
            <Plus className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Întrebări Frecvente</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
          >
            Întrebări{' '}
            <span className="text-gradient">frecvente</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Găsește răspunsuri la cele mai frecvente întrebări despre serviciile noastre. 
            Dacă nu găsești răspunsul căutat, contactează-ne direct!
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-accent/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Ai alte întrebări?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Echipa noastră de specialiști este aici să îți răspundă la orice întrebare 
              despre serviciile noastre. Contactează-ne pentru o consultanță gratuită!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0720637273"
                className="btn-primary text-lg px-8 py-4"
              >
                Apelează: 0720637273
              </a>
              <a
                href="https://wa.me/40720637273?text=Bună! Am câteva întrebări despre serviciile voastre."
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

export default ServicesFAQ
