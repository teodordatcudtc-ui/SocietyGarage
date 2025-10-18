'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, Heart, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react'

const GalleryFilter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('toate')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filters = [
    { id: 'toate', label: 'Toate', count: 8 },
    { id: 'tuning', label: 'Tuning', count: 2 },
    { id: 'car-wrap', label: 'Car Wrap', count: 2 },
    { id: 'ppf', label: 'PPF', count: 1 },
    { id: 'detailing', label: 'Detailing', count: 2 },
    { id: 'ceramic', label: 'Ceramic', count: 1 }
  ]

  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/tuning-1.jpg',
      title: 'BMW M3 Competition',
      category: 'tuning',
      tags: ['chip tuning', 'suspensii', 'aerodinamica'],
      likes: 24,
      views: 156
    },
    {
      id: 2,
      image: '/images/gallery/car-wrap-1.jpg',
      title: 'Mercedes GLE',
      category: 'car-wrap',
      tags: ['matte black', 'gold details', 'premium'],
      likes: 32,
      views: 203
    },
    {
      id: 3,
      image: '/images/gallery/ppf-1.jpg',
      title: 'Bentley Continental',
      category: 'ppf',
      tags: ['paint protection', 'transparent', 'premium'],
      likes: 18,
      views: 98
    },
    {
      id: 4,
      image: '/images/gallery/car-wrap-1.jpg',
      title: 'Mercedes E-Class',
      category: 'car-wrap',
      tags: ['custom design', 'premium', 'exterior'],
      likes: 28,
      views: 167
    },
    {
      id: 5,
      image: '/images/gallery/tuning-2.jpg',
      title: 'VW Golf R',
      category: 'tuning',
      tags: ['stage 2', 'exhaust', 'wheels'],
      likes: 21,
      views: 134
    },
    {
      id: 6,
      image: '/images/gallery/car-wrap-2.jpg',
      title: 'BMW F30',
      category: 'car-wrap',
      tags: ['bmw', 'custom design', 'premium'],
      likes: 35,
      views: 189
    },
    {
      id: 7,
      image: '/images/gallery/ceramic-1.jpg',
      title: 'Mercedes G-63 AMG',
      category: 'ceramic',
      tags: ['ceramic coating', 'premium', 'protection'],
      likes: 29,
      views: 145
    },
    {
      id: 8,
      image: '/images/gallery/detailing-2.jpg',
      title: 'McLaren Artura',
      category: 'detailing',
      tags: ['detailing', 'premium', 'interior'],
      likes: 26,
      views: 112
    }
  ]

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'toate' || item.category === activeFilter
  )

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
        >
          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-dark-bg'
                    : 'bg-dark-accent/50 text-gray-300 hover:bg-dark-accent hover:text-white'
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-70">({filter.count})</span>
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-dark-accent/50 border border-gray-700/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <button className="btn-secondary text-lg px-8 py-4">
              Încarcă mai multe
            </button>
          </motion.div>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Navigation buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{filteredItems[selectedImage].likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{filteredItems[selectedImage].views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryFilter
