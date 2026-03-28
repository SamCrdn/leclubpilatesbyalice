import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { SignupCTA } from '@/components/ui/CTAButton'
import FAQSection from '@/components/sections/FAQSection'
import CTABanner  from '@/components/sections/CTABanner'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Tarifs & Abonnements Pilates en ligne',
  description:
    'Abonnement Pilates en ligne dès 29€/mois. 500+ cours, programmes structurés, application mobile iOS & Android. 7 jours d\'essai gratuit sans carte bancaire. Résiliation à tout moment.',
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

const plans = [
  {
    id: 'mensuel', name: 'Mensuel', price: '29', period: '/mois',
    perMonth: null,
    highlight: false, badge: null,
    cta: 'Démarrer 7 jours gratuits',
    image: '/images/plan-mensuel.jpg',
    description: 'Accès complet au studio en ligne, résiliable à tout moment. Parfait pour démarrer à son rythme.',
  },
  {
    id: 'trimestriel', name: 'Trimestriel', price: '75', period: '/3 mois',
    perMonth: 'soit 25€/mois',
    highlight: true, badge: 'Le plus populaire',
    cta: 'Choisir ce plan',
    image: '/images/plan-trimestriel.jpg',
    description: 'L\'abonnement préféré de nos membres. Programmes structurés et cours en direct inclus.',
  },
  {
    id: 'annuel', name: 'Annuel', price: '249', period: '/an',
    perMonth: 'soit 20,75€/mois',
    highlight: false, badge: 'Meilleure valeur',
    cta: 'Choisir ce plan',
    image: '/images/plan-annuel.jpg',
    description: 'Le meilleur tarif du Club. Tous les avantages inclus, pour une transformation durable.',
  },
]

type FeatureKey = 'cours' | 'programmes' | 'app' | 'lives' | 'nutrition' | 'support'

const features: { label: string; key: FeatureKey }[] = [
  { label: '500+ cours de Pilates en accès illimité', key: 'cours'       },
  { label: 'Programmes guidés (4 à 8 semaines)',      key: 'programmes'  },
  { label: 'Application mobile iOS & Android',        key: 'app'         },
  { label: '2 cours en direct (live) par mois',       key: 'lives'       },
  { label: 'Guide nutrition & bien-être offert',      key: 'nutrition'   },
  { label: 'Support & suivi prioritaire',             key: 'support'     },
]

const planFeatures: Record<string, Record<FeatureKey, boolean>> = {
  mensuel:      { cours: true,  programmes: false, app: true,  lives: false, nutrition: false, support: false },
  trimestriel:  { cours: true,  programmes: true,  app: true,  lives: true,  nutrition: false, support: false },
  annuel:       { cours: true,  programmes: true,  app: true,  lives: true,  nutrition: true,  support: true  },
}

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Abonnements', href: '/pricing' }]} />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-cream text-center">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Tarifs & Abonnements</p>
          <h1 className="mb-5" data-animate style={{ transitionDelay: '100ms' }}>
            500 cours de Pilates,{' '}
            <em className="italic">un seul abonnement</em>
          </h1>
          <p className="text-cocoa/60 font-light max-w-lg mx-auto mb-6" data-animate style={{ transitionDelay: '200ms' }}>
            Moins cher qu'une séance en studio. Accès illimité à tout le contenu, sur web et mobile,
            à partir de 29€/mois.
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-mink font-light" data-animate style={{ transitionDelay: '300ms' }}>
            7 jours gratuits · Sans carte bancaire · Résiliation à tout moment
          </p>
        </div>
      </div>

      {/* Plan cards */}
      <section aria-label="Nos abonnements Pilates en ligne" className="py-section bg-chalk">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-sm overflow-hidden transition-shadow ${
                  plan.highlight
                    ? 'ring-2 ring-cocoa shadow-xl'
                    : 'border border-sand/30 hover:shadow-md'
                }`}
                data-animate
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div
                  className="aspect-[4/3] bg-sand/30"
                  style={{ backgroundImage: `url(${plan.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  role="img"
                  aria-label={`Abonnement ${plan.name}`}
                />

                <div className="flex flex-col flex-1 p-6 bg-white">
                  {plan.badge && (
                    <span className="self-start mb-3 bg-sand/30 text-cocoa text-2xs tracking-[0.15em] uppercase px-3 py-1 rounded-pill font-light">
                      {plan.badge}
                    </span>
                  )}

                  <p className="eyebrow mb-2">{plan.name}</p>

                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span className="font-display text-4xl font-light">{plan.price}€</span>
                    <span className="text-sm text-mink font-light">{plan.period}</span>
                  </div>

                  {plan.perMonth && (
                    <p className="text-xs text-sand-dark font-light mb-3">{plan.perMonth}</p>
                  )}

                  <p className="text-xs text-cocoa/50 font-light mb-6 leading-relaxed">{plan.description}</p>

                  <div className="mt-auto">
                    <a
                      href={`${APP_URL}/join`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={plan.highlight ? 'btn-primary w-full text-center text-xs' : 'btn-secondary w-full text-center text-xs'}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <p className="text-center text-xs text-mink font-light mt-8 tracking-wide" data-animate>
            ★ 5/5 sur Google · +1&nbsp;000 membres actives · Paiement 100% sécurisé
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section aria-label="Comparaison des abonnements Pilates" className="py-section bg-cream">
        <div className="section-wrapper">
          <div className="text-center mb-12" data-animate>
            <h2>Tout ce qui est <em className="italic">inclus</em></h2>
            <p className="mt-4 text-cocoa/60 font-light max-w-md mx-auto">
              Quel que soit votre abonnement, vous accédez immédiatement à l'ensemble du studio en ligne.
            </p>
          </div>

          <div className="overflow-x-auto" data-animate style={{ transitionDelay: '100ms' }}>
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-sand/30">
                  <th className="text-left pb-4 font-light text-mink text-xs tracking-widest uppercase w-2/5">Fonctionnalité</th>
                  {plans.map(p => (
                    <th key={p.id} className={`pb-4 text-center font-display font-light text-lg ${p.highlight ? 'text-cocoa' : 'text-cocoa/60'}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/20">
                {features.map(f => (
                  <tr key={f.key}>
                    <td className="py-4 font-light text-cocoa/70">{f.label}</td>
                    {plans.map(p => (
                      <td key={p.id} className="py-4 text-center">
                        {planFeatures[p.id][f.key]
                          ? <Check size={16} className="inline text-sand-dark" aria-label="Inclus" />
                          : <X size={16} className="inline text-sand/40" aria-label="Non inclus" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  )
}
