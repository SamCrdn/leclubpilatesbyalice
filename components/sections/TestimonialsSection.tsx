'use client'

import { useRef, useEffect } from 'react'

const GOOGLE_REVIEWS_URL = 'https://share.google/2FofxTrt8YdrjBKRw'

const testimonials = [
  {
    quote: 'Je suis devenue complètement addict\u00a0! Je mixe plusieurs cours courts selon mon humeur, et j\'adore pouvoir pratiquer à n\'importe quelle heure. En quelques semaines, j\'ai vu des résultats que je n\'aurais jamais espérés avec une salle classique.',
    name: 'Sarah',
    role: '26 ans · Membre',
    initials: 'S',
  },
  {
    quote: 'Je fais du Pilates depuis une dizaine d\'années, mais depuis que je suis les cours d\'Alice, c\'est devenu une véritable hygiène de vie. Alice a sauvé mon dos, qui a été ma bête noire pendant des années, et je me sens réellement plus forte et plus souple dans mon quotidien.',
    name: 'Noémie',
    role: '38 ans · Membre',
    initials: 'N',
  },
  {
    quote: 'Après avoir essayé des dizaines d\'applis fitness, Le Club Pilates est de loin la meilleure. Les cours sont variés, la progression est logique et Alice a une énergie communicative. Mon corps a changé de façon visible en 2 mois.',
    name: 'Marie',
    role: '41 ans · Membre',
    initials: 'M',
  },
  {
    quote: 'Je ne pensais pas aimer le Pilates, et pourtant\u00a0! L\'approche d\'Alice est tellement motivante que j\'ai accroché dès le premier cours. Mon dos et mes épaules vont beaucoup mieux, et je me sens vraiment plus à l\'aise dans mon corps.',
    name: 'Clara',
    role: '45 ans · Membre',
    initials: 'C',
  },
  {
    quote: 'Des cours en ligne au top\u00a0! Des séances variées et tellement efficaces : des cours toniques pour galber, affiner la silhouette et des séances plus douces pour s\'étirer, se relaxer. Le parfait équilibre\u00a0! Alice est une super prof, très pédagogue et bienveillante.',
    name: 'Fabienne',
    role: '51 ans · Membre',
    initials: 'F',
  },
  {
    quote: 'J\'ai découvert Le Club Pilates pendant ma grossesse grâce aux séances Mama. Après l\'accouchement, j\'ai pu reprendre doucement avec les cours post-natal. Six mois plus tard, mon corps est même mieux qu\'avant\u00a0! Alice prend vraiment soin de nous avec des cours adaptés à chaque étape.',
    name: 'Emilie',
    role: '31 ans · Membre',
    initials: 'E',
  },
  {
    quote: 'À 58 ans, je cherchais une pratique douce mais efficace. Les cours sont variés, très bien construits, et les résultats sont là. C\'est exactement ce qu\'il me fallait pour prendre soin de moi sans me mettre en danger.',
    name: 'Laurence',
    role: '58 ans · Membre',
    initials: 'L',
  },
  {
    quote: 'J\'adore les cours d\'Alice. Ils sont accessibles à tous les niveaux et toujours de grande qualité. En tant qu\'ostéopathe, j\'apprécie particulièrement sa précision et son écoute.',
    name: 'Lesley-Ann',
    role: '35 ans · Ostéopathe · Membre',
    initials: 'LA',
  },
  {
    quote: 'J\'ai pris l\'abonnement et je suis passée de zéro sport à un cours quotidien. Je ne peux plus m\'en passer\u00a0! Alice est douce, gentille et surtout donne des explications très claires. C\'est mon rendez-vous quotidien qui me donne la pêche.',
    name: 'Audrey',
    role: '34 ans · Membre',
    initials: 'A',
  },
  {
    quote: 'Je viens de télécharger l\'application mobile et j\'adore : je peux faire mes séances directement sur mon téléphone et n\'importe où\u00a0! Les explications sont claires et il y a toujours des rappels pour ajuster notre posture ou notre respiration.',
    name: 'Anaïs',
    role: '28 ans · Membre',
    initials: 'A',
  },
]


export default function TestimonialsSection() {
  const scrollRef   = useRef<HTMLDivElement>(null)
  const cardWidthRef = useRef<number>(360)

  useEffect(() => {
    const width = scrollRef.current?.querySelector('figure')?.offsetWidth
    if (width) cardWidthRef.current = width
  }, [])

  const scroll = (dir: 'prev' | 'next') => {
    const el = scrollRef.current
    if (!el) return
    const step = cardWidthRef.current + 32
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="testimonials-title" className="py-section bg-cocoa text-cream">
      <div className="section-wrapper">

        {/* Header */}
        <div className="text-center mb-14" data-animate>
          <p className="eyebrow text-cream/40 mb-4">Témoignages</p>
          <h2 id="testimonials-title" className="text-cream">
            Elles ont <em className="italic">transformé</em> leur pratique
          </h2>
        </div>

        {/* Cards — slider mobile / grid desktop */}
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col shrink-0 w-[85vw] md:w-[360px] snap-start"
              data-animate
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-3 h-3 text-sand" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 font-display text-lg font-light italic text-cream/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
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

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 my-6">
          <button
            onClick={() => scroll('prev')}
            aria-label="Témoignage précédent"
            className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => scroll('next')}
            aria-label="Témoignage suivant"
            className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 transition-colors flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center" data-animate>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-cream/60 border-cream/20 hover:border-cream/60 hover:text-cream"
          >
            ★ Voir tous nos avis Google
          </a>
        </div>

      </div>
    </section>
  )
}
