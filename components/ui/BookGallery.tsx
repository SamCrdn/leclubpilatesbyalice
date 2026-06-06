'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const slides = [
  {
    src: '/images/livre/couverture-mon-cahier-pilates-au-mur.jpg',
    alt: 'Couverture du livre Mon cahier Pilates au mur, Alice Parquet, éditions Solar',
  },
  {
    src: '/images/livre/quatrieme-couverture-mon-cahier-pilates-au-mur.jpg',
    alt: 'Quatrième de couverture du livre Mon cahier Pilates au mur',
  },
  {
    src: '/images/livre/interieur-pilates-au-mur-benefices.jpg',
    alt: 'Page intérieure : les bénéfices du Pilates au mur',
  },
  {
    src: '/images/livre/interieur-pilates-au-mur-exercices.jpg',
    alt: 'Page intérieure : exercices de Pilates au mur',
  },
  {
    src: '/images/livre/interieur-pilates-au-mur-programme-30-jours.jpg',
    alt: 'Page intérieure : programme sculpt et détox sur 30 jours',
  },
]

export default function BookGallery() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const touchStartX = useRef<number | null>(null)

  function go(next: number) {
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }

  function prev() { go(index === 0 ? slides.length - 1 : index - 1) }
  function next() { go(index === slides.length - 1 ? 0 : index + 1) }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) {
      delta > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <section className="py-section bg-sand/20">
      <div className="section-wrapper">
        <p className="eyebrow mb-12 text-center" data-animate>Aperçu du livre</p>

        <div className="relative max-w-sm mx-auto">

          {/* Slider */}
          <div
            className="relative aspect-[3/4] rounded-sm overflow-hidden select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[index].src}
                  alt={slides[index].alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 640px) 384px, 90vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows — inside the image, visible on all screen sizes */}
            <button
              onClick={prev}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-cream/70 backdrop-blur-sm text-cocoa rounded-full hover:bg-cream transition-colors z-10"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-cream/70 backdrop-blur-sm text-cocoa rounded-full hover:bg-cream transition-colors z-10"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Aller à l'image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-cocoa w-4' : 'bg-cocoa/20 w-1.5'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
