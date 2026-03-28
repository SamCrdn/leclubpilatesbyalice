import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import CTABanner from '@/components/sections/CTABanner'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'
import { safeBgUrl } from '@/lib/safeBgUrl'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: '+350 cours de Pilates en ligne — Tous niveaux',
  description:
    'Explorez +350 cours de Pilates en ligne : débutant, renforcement musculaire, stretching, Mama, Reformer. Guidés par Alice et ses instructrices certifiées. Essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/classes` },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

const categories = [
  { id: 'all',          label: 'Tous les cours' },
  { id: 'debutant',     label: 'Débutant'       },
  { id: 'renforcement', label: 'Renforcement'   },
  { id: 'souplesse',    label: 'Souplesse'      },
  { id: 'prenatal',     label: 'Prénatal'       },
  { id: 'programmes',   label: 'Programmes'     },
]

const courses = [
  { slug: 'fondamentaux',        cat: 'debutant',     title: 'Fondamentaux du Pilates',   duration: '30 min', level: 'Débutant',      image: '/images/class-1.jpg' },
  { slug: 'core-stabilite',      cat: 'renforcement', title: 'Core & Stabilité',          duration: '45 min', level: 'Intermédiaire', image: '/images/class-2.jpg' },
  { slug: 'etirements-mobilite', cat: 'souplesse',    title: 'Étirements & Mobilité',     duration: '40 min', level: 'Tous niveaux',  image: '/images/class-3.jpg' },
  { slug: 'barre-sol',           cat: 'renforcement', title: 'Barre au Sol',              duration: '50 min', level: 'Intermédiaire', image: '/images/class-4.jpg' },
  { slug: 'pilates-prenatal',    cat: 'prenatal',     title: 'Pilates Prénatal',          duration: '35 min', level: 'Tous niveaux',  image: '/images/class-5.jpg' },
  { slug: 'full-body-flow',      cat: 'renforcement', title: 'Full Body Flow',            duration: '55 min', level: 'Avancé',        image: '/images/class-6.jpg' },
]

export default function ClassesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Cours', href: '/classes' }]} />
      {/* Hero */}
      <div className="pt-32 pb-16 bg-cream">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Studio en ligne</p>
          <h1 className="max-w-xl mb-5" data-animate style={{ transitionDelay: '100ms' }}>
            Des cours pour <em className="italic">chaque vous</em>
          </h1>
          <p className="text-cocoa/60 font-light max-w-md" data-animate style={{ transitionDelay: '200ms' }}>
            200+ cours disponibles, nouvelles séances chaque semaine. Tous les niveaux, toutes les envies.
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-sand/30">
        <div className="section-wrapper">
          <div className="flex gap-6 overflow-x-auto scrollbar-none py-4" role="tablist" aria-label="Filtrer par catégorie">
            {categories.map(c => (
              <button
                key={c.id}
                role="tab"
                className="text-xs tracking-[0.15em] uppercase whitespace-nowrap font-light text-cocoa/50 hover:text-cocoa transition-colors pb-0.5 border-b border-transparent hover:border-cocoa data-[active]:text-cocoa data-[active]:border-cocoa"
                data-active={c.id === 'all' ? '' : undefined}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section aria-label="Liste des cours" className="py-section bg-chalk">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <a
                key={c.slug}
                href={`${APP_URL}/classes/${c.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-animate
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/3] bg-sand/30 overflow-hidden mb-4 rounded-sm">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                    style={{ backgroundImage: safeBgUrl(c.image) }}
                    role="img"
                    aria-label={c.title}
                  />
                </div>
                <p className="eyebrow mb-1.5">{c.cat}</p>
                <h3 className="font-display text-xl font-light mb-2 group-hover:opacity-70 transition-opacity">{c.title}</h3>
                <div className="flex items-center gap-3 text-xs text-mink font-light">
                  <span>{c.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-sand" />
                  <span>{c.level}</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Load more nudge */}
          <div className="text-center mt-16" data-animate>
            <p className="text-sm text-cocoa/50 font-light mb-4">
              Accédez à tous les cours avec un abonnement
            </p>
            <a
              href={`${APP_URL}/join`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Commencer l'essai gratuit
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
