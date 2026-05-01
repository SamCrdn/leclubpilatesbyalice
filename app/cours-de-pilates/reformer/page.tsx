import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates Reformer en ligne — Sans machine, depuis chez vous',
  description: 'Cours de Pilates Reformer en ligne : exercices inspirés du reformer, adaptés au tapis. Efficacité du studio, depuis chez vous. Guidé par des experts certifiés. Essai 7 jours gratuit.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/reformer` },
  openGraph: {
    title: 'Pilates Reformer en ligne — Sans machine, depuis chez vous',
    description: 'Pilates Reformer en ligne : l\'efficacité du reformer adaptée au tapis, sans machine. Cours guidés par des experts. Essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates/reformer`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Pilates Reformer en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Peut-on faire du Pilates Reformer sans machine ?',
    a: 'Oui. Les principes du Pilates Reformer — travail en résistance, contrôle du mouvement, alignement précis — peuvent être reproduits sur tapis avec des variantes adaptées. On utilise des bandes de résistance pour simuler les ressorts, le poids du corps comme résistance et des positions spécifiques pour reproduire les appuis du chariot. C\'est ce que nous appelons le "Reformer-inspired Pilates" : l\'esprit du reformer, accessible à la maison.',
  },
  {
    q: 'Qu\'est-ce que le Pilates Reformer ?',
    a: 'Le reformer est l\'appareil emblématique de la méthode Pilates. Il se compose d\'un chariot sur rail muni de ressorts à différentes résistances, de cordes et d\'appuis-pieds. Il permet un travail en résistance variable, des mouvements en décharge (sans porter le poids du corps) et des positions variées (couché, assis, debout sur le chariot). L\'efficacité du reformer réside dans sa capacité à maintenir un alignement précis tout en offrant une résistance progressive.',
  },
  {
    q: 'Le Pilates Reformer est-il meilleur que le Pilates au sol ?',
    a: 'Les deux approches sont complémentaires. Le reformer offre plus de résistance variable, plus de positions possibles et un retour proprioceptif via le chariot. Le Pilates au sol, lui, développe davantage la force sans appui et la conscience corporelle autonome. Un programme idéal alterne les deux. Nos cours Reformer-inspired sur tapis permettent de profiter des bénéfices du reformer sans investir dans une machine à plusieurs milliers d\'euros.',
  },
  {
    q: 'Quel équipement faut-il pour les cours Reformer en ligne ?',
    a: 'Pour les cours Reformer-inspired, un tapis de bonne qualité et une bande de résistance (disponible en grande surface ou en ligne pour 10-20€) suffisent pour la majorité des exercices. Certaines séances avancées peuvent utiliser un petit ballon ou un cercle de Pilates. Le matériel nécessaire est toujours précisé dans la description du cours.',
  },
  {
    q: 'Le Pilates Reformer convient-il aux débutants ?',
    a: 'Il est conseillé d\'avoir quelques bases en Pilates (placement du bassin, respiration, activation du transverse) avant de pratiquer des cours Reformer, qu\'ils soient sur machine ou sur tapis. Nos cours Reformer-inspired proposent différents niveaux. Pour débuter sans bases, nous recommandons de commencer par les cours débutant avant de passer au Reformer.',
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

export default function PilatesReformerPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates Reformer', href: '/cours-de-pilates/reformer' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates Reformer</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates Reformer<br />
            <em className="italic text-mink">sans machine, depuis chez vous</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            L'efficacité du reformer, accessible à la maison. Nos cours Reformer-inspired reproduisent les principes de la machine sur tapis : résistance, alignement précis, travail en décharge — sans investir dans un équipement coûteux.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-reformer-hero" />
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / L'esprit du reformer sur tapis</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Le reformer est l'outil le plus complet de la méthode Pilates. Ses ressorts offrent une résistance variable qui permet de travailler en concentration maximale sur la qualité du mouvement plutôt que sur l'effort brut. Résultat : un travail musculaire plus profond, une meilleure conscience corporelle, des muscles longs et équilibrés.
                </p>
                <p>
                  Nos cours Reformer-inspired traduisent ces principes sur tapis : les bandes de résistance remplacent les ressorts, les positions sont adaptées pour reproduire les appuis du chariot, et la logique de progression — du plus doux au plus intense — est respectée. Vous obtenez les bénéfices du reformer sans posséder la machine.
                </p>
                <p>
                  Ces cours sont particulièrement appréciés des personnes ayant déjà pratiqué en studio reformer et souhaitant continuer à la maison, ou de celles qui veulent progresser vers cette pratique à leur rythme.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Les bénéfices spécifiques</p>
              <ul className="space-y-5">
                {[
                  { title: 'Travail en résistance progressive', desc: 'La bande de résistance reproduit les différents niveaux de ressorts du reformer pour un travail musculaire adapté à votre niveau.' },
                  { title: 'Alignement et précision', desc: 'Les exercices Reformer-inspired maintiennent une exigence de placement identique à la machine : dos neutre, scapulae stabilisées, bassin positionné.' },
                  { title: 'Décompression articulaire', desc: 'Travail en traction et en allongement pour décomprimer les articulations — bénéfice unique du Pilates Reformer que nos adaptations préservent.' },
                  { title: 'Force et longueur musculaires', desc: 'Contracter tout en allongeant — la signature du Pilates Reformer pour des muscles toniques sans volume excessif.' },
                  { title: 'Progression méthodique', desc: 'Nos cours suivent la logique de la méthode : du fondamental au complexe, chaque exercice prépare le suivant.' },
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
            &ldquo;Le reformer m'a appris ce qu'est le vrai Pilates. Depuis, j'ai voulu rendre cet enseignement accessible à toutes — sans machine, sans studio.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-10" data-animate style={{ transitionDelay: '100ms' }}>— Alice, fondatrice du Club Pilates</p>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Essayer le Pilates Reformer" utmContent="landing-reformer-quote" />
          </div>
        </div>
      </section>

      {/* ── EXERCICES ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper max-w-3xl mx-auto">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-6 text-center" data-animate>03 / Exercices emblématiques</p>
          <h2 className="font-display font-light text-cocoa mb-10 text-center" data-animate style={{ transitionDelay: '100ms' }}>
            Le répertoire Reformer<br /><em className="italic text-mink">adapté sur tapis</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Footwork adapté', desc: 'Série de poussées des pieds contre résistance — renforce les jambes, les fessiers et active le centre, équivalent tapis du footwork reformer.' },
              { name: 'Rowing', desc: 'Assis, tirage avec bandes de résistance pour renforcer le milieu du dos, les rhomboïdes et les biceps avec un contrôle précis du placement.' },
              { name: 'Pulling Straps', desc: 'Couché sur le ventre, extension des bras avec résistance — dorsaux, stabilisateurs de l\'épaule et ouverture thoracique.' },
              { name: 'Long Stretch', desc: 'Position gainage avec appui des pieds, glissement contrôlé — transverse, deltoïdes et coordination bras-centre au maximum.' },
              { name: 'Stomach Massage', desc: 'Assis en équilibre, flexion-extension des jambes avec résistance — abdominaux profonds, fléchisseurs de hanche et coordination.' },
              { name: 'Short Box Series', desc: 'Série assise avec bandes : flexion, extension, rotation — travail complet de la colonne et du centre en positions variées.' },
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
            Questions sur le Pilates Reformer en ligne
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
            L'esprit du reformer<br /><em className="italic text-mink">dans votre salon</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-reformer-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Accès immédiat · Cours Reformer inclus dans l'abonnement
          </p>
        </div>
      </section>
    </>
  )
}
