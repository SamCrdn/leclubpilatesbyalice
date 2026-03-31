import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Pilates — Conseils & bien-être par nos expertes',
  description: 'Découvrez nos articles sur le Pilates, le bien-être, la nutrition et la santé féminine. Conseils d\'expertes, guides pratiques et inspiration.',
  alternates: { canonical: '/blog' },
}

const categories = ['Tous', 'Pilates', 'Nutrition', 'Bien-être', 'Conseils', 'Témoignages']

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-cream">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Blog</p>
          <h1 className="max-w-xl" data-animate style={{ transitionDelay: '100ms' }}>
            Conseils, <em className="italic">inspiration</em> & bien-être
          </h1>
        </div>
      </div>

      {/* Category filter */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-sand/30">
        <div className="section-wrapper">
          <div className="flex gap-6 overflow-x-auto scrollbar-none py-4">
            {categories.map(c => (
              <button key={c}
                className="text-xs tracking-[0.15em] uppercase whitespace-nowrap font-light text-cocoa/50 hover:text-cocoa transition-colors pb-0.5 border-b border-transparent hover:border-cocoa first:text-cocoa first:border-cocoa">
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* À venir */}
      <div className="py-section bg-chalk">
        <div className="section-wrapper flex flex-col items-center justify-center text-center py-20" data-animate>
          <p className="font-display text-4xl font-light italic text-cocoa/30 mb-4">Bientôt disponible</p>
          <p className="text-sm font-light text-cocoa/40">Les articles arrivent très prochainement.</p>
        </div>
      </div>
    </>
  )
}
