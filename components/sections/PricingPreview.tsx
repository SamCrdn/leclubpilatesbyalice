import Image from 'next/image'
import { Check } from 'lucide-react'
import PlanCTA from '@/components/ui/PlanCTA'
import type { Formule } from '@/lib/analytics'
import { LIENS_PAIEMENT } from '@/lib/offres'

type Plan = {
  formule: Formule
  name: string
  price: string
  period: string
  detail: string
  conditions: string
  badge?: string
  highlight: boolean
  imageUrl: string
}

// Textes alignés sur les offres Uscreen (app.leclubpilates.com)
const PLANS: Plan[] = [
  {
    formule: 'annuel', name: 'Annuel', price: '229', period: 'an',
    detail: "Soit environ 19 € par mois : près de 94 € d'économie sur l'année",
    conditions: "Payé une fois pour l'année, résiliable à tout moment : l'accès continue jusqu'à la fin de l'année payée",
    badge: 'Le plus avantageux', highlight: true, imageUrl: '/images/class-3.jpg',
  },
  {
    formule: 'trimestriel', name: 'Trimestriel', price: '75', period: '3 mois',
    detail: 'Soit 25 € par mois',
    conditions: 'Résiliable à tout moment, ou une pause si tu manques de temps',
    highlight: false, imageUrl: '/images/plan-trimestriel.jpg',
  },
  {
    formule: 'mensuel', name: 'Mensuel', price: '26,90', period: 'mois',
    detail: 'Sans engagement, résiliable à tout moment',
    conditions: 'Une pause possible si tu manques de temps',
    highlight: false, imageUrl: '/images/plan-mensuel.jpg',
  },
]

const AVANTAGES = [
  "7 jours d'essai gratuits, 0 € aujourd'hui",
  'Accès illimité à +350 cours, sur téléphone, ordinateur et TV',
  'Un challenge chaque semaine et des lives chaque mois',
]

export default function PricingPreview() {
  return (
    <section aria-labelledby="pricing-title" className="pb-section pt-[clamp(7rem,14vw,12rem)] bg-cream">
      <div className="section-wrapper">

        <div className="text-center mb-14" data-animate>
          <p className="eyebrow mb-4">Tarifs</p>
          <h2 id="pricing-title">Choisis <em className="italic">ton rythme</em></h2>
          <p className="mt-4 text-cocoa/60 font-light max-w-md mx-auto">7 jours d&apos;essai gratuits sur toutes les formules.</p>
        </div>

        <div className="relative">
        <div className="flex md:grid md:grid-cols-3 gap-6 md:max-w-5xl md:mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0 overscroll-x-contain">
          {PLANS.map((plan) => (
            <div
              key={plan.formule}
              className={`relative flex flex-col shrink-0 w-[80vw] md:w-auto snap-start rounded-sm overflow-hidden transition-shadow ${
                plan.highlight ? 'bg-cocoa text-cream shadow-xl' : 'bg-chalk border border-sand/30 hover:shadow-md'
              }`}
            >
              <div className="aspect-video relative overflow-hidden transform-gpu">
                <Image src={plan.imageUrl} alt={`Abonnement ${plan.name}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                {plan.badge && (
                  <span className="self-start mb-3 bg-sand text-cocoa text-2xs font-light tracking-[0.15em] uppercase px-4 py-1.5 rounded-pill whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <p className={`eyebrow mb-4 ${plan.highlight ? 'text-cream/50' : ''}`}>{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-5xl font-light ${plan.highlight ? 'text-cream' : 'text-cocoa'}`}>{plan.price}€</span>
                  <span className={`text-sm font-light ${plan.highlight ? 'text-cream/50' : 'text-mink'}`}>/{plan.period}</span>
                </div>
                <p className={`mt-3 mb-8 text-sm font-light ${plan.highlight ? 'text-sand' : 'text-cocoa'}`}>{plan.detail}</p>
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {[...AVANTAGES, plan.conditions].map(f => (
                    <li key={f} className={`flex items-start gap-3 text-sm font-light ${plan.highlight ? 'text-cream/80' : 'text-cocoa/70'}`}>
                      <Check size={14} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-sand' : 'text-sand-dark'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <PlanCTA
                  href={LIENS_PAIEMENT[plan.formule]}
                  formule={plan.formule}
                  position="tarifs"
                  variant={plan.highlight ? 'secondary' : 'primary'}
                  className={plan.highlight ? 'border-cream bg-cream text-cocoa hover:bg-sand hover:border-sand hover:text-cocoa' : ''}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-4 w-14 bg-gradient-to-l from-cream to-transparent pointer-events-none md:hidden flex items-center justify-end pr-2" aria-hidden="true">
          <span className="text-cocoa/40 text-base">→</span>
        </div>
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
