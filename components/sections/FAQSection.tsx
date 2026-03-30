'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Ai-je besoin d\'équipement particulier ?',
    a: [
      'Non, pour la plupart des cours, vous aurez seulement besoin d\'un tapis de gym confortable. Évitez les tapis trop fins type yoga, surtout si vous souffrez du dos : l\'idéal est une épaisseur supérieure à 8 mm.',
      'Pour varier les sensations et approfondir votre pratique, vous pouvez également suivre les cours de la catégorie « accessoires » et vous équiper de petits poids (environ 2 kg), d\'un cercle de Pilates, d\'une bande de résistance et/ou d\'un petit ballon. Les accessoires nécessaires sont toujours mentionnés dans la description des cours.',
    ],
  },
  {
    q: 'Je suis débutant(e), par où commencer ?',
    a: [
      'Vous pouvez commencer par les cours de la catégorie « débutant » et choisir en fonction de votre temps et de vos envies, mais on vous recommande vivement de débuter par les cours sur la respiration ainsi que de suivre les mini-cours théoriques : position neutre, périnée, diastase, diaphragme (selon vos besoins et vos préoccupations).',
      'Si vous souhaitez être guidé(e), vous pouvez suivre le programme débutant sur 4 semaines.',
    ],
  },
  {
    q: 'Puis-je accéder aux cours depuis mon téléphone ou ma télévision ?',
    a: [
      'Oui, l\'application Le Club Pilates est disponible sur iOS et Android, vous permettant de pratiquer où que vous soyez, en toute simplicité.',
      'Vous pouvez également accéder à la plateforme depuis n\'importe quel navigateur, sur ordinateur, tablette ou téléphone.',
      'Pour une expérience encore plus confortable, vous avez la possibilité de diffuser les cours sur votre télévision grâce à AirPlay, et ainsi profiter pleinement de chaque séance sur grand écran.',
    ],
  },
  {
    q: 'Comment fonctionne l\'essai gratuit ?',
    a: [
      'Pour bénéficier de l\'essai gratuit de 7 jours, il suffit de sélectionner un abonnement. Cet essai donne un accès illimité à l\'ensemble du studio en ligne. Vous pouvez résilier à tout moment pendant cette période d\'essai, sans être débité(e).',
      'Toutefois, en cas d\'annulation à la dernière minute, il est possible que le prélèvement soit déjà en cours de traitement. Dans ce cas, nous vous invitons à nous contacter afin que nous puissions vous aider.',
    ],
  },
  {
    q: 'Pourquoi je ne trouve pas tous les abonnements sur l\'application mobile ?',
    a: [
      'C\'est tout à fait normal. Pour des raisons techniques, certaines offres ne sont pas disponibles sur l\'application mobile. Nous vous invitons donc à souscrire à votre abonnement depuis le site web afin d\'accéder à l\'ensemble des formules.',
      'Une fois votre abonnement activé, vous pourrez vous connecter librement à votre espace membre depuis tous vos appareils, y compris l\'application mobile.',
    ],
  },
  {
    q: 'Puis-je annuler à tout moment ?',
    a: [
      'Absolument. Vous pouvez résilier votre abonnement à tout moment, et vous continuerez à avoir accès au studio en ligne jusqu\'à la fin de la période souscrite. Les abonnements sont renouvelés automatiquement, sauf en cas de résiliation de votre part. Ils ne sont toutefois pas remboursables.',
    ],
  },
  {
    q: 'Y a-t-il des cours en live ?',
    a: [
      'Oui, tous les abonnements donnent accès à des séances en live de 30 à 40 minutes, via Zoom. Pendant ces séances, la professeure vous voit, vous corrige et répond à vos questions, pour se motiver ensemble. Ces séances ont lieu plusieurs fois par mois, sans planning fixe. Elles sont annoncées sur le studio en ligne ainsi qu\'en story Instagram. Les replays sont disponibles sur le studio en ligne.',
    ],
  },
  {
    q: 'Est-ce adapté si j\'ai des douleurs ou une blessure ?',
    a: [
      'Le Pilates est une activité douce et sans impact, souvent recommandée pour les douleurs, notamment dorsales, ou dans le cadre d\'une rééducation. Nous vous conseillons de privilégier les cours « Doux » et « Stretching ». Les séances intenses sont déconseillées. En cas de blessure sérieuse, demandez l\'avis d\'un professionnel de santé.',
    ],
  },
  {
    q: 'Combien de temps faut-il pour voir des résultats ?',
    a: [
      'Joseph Pilates disait : « En 10 séances, vous sentirez la différence ; en 20, vous la verrez ; et en 30, vous aurez un tout nouveau corps. » Et c\'est souvent le cas ! Avec une pratique régulière, on ressent généralement rapidement une meilleure posture, moins de tensions et plus d\'énergie. Les résultats visibles sur le galbe et la tonicité apparaissent souvent après environ un mois de pratique.',
    ],
  },
  {
    q: 'Puis-je suivre les cours si je suis enceinte ?',
    a: [
      'Oui, en privilégiant les cours dédiés de la catégorie « Mama ». Vous y trouverez des séances spécialement adaptées à la grossesse, animées par des professeurs elles-mêmes enceintes, ainsi que des cours postnataux et d\'autres séances compatibles avec la grossesse car elles ne contiennent pas d\'exercices contre-indiqués durant la grossesse. Adaptez toujours l\'amplitude des mouvements selon votre ventre et vos sensations car chaque grossesse est différente. Par précaution, consultez votre médecin avant de commencer.',
    ],
  },
  {
    q: 'Les cours sont-ils en musique ?',
    a: [
      'Afin que les explications restent claires et bien audibles, la plupart des cours se déroulent en silence. Vous pouvez toutefois ajouter votre musique chez vous pour rythmer la séance. Les playlists @alice.leclubpilates sont disponibles sur Spotify, n\'hésitez pas à les sauvegarder.',
    ],
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
      acceptedAnswer: { '@type': 'Answer', text: a.join(' ') },
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
                    open === i ? 'max-h-[600px] pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-col gap-3 pr-10">
                    {faq.a.map((paragraph, j) => (
                      <p key={j} className="text-sm font-light text-cocoa/60 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}
