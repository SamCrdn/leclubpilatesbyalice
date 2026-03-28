import Link from 'next/link'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { SignupCTA } from '@/components/ui/CTAButton'

const plans = [
  {
    id:       'mensuel',
    name:     'Mensuel',
    price:    '29',
    period:   'mois',
    highlight: false,
    image:    '/images/plan-mensuel.jpg',
    features: ['7 jours d\'essai offerts', 'Accès illimité à +500 cours', 'Sur web, mobile et TV', 'Annulation à tout moment'],
  },
  {
    id:       'trimestriel',
    name:     'Trimestriel',
    price:    '75',
    period:   '3 mois',
    highlight: true,
    badge:    "15% d'économie",
    image:    '/images/plan-trimestriel.jpg',
    features: ['7 jours d\'essai offerts', 'Accès illimité à +500 cours', 'Idéal pour s\'installer dans une routine', 'Annulation à tout moment'],
  },
  {
    id:       'annuel',
    name:     'Annuel',
    price:    '249',
    period:   'an',
    highlight: false,
    badge:    "30% d'économie",
    image:    '/images/class-3.jpg',
    features: ['7 jours d\'essai offerts', 'Accès illimité à +500 cours', 'Le tarif le plus avantageux', 'Annulation à tout moment'],
  },
]

export default function PricingPreview() {
  return (
    <section aria-labelledby="pricing-title" className="pb-section pt-[clamp(7rem,14vw,12rem)] bg-cream">
      <div className="section-wrapper">

        <div className="text-center mb-14" data-animate>
          <p className="eyebrow mb-4">Tarifs</p>
          <h2 id="pricing-title">Choisis <em className="italic">ton rythme</em></h2>
          <p className="mt-4 text-cocoa/60 font-light max-w-md mx-auto">
            7 jours d'essai gratuit. Résiliez à tout moment.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:max-w-4xl md:mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`relative flex flex-col shrink-0 w-[80vw] md:w-auto snap-start rounded-sm overflow-hidden transition-shadow ${
                plan.highlight
                  ? 'bg-cocoa text-cream shadow-xl'
                  : 'bg-chalk border border-sand/30 hover:shadow-md'
              }`}
              data-animate
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.image && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`Abonnement ${plan.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
              {plan.badge && (
                <span className="self-start mb-3 bg-sand text-cocoa text-2xs font-light tracking-[0.15em] uppercase px-4 py-1.5 rounded-pill whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <p className={`eyebrow mb-4 ${plan.highlight ? 'text-cream/50' : ''}`}>{plan.name}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className={`font-display text-5xl font-light ${plan.highlight ? 'text-cream' : 'text-cocoa'}`}>
                  {plan.price}€
                </span>
                <span className={`text-sm font-light ${plan.highlight ? 'text-cream/50' : 'text-mink'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-3 text-sm font-light ${plan.highlight ? 'text-cream/80' : 'text-cocoa/70'}`}>
                    <Check size={14} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-sand' : 'text-sand-dark'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <SignupCTA
                label="Commencer l'essai"
                variant={plan.highlight ? 'secondary' : 'primary'}
                className={plan.highlight ? 'border-cream text-cream hover:bg-cream hover:text-cocoa' : ''}
                utmContent={`pricing-${plan.id}`}
              />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-animate>
          <a href="https://app.leclubpilates.com/join" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.15em] uppercase text-mink hover:text-cocoa transition-colors font-light">
            Voir le détail des abonnements →
          </a>
        </div>

      </div>
    </section>
  )
}
