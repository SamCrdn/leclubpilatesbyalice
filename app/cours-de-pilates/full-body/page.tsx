import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates Full Body — Cours corps entier en ligne',
  description: 'Cours de Pilates Full Body en ligne : séances corps entier pour tonifier, renforcer et sculpter. Tous niveaux, guidé par des experts certifiés. Essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/full-body` },
  openGraph: {
    title: 'Pilates Full Body — Cours corps entier en ligne',
    description: 'Pilates Full Body en ligne : renforcer et tonifier tout le corps en une séance. Sans matériel, depuis chez vous. Essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates/full-body`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Pilates Full Body en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Qu\'est-ce qu\'un cours de Pilates Full Body ?',
    a: 'Un cours de Pilates Full Body est une séance qui sollicite l\'ensemble du corps en un seul entraînement : jambes, fessiers, abdominaux, dos, bras et épaules. Contrairement aux séances ciblées, le Full Body travaille la coordination entre les différents groupes musculaires, renforce le centre (core) comme moteur de chaque mouvement et améliore l\'endurance musculaire globale.',
  },
  {
    q: 'Le Pilates Full Body est-il adapté aux débutants ?',
    a: 'Oui, à condition de choisir des séances de niveau débutant ou intermédiaire. Nos cours Full Body précisent toujours le niveau requis et l\'intensité. Il est conseillé d\'avoir quelques séances de Pilates au compteur avant de se lancer dans une séance Full Body afin de maîtriser les bases du placement et de la respiration.',
  },
  {
    q: 'Combien de fois par semaine faire du Pilates Full Body ?',
    a: 'Pour des résultats visibles, 2 à 3 séances Full Body par semaine sont idéales, complétées par des séances plus douces (stretching, mobilité) les autres jours. Le corps a besoin d\'un temps de récupération entre deux séances intenses : 48h entre deux Full Body est une bonne règle.',
  },
  {
    q: 'En combien de temps voit-on des résultats avec le Pilates Full Body ?',
    a: 'Avec une pratique régulière de 3 séances par semaine, les premiers effets (meilleure tonicité, posture plus droite, moins de tensions) se ressentent dès 4 semaines. Les transformations visibles sur le galbe et la silhouette apparaissent généralement entre 6 et 8 semaines. La constance prime sur l\'intensité.',
  },
  {
    q: 'Quel matériel faut-il pour un Pilates Full Body à la maison ?',
    a: 'Un tapis de sol de bonne qualité (épaisseur ≥ 8 mm) est suffisant pour commencer. Pour varier et progresser, de petits haltères (1 à 2 kg), une bande de résistance et un cercle de Pilates peuvent enrichir les séances. Ces accessoires sont toujours mentionnés en description quand ils sont utilisés.',
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

export default function PilatesFullBodyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates Full Body', href: '/cours-de-pilates/full-body' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates Full Body</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates corps entier<br />
            <em className="italic text-mink">tonifier, renforcer, sculpter</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Une séance, tout le corps. Le Pilates Full Body combine renforcement musculaire profond, coordination et endurance pour des résultats visibles — sans matériel lourd, depuis chez vous.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-fullbody-hero" />
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pourquoi le Full Body en Pilates</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Le corps humain ne fonctionne pas muscle par muscle — il fonctionne en chaînes. Le Pilates Full Body entraîne ces chaînes musculaires dans leur globalité : chaque exercice sollicite simultanément le centre (core), les membres et les stabilisateurs, pour un travail plus efficace et plus fonctionnel.
                </p>
                <p>
                  Contrairement à la musculation traditionnelle qui isole les groupes musculaires, le Pilates Full Body améliore la coordination neuromusculaire, la conscience corporelle et la qualité du mouvement. Le résultat : un corps plus tonique, mieux équilibré, avec des muscles longs et dessinés plutôt que compacts.
                </p>
                <p>
                  Nos séances Full Body durent de 30 à 55 minutes et sont accessibles à tous les niveaux, avec des variantes proposées en cours pour adapter l'intensité à votre forme du jour.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Ce que vous travaillez</p>
              <ul className="space-y-5">
                {[
                  { title: 'Core & stabilité', desc: 'Transverse, obliques, multifides — le centre est l\'initiateur de chaque mouvement Full Body pour protéger la colonne.' },
                  { title: 'Jambes & fessiers', desc: 'Squats, ponts, series latérales et mouvements en chaîne fermée pour galber et renforcer le bas du corps en profondeur.' },
                  { title: 'Dos & posture', desc: 'Extensions dorsales, rowing, ouvertures thoraciques pour contrebalancer la sédentarité et redresser naturellement la posture.' },
                  { title: 'Bras & épaules', desc: 'Push-up Pilates, travail avec bandes ou haltères légers pour tonifier les bras sans prendre de volume.' },
                  { title: 'Coordination & fluidité', desc: 'Enchaînements combinés qui développent la conscience corporelle et la qualité de mouvement dans la vie quotidienne.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sand flex-none" />
                    <div>
                      <p className="text-sm font-light text-cocoa mb-1">{item.title}</p>
                      <p className="text-xs text-cocoa/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-16 bg-cocoa">
        <div className="section-wrapper max-w-3xl text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-light italic text-cream/80 leading-relaxed mb-6" data-animate>
            &ldquo;Le Full Body en Pilates, c'est le meilleur rapport temps/résultat que je connaisse. En 40 minutes, tout le corps a travaillé — en profondeur.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-10" data-animate style={{ transitionDelay: '100ms' }}>— Alice, fondatrice du Club Pilates</p>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Essayer le Pilates Full Body" utmContent="landing-fullbody-quote" />
          </div>
        </div>
      </section>

      {/* ── SÉANCES ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper max-w-3xl mx-auto">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-6 text-center" data-animate>03 / Exemples de séances</p>
          <h2 className="font-display font-light text-cocoa mb-10 text-center" data-animate style={{ transitionDelay: '100ms' }}>
            Ce que vous ferez<br /><em className="italic text-mink">dans nos cours Full Body</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'The Hundred', desc: 'Exercice emblématique du Pilates : pompage des bras en position abdominal, activation intense du core et travail de la respiration rythmique.' },
              { name: 'Roll Up & Roll Down', desc: 'Déroulement vertébral depuis la position allongée — renforce les abdominaux profonds, assouplit la colonne et mobilise les ischio-jambiers.' },
              { name: 'Single Leg Stretch', desc: 'Allongé, jambes en extension alternée avec rotation du buste — coordination, abdominaux et fléchisseurs de hanche en simultané.' },
              { name: 'Swan Dive', desc: 'Extension dorsale en position ventre — renforce les érecteurs spinaux, ouvre la poitrine et contrebalance les effets de la sédentarité.' },
              { name: 'Side Kick Series', desc: 'Couché sur le côté, série de mouvements de jambe — fessiers, abducteurs, adducteurs et obliques en chaîne latérale.' },
              { name: 'Teaser', desc: 'Équilibre assis en V avec jambes tendues — exercice emblématique du répertoire Pilates qui teste la force, la longueur et la coordination.' },
            ].map((ex, i) => (
              <div key={ex.name} className="border border-cocoa/10 rounded-sm p-6" data-animate style={{ transitionDelay: `${i * 50}ms` }}>
                <p className="text-sm font-light text-cocoa mb-2">{ex.name}</p>
                <p className="text-xs text-cocoa/50 font-light leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-section bg-chalk">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="font-display font-light text-cocoa mb-12 text-center" data-animate>
            Questions sur le Pilates Full Body
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
          <h2 className="font-display font-light text-cocoa mb-8" data-animate>
            Tout le corps,<br /><em className="italic text-mink">une séance</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-fullbody-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Accès immédiat · +350 cours dont Full Body
          </p>
        </div>
      </section>
    </>
  )
}
