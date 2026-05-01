import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates prénatal & postnatal — Enceinte ou après accouchement',
  description: 'Cours de Pilates prénatal et postnatal en ligne : séances adaptées à chaque trimestre de grossesse et à la reprise après accouchement. Programme Mama 12 mois. Essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/prenatal` },
  openGraph: {
    title: 'Pilates prénatal & postnatal — Enceinte ou après accouchement',
    description: 'Pilates enceinte et postnatal en ligne : séances adaptées trimestre par trimestre. Programme Mama 12 mois par Le Club Pilates.',
    url: `${siteUrl}/cours-de-pilates/prenatal`,
    images: [{ url: `${siteUrl}/images/programme-mama-pilates.jpg`, width: 1200, height: 630, alt: 'Pilates prénatal en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Le Pilates est-il sans danger pendant la grossesse ?',
    a: 'Le Pilates prénatal est généralement considéré comme une activité sûre pendant la grossesse, recommandée par de nombreux gynécologues et sages-femmes. Il renforce le plancher pelvien, améliore la posture et soulage les douleurs dorsales. Nos cours excluent tous les exercices contre-indiqués (décubitus dorsal prolongé, abdominaux profonds en fin de grossesse). Consultez toujours votre médecin avant de commencer.',
  },
  {
    q: 'À quel trimestre peut-on commencer le Pilates prénatal ?',
    a: 'Le Pilates prénatal peut être pratiqué dès le premier trimestre si votre grossesse se déroule normalement. Notre programme Mama propose des séances adaptées trimestre par trimestre, tenant compte des changements physiologiques spécifiques à chaque période.',
  },
  {
    q: 'Quand reprendre le Pilates après l\'accouchement ?',
    a: 'La reprise du Pilates postnatal dépend de votre accouchement (voie basse ou césarienne) et de votre rééducation du périnée. En règle générale, les exercices doux peuvent reprendre 6 à 8 semaines après l\'accouchement, après validation médicale. Notre programme postnatal respecte cette progression et s\'adapte à votre rythme de récupération.',
  },
  {
    q: 'Qu\'est-ce que le programme Mama du Club Pilates ?',
    a: 'Le programme Mama est un programme complet de 12 mois qui couvre toute la grossesse et la période postnatale. Il inclut des séances prénatal par trimestre, des cours de respiration et préparation à l\'accouchement, et un programme postnatal progressif incluant le travail de la diastase abdominale.',
  },
  {
    q: 'Le Pilates aide-t-il pour la diastase abdominale ?',
    a: 'Oui, le Pilates est l\'une des méthodes les plus recommandées pour traiter la diastase abdominale. Le travail en profondeur du transverse (sans flexion du tronc ni gainage superficiel) aide à refermer progressivement l\'écart entre les droits abdominaux. Nos cours postnataux incluent un module spécifique diastase.',
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

export default function PilatesPrenatalPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates prénatal', href: '/cours-de-pilates/prenatal' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates prénatal & postnatal</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates enceinte<br />
            <em className="italic text-mink">& après accouchement</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Des cours de Pilates prénatal et postnatal conçus pour accompagner chaque femme pendant et après la grossesse. Séances adaptées trimestre par trimestre, animées par des professeurs elles-mêmes mamans.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Découvrir le programme Mama" utmContent="landing-prenatal-hero" />
          </div>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pilates prénatal</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Le Pilates pendant la grossesse est l'une des activités physiques les plus recommandées. Doux, sans impact, il renforce le plancher pelvien, améliore la posture face au poids du ventre et prépare le corps à l'accouchement.
                </p>
                <p>
                  Nos cours de Pilates enceinte sont pensés trimestre par trimestre. Au premier trimestre, on pose les bases ; au deuxième, on renforce en douceur ; au troisième, on adapte les positions et on prépare activement l'accouchement. Tous les exercices contre-indiqués sont exclus.
                </p>
                <p>
                  Nos professeurs sont certifiées en Pilates prénatal et postnatal. Certaines ont elles-mêmes vécu leur grossesse en pratiquant ces cours — elles comprennent de l'intérieur ce que vous traversez.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Pilates postnatal</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  La reprise après l'accouchement est une étape délicate. Le Pilates postnatal accompagne cette reconstruction en respectant le corps : travail du périnée, du transverse, de la diastase abdominale, retrouver sa posture et son énergie progressivement.
                </p>
                <p>
                  Notre programme postnatal est conçu pour s'adapter à votre rythme de récupération, que vous ayez accouché par voie basse ou par césarienne. Les premières séances sont très douces et peuvent être pratiquées dès 6 à 8 semaines post-partum.
                </p>
                <ul className="space-y-3 mt-4">
                  {['Rééducation du périnée', 'Traitement de la diastase abdominale', 'Renforcement progressif du centre', 'Retrouver posture et tonicité', 'Gestion du stress et fatigue postnatale'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sand flex-none" />
                      <span className="text-sm text-cocoa/60 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROGRAMME MAMA ── */}
      <section className="py-section bg-cocoa relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none" aria-hidden="true">mama</p>
        <div className="section-wrapper relative z-10 max-w-2xl mx-auto text-center">
          <p className="eyebrow text-cream/40 mb-6" data-animate>Programme exclusif</p>
          <h2 className="font-display font-light text-cream mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            Mama — 12 mois<br /><em className="italic text-cream/60">d'accompagnement complet</em>
          </h2>
          <p className="text-sm text-cream/60 font-light leading-relaxed mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            De la grossesse à la reprise postnatale, le programme Mama est un accompagnement Pilates sur mesure pensé pour les femmes enceintes et jeunes mamans. Un programme unique sur le marché du Pilates en ligne en France.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Accéder au programme Mama" utmContent="landing-prenatal-mama" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-section bg-chalk">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="font-display font-light text-cocoa mb-12 text-center" data-animate>
            Questions sur le Pilates prénatal
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
            Prenez soin de vous<br /><em className="italic text-mink">et de votre bébé</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-prenatal-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Annulation à tout moment · Accès immédiat au programme Mama
          </p>
        </div>
      </section>
    </>
  )
}
