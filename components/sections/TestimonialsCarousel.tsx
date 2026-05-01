'use client'

import { useRef, useEffect } from 'react'

const GOOGLE_REVIEWS_URL = 'https://share.google/2FofxTrt8YdrjBKRw'

export type Testimonial = {
  _id?: string
  quote: string
  name: string
  role: string
  initials: string
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef    = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(360)

  useEffect(() => {
    const width = scrollRef.current?.querySelector('figure')?.offsetWidth
    if (width) cardWidthRef.current = width
  }, [])

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'next' ? cardWidthRef.current + 32 : -(cardWidthRef.current + 32), behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="testimonials-title" className="py-section bg-cocoa text-cream">
      <div className="section-wrapper">

        <div className="text-center mb-14" data-animate>
          <p className="eyebrow text-cream/40 mb-4">Témoignages</p>
          <h2 id="testimonials-title" className="text-cream">
            Les membres <em className="italic">en parlent</em>
          </h2>
        </div>

        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {testimonials.map((t, i) => (
            <figure
              key={t._id ?? t.name}
              className="flex flex-col shrink-0 w-[85vw] md:w-[360px] snap-start"
              data-animate
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-5" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-3 h-3 text-sand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg font-light italic text-cream/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sand/30 flex items-center justify-center">
                  <span className="text-xs font-light text-cream/70">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-light text-cream">{t.name}</p>
                  <p className="text-xs text-cream/40 font-light">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex justify-center gap-4 my-6">
          <button onClick={() => scroll('prev')} aria-label="Précédent" className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => scroll('next')} aria-label="Suivant" className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="text-center" data-animate>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost text-cream/60 border-cream/20 hover:border-cream/60 hover:text-cream">
            ★ Voir tous nos avis Google
          </a>
        </div>

      </div>
    </section>
  )
}
