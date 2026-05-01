import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates pour le dos — Soulager et renforcer le dos',
  description: 'Cours de Pilates pour le dos en ligne : exercices pour soulager le mal de dos, renforcer les lombaires et améliorer la posture. Sans impact, guidé par des experts. Essai 7 jours gratuit.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/dos` },
  openGraph: {
    title: 'Pilates pour le dos — Soulager et renforcer le dos',
    description: 'Cours de Pilates pour le dos : soulager le mal de dos, renforcer les lombaires, améliorer la posture. En ligne, sans matériel.',
    url: `${siteUrl}/cours-de-pilates/dos`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Pilates pour le dos en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Le Pilates est-il efficace pour le mal de dos ?',
    a: 'Oui, le Pilates est reconnu par de nombreux kinésithérapeutes et médecins comme l\'une des méthodes les plus efficaces pour soulager le mal de dos. Il renforce les muscles profonds stabilisateurs de la colonne (transverse, multifides), améliore la mobilité dorsale et corrige les déséquilibres posturaux qui sont souvent la cause des douleurs.',
  },
  {
    q: 'Peut-on faire du Pilates avec une hernie discale ou une lombalgie ?',
    a: 'Le Pilates doux est généralement recommandé même en cas de hernie discale ou lombalgie chronique. Il est cependant impératif de consulter votre médecin ou kinésithérapeute avant de commencer. Nos cours "Doux" et "Stretching" sont adaptés aux personnes fragilisées et excluent les mouvements à risque.',
  },
  {
    q: 'Combien de séances de Pilates faut-il pour voir des résultats sur le dos ?',
    a: 'La plupart des pratiquants ressentent une amélioration après 8 à 10 séances régulières. Les douleurs s\'atténuent progressivement au fur et à mesure que les muscles profonds se renforcent et que la posture s\'améliore. Une pratique de 2 à 3 fois par semaine est idéale.',
  },
  {
    q: 'Quels exercices de Pilates sont les meilleurs pour le dos ?',
    a: 'Le Cat-Cow (flexion-extension de la colonne), le Spine Stretch, le Swan Dive adapté, les rotations thoraciques et le travail en position neutre sont parmi les plus efficaces. Nos cours dédiés au dos intègrent ces exercices dans une progression logique, du plus doux au plus tonique.',
  },
  {
    q: 'Le Pilates aide-t-il pour la scoliose ?',
    a: 'Le Pilates est souvent recommandé en complément du traitement de la scoliose car il renforce la musculature para-vertébrale de façon asymétrique et corrige les compensations. Nos professeurs adaptent les exercices sur demande. En cas de scoliose structurale, consultez votre médecin.',
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

export default function PilatesDosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates pour le dos', href: '/cours-de-pilates/dos' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates & mal de dos</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates pour le dos<br />
            <em className="italic text-mink">soulager et renforcer</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Douleurs lombaires, tensions cervicales, mauvaise posture — le Pilates agit en profondeur sur les causes du mal de dos. Des cours guidés par des experts certifiés, sans impact, depuis chez vous.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-dos-hero" />
          </div>
        </div>
      </section>

      {/* ── POURQUOI LE PILATES ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pourquoi le Pilates aide le dos</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  80 % des adultes souffrent de mal de dos à un moment de leur vie. La cause principale n'est pas le dos lui-même, mais les muscles profonds qui le soutiennent — trop faibles ou trop tendus pour maintenir une posture correcte.
                </p>
                <p>
                  Le Pilates cible précisément ces muscles stabilisateurs : le transverse de l'abdomen, les multifides, le plancher pelvien. En les renforçant, vous créez un véritable corselet musculaire qui soutient la colonne naturellement, sans effort et sans contrainte articulaire.
                </p>
                <p>
                  Contrairement aux exercices de musculation classiques qui chargent la colonne, le Pilates travaille en décharge et en allongement — il renforce sans compresser, tonifie sans blesser.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Ce que nos cours traitent</p>
              <ul className="space-y-5">
                {[
                  { title: 'Lombalgies chroniques', desc: 'Renforcement des érecteurs spinaux et du transverse pour stabiliser les lombaires et réduire les douleurs persistantes.' },
                  { title: 'Tensions cervicales', desc: 'Relâchement des trapèzes et renforcement des muscles profonds du cou pour corriger la posture "tête en avant".' },
                  { title: 'Douleurs sciatiques', desc: 'Étirement des fléchisseurs de hanche et des pirifomis, décompression des vertèbres lombaires.' },
                  { title: 'Mauvaise posture', desc: 'Rééquilibrage entre muscles raccourcis et muscles faibles pour retrouver un alignement naturel.' },
                  { title: 'Scoliose fonctionnelle', desc: 'Travail asymétrique pour renforcer le côté faible et assouplir le côté tendu.' },
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
            &ldquo;Le Pilates est l&apos;activité qui m&apos;a permis de gérer mes crises et de retrouver un quotidien sans douleur. C&apos;est maintenant mon outil numéro un.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-10" data-animate style={{ transitionDelay: '100ms' }}>— Alice, fondatrice du Club Pilates</p>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Commencer maintenant" utmContent="landing-dos-quote" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-section bg-chalk">
        <div className="section-wrapper max-w-3xl mx-auto">
          <h2 className="font-display font-light text-cocoa mb-12 text-center" data-animate>
            Questions sur le Pilates et le dos
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
            Votre dos mérite<br /><em className="italic text-mink">mieux que la douleur</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-dos-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Accès immédiat · Cours adaptés aux douleurs dorsales
          </p>
        </div>
      </section>
    </>
  )
}
