import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates débutant — Commencer le Pilates en ligne',
  description: 'Vous débutez en Pilates ? Découvrez nos cours et programmes pilates débutant en ligne : exercices fondamentaux, respiration, placement. Accès illimité, essai 7 jours gratuit.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/debutant` },
  openGraph: {
    title: 'Pilates débutant — Commencer le Pilates en ligne',
    description: 'Cours de Pilates débutant en ligne : exercices fondamentaux, programmes guidés, essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates/debutant`,
    images: [{ url: `${siteUrl}/images/programme-fondamentaux-pilates.jpg`, width: 1200, height: 630, alt: 'Pilates débutant en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Le Pilates est-il adapté aux vrais débutants ?',
    a: 'Oui, le Pilates est parfaitement adapté aux débutants. La méthode se base sur des mouvements précis et contrôlés, sans impact articulaire. Les cours débutant du Club Pilates partent des fondamentaux : respiration, position neutre, activation du centre. Aucune condition physique préalable n\'est nécessaire.',
  },
  {
    q: 'Par où commencer quand on débute le Pilates ?',
    a: 'Commencez par les mini-cours théoriques (respiration, position neutre, périnée) puis enchaînez avec le programme débutant sur 4 semaines. Ces bases sont essentielles pour pratiquer correctement et éviter les mauvaises habitudes dès le départ.',
  },
  {
    q: 'Combien de temps faut-il pratiquer par semaine en tant que débutant ?',
    a: '2 à 3 séances de 20 à 40 minutes par semaine suffisent pour progresser. La régularité prime sur la durée. En suivant notre programme débutant, vous aurez une routine structurée qui s\'adapte à votre emploi du temps.',
  },
  {
    q: 'Quel équipement faut-il pour débuter le Pilates à la maison ?',
    a: 'Un tapis de sol épais (minimum 8 mm) suffit pour démarrer. Pas de matériel coûteux nécessaire. Pour approfondir votre pratique, vous pourrez ensuite ajouter un cercle de Pilates ou une bande de résistance.',
  },
  {
    q: 'En combien de temps voit-on des résultats avec le Pilates débutant ?',
    a: 'Joseph Pilates disait : "En 10 séances vous sentirez la différence, en 20 vous la verrez." Avec une pratique régulière de 3 fois par semaine, vous ressentirez des améliorations de posture et de tonicité dès les 4 premières semaines.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function PilatesDebutantPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates débutant', href: '/cours-de-pilates/debutant' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates débutant</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Commencer le Pilates<br />
            <em className="italic text-mink">sans expérience</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Vous n'avez jamais fait de Pilates, ou vous souhaitez reprendre depuis les bases ? Nos cours de Pilates débutant en ligne vous guident pas à pas, à votre rythme, depuis chez vous.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-debutant-hero" />
          </div>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pourquoi débuter en ligne</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Le Pilates en ligne pour débutants présente un avantage majeur : vous pouvez mettre pause, revoir une explication, recommencer un mouvement. Pas de pression du groupe, pas de regard extérieur. Vous progressez à votre propre rythme.
                </p>
                <p>
                  Au Club Pilates, nos cours de Pilates débutant sont conçus pour poser des bases solides. Chaque séance commence par des rappels de placement : position neutre, activation du transverse, respiration latérale. Ces fondamentaux font toute la différence pour progresser correctement et sans douleur.
                </p>
                <p>
                  Notre <strong className="font-normal text-cocoa">programme Pilates débutant sur 4 semaines</strong> structure votre pratique semaine après semaine, en augmentant progressivement la difficulté. C'est la voie la plus efficace pour construire une routine durable.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Ce que vous allez travailler</p>
              <ul className="space-y-4">
                {[
                  { title: 'La respiration Pilates', desc: 'La base de tout mouvement — apprendre à respirer latéralement pour mobiliser le diaphragme.' },
                  { title: 'La position neutre', desc: 'Trouver l\'alignement naturel de votre colonne pour travailler sans compensation ni douleur.' },
                  { title: 'L\'activation du centre', desc: 'Engager le transverse et le plancher pelvien avant chaque mouvement — la signature du Pilates.' },
                  { title: 'La mobilité articulaire', desc: 'Retrouver de l\'amplitude et de la souplesse dans les hanches, le dos et les épaules.' },
                  { title: 'Le renforcement en douceur', desc: 'Sculpter et tonifier sans impact, sans blessure — parfait pour débuter ou reprendre.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sand flex-none" />
                    <div>
                      <p className="text-sm font-light text-cocoa mb-0.5">{item.title}</p>
                      <p className="text-xs text-cocoa/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROGRAMME ── */}
      <section className="py-section bg-cocoa relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none" aria-hidden="true">pilates</p>
        <div className="section-wrapper relative z-10 max-w-2xl mx-auto text-center">
          <p className="eyebrow text-cream/40 mb-6" data-animate>Le programme</p>
          <h2 className="font-display font-light text-cream mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            4 semaines pour<br /><em className="italic text-cream/60">maîtriser les bases</em>
          </h2>
          <p className="text-sm text-cream/60 font-light leading-relaxed mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Notre programme Pilates débutant est structuré en 4 semaines progressives. Chaque semaine, de nouveaux exercices s'appuient sur les acquis de la semaine précédente. À la fin du programme, vous aurez une pratique autonome et des bases solides pour explorer tous les cours du studio.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Accéder au programme" utmContent="landing-debutant-programme" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-section bg-chalk">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="font-display font-light text-cocoa mb-12 text-center" data-animate>
            Questions sur le Pilates débutant
          </h2>
          <dl className="divide-y divide-sand/30">
            {faqItems.map((item, i) => (
              <div key={i} className="py-6" data-animate style={{ transitionDelay: `${i * 60}ms` }}>
                <dt className="text-sm font-light text-cocoa mb-3">{item.q}</dt>
                <dd className="text-sm text-cocoa/55 font-light leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16 bg-cream border-t border-cocoa/10">
        <div className="section-wrapper text-center">
          <p className="text-sm text-cocoa/50 font-light mb-6" data-animate>Prêt(e) à commencer ?</p>
          <h2 className="font-display font-light text-cocoa mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Votre premier cours de Pilates<br /><em className="italic text-mink">vous attend</em>
          </h2>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-debutant-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light" data-animate style={{ transitionDelay: '200ms' }}>
            Sans engagement · Annulation à tout moment · Accès immédiat
          </p>
        </div>
      </section>
    </>
  )
}
