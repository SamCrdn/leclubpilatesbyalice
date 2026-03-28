'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Ai-je besoin d\'équipement particulier ?',
    a: 'Non ! La plupart de nos cours peuvent se pratiquer avec simplement un tapis de yoga. Certains cours avancés utilisent optionnellement des résistances élastiques ou de petits équipements, toujours mentionnés dans la description.',
  },
  {
    q: 'Je suis débutante, par où commencer ?',
    a: 'Nous avons conçu un programme "Fondamentaux" spécialement pour les débutantes. Il vous guidera pas à pas dans les bases du Pilates en 4 semaines, avec des cours courts et progressifs.',
  },
  {
    q: 'Puis-je accéder aux cours depuis mon téléphone ?',
    a: 'Oui, notre application est disponible sur iOS et Android. Vous pouvez également accéder à la plateforme depuis n\'importe quel navigateur — ordinateur, tablette ou téléphone.',
  },
  {
    q: 'Comment fonctionne l\'essai gratuit ?',
    a: 'L\'essai gratuit de 7 jours vous donne accès à l\'intégralité de notre catalogue. À la fin de la période d\'essai, choisissez l\'abonnement qui vous convient ou annulez à tout moment.',
  },
  {
    q: 'Puis-je annuler à tout moment ?',
    a: 'Absolument. Les abonnements mensuels peuvent être résiliés à tout moment depuis votre espace membre, sans frais. Les abonnements trimestriels et annuels sont non remboursables mais ne se renouvellent pas automatiquement si vous résiliez.',
  },
  {
    q: 'Y a-t-il des cours en direct (live) ?',
    a: 'Oui ! Avec l\'abonnement annuel, vous avez accès à nos séances live, 2 fois par mois, avec possibilité d\'interagir directement avec l\'instructrice. Les replays sont disponibles 48h après.',
  },
  {
    q: 'Est-ce adapté si j\'ai des douleurs dorsales ou une blessure ?',
    a: 'Le Pilates est particulièrement recommandé pour les douleurs dorsales et la rééducation. Nos cours "Pilates Doux" et "Fondamentaux" sont conçus pour travailler en profondeur sans impact. En cas de blessure sérieuse, nous vous conseillons de consulter un professionnel de santé avant de débuter, et de commencer par les séances de niveau débutant.',
  },
  {
    q: 'Combien de temps faut-il pour voir des résultats ?',
    a: 'La plupart de nos membres ressentent une différence dès les 2 premières semaines : meilleure posture, moins de tensions, plus d\'énergie. Des résultats visibles (galbe, tonicité) apparaissent généralement après 4 à 8 semaines de pratique régulière, même à raison de 3 séances par semaine.',
  },
  {
    q: 'Puis-je faire les cours si je suis enceinte ?',
    a: 'Oui ! Notre instructrice Maria propose des cours spécialement adaptés aux femmes enceintes (Pilates Prénatal). Ces séances sont conçues pour renforcer le périnée, soulager les douleurs lombaires et préparer le corps à l\'accouchement. Consultez votre médecin avant de démarrer, par précaution.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <section aria-labelledby="faq-title" className="py-section bg-chalk">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="section-wrapper">
        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-14" data-animate>
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <h2 id="faq-title">Tout ce que vous voulez <em className="italic">savoir</em></h2>
          </div>

          <dl className="divide-y divide-sand/30">
            {faqs.map((faq, i) => (
              <div key={i} data-animate style={{ transitionDelay: `${i * 50}ms` }}>
                <dt>
                  <button
                    type="button"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left gap-6 group"
                  >
                    <span className="font-body font-light text-cocoa text-base group-hover:text-cocoa/70 transition-colors">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-mink">
                      {open === i ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-smooth ${
                    open === i ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm font-light text-cocoa/60 leading-relaxed pr-10">
                    {faq.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}
