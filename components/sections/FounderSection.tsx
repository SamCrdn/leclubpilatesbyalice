'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FounderSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    // Relance la lecture si l'autoplay natif a échoué (ex : focus après navigation)
    if (v.paused) v.play().catch(() => {})
  }, [])

  return (
    <section aria-labelledby="founder-title" className="relative min-h-[85vh] flex items-end overflow-hidden bg-cocoa">

      {/* Vidéo pleine largeur */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/video-alice-voix-off.webm" type="video/webm" />
        <source src="/videos/video-alice-voix-off.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/40 to-transparent" aria-hidden="true" />

      {/* Contenu en overlay */}
      <div className="section-wrapper relative z-10 w-full pt-32 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-cream/60" data-animate>Les professeurs</p>

          <h2 id="founder-title" className="text-cream mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            Alice,{' '}
            <em className="italic">fondatrice passionnée</em>
          </h2>

          <p className="text-cream/70 font-light leading-relaxed mb-4" data-animate style={{ transitionDelay: '200ms' }}>
            L’objectif du studio digital est de proposer des cours de Pilates de qualité, simples et accessibles, afin de permettre à chacun, quel que soit son mode de vie, d’obtenir des résultats durables grâce à une routine à suivre depuis son salon. »
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-cream/15" data-animate style={{ transitionDelay: '400ms' }}>
            {[
              { value: '10+', label: "ans d'expérience" },
              { value: '+5', label: 'Profs' },
              { value: '+5', label: 'disciplines complémentaires' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-light text-cream mb-1">{value}</p>
                <p className="text-xs text-cream/50 font-light leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <div data-animate style={{ transitionDelay: '500ms' }}>
            <Link href="/about" className="inline-flex items-center gap-2 text-cream font-body font-light text-sm tracking-widest uppercase pb-0.5 border-b border-cream/40 hover:border-cream transition-all duration-300">
              Découvrir mon parcours
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
