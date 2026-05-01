import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates Wall — Cours de Pilates au mur en ligne',
  description: 'Découvrez le Pilates Wall : cours de Pilates au mur guidés par des experts, sans matériel, depuis chez vous. Renforcement, posture, mobilité. Essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/wall` },
  openGraph: {
    title: 'Pilates Wall — Cours de Pilates au mur en ligne',
    description: 'Cours de Pilates Wall en ligne : exercices au mur pour renforcer, s\'étirer et améliorer la posture. Sans matériel. Essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates/wall`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Pilates Wall en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Qu\'est-ce que le Pilates Wall ?',
    a: 'Le Pilates Wall (ou Pilates au mur) est une variante de la méthode Pilates qui utilise un mur comme appui et résistance. Le mur remplace certains équipements de studio (reformer, cadillac) en offrant un plan fixe pour s\'étirer, se renforcer et travailler l\'alignement. C\'est une pratique accessible à tous, sans matériel, depuis chez soi.',
  },
  {
    q: 'Le Pilates Wall est-il efficace ?',
    a: 'Oui, le Pilates Wall est très efficace pour renforcer les muscles profonds, améliorer la posture et gagner en mobilité. Le mur offre un retour proprioceptif immédiat : il vous aide à sentir votre alignement, à corriger les compensations et à travailler avec plus de précision qu\'au sol seul. C\'est une pratique reconnue par les professeurs de Pilates certifiés.',
  },
  {
    q: 'Le Pilates Wall convient-il aux débutants ?',
    a: 'Absolument. Le Pilates Wall est idéal pour les débutants car le mur sert de guide : il sécurise les mouvements, facilite la compréhension du placement et réduit le risque de mauvaises compensations. Nos cours Wall débutent toujours par les bases du Pilates (respiration, position neutre, activation du centre) avant d\'utiliser le mur.',
  },
  {
    q: 'De quel équipement ai-je besoin pour faire du Pilates Wall ?',
    a: 'Il vous faut uniquement un mur dégagé, un tapis de sol et des vêtements confortables. Aucun équipement coûteux n\'est nécessaire. Certaines séances avancées peuvent intégrer une bande de résistance, mais ce n\'est jamais obligatoire.',
  },
  {
    q: 'Quelle est la différence entre Pilates Wall et Pilates classique au sol ?',
    a: 'Dans le Pilates au sol, on travaille sur le tapis avec le poids du corps. Dans le Pilates Wall, le mur ajoute une dimension : il permet des étirements en décompression, des mouvements en chaîne fermée (dos ou pieds contre le mur) et un retour proprioceptif précis sur le placement. Les deux méthodes sont complémentaires.',
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

export default function PilatesWallPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates Wall', href: '/cours-de-pilates/wall' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates Wall</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates au mur<br />
            <em className="italic text-mink">renforcez, étirez, alignez</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Le Pilates Wall transforme votre mur en outil de Pilates. Renforcement profond, étirements en décompression, correction de la posture — tout ça sans matériel, depuis votre salon.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-wall-hero" />
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pourquoi le mur change tout</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Dans un studio de Pilates professionnel, le reformer et le cadillac offrent un plan de résistance et des appuis fixes qui guident le mouvement avec précision. Le Pilates Wall reproduit cette logique à la maison : le mur devient votre équipement.
                </p>
                <p>
                  Placer le dos, les pieds ou les mains contre un mur active le retour proprioceptif — votre corps reçoit une information sensorielle immédiate sur son alignement. Vous sentez instantanément si vos lombaires s'aplatissent, si vos épaules compensent, si votre bassin bascule.
                </p>
                <p>
                  Le Pilates Wall permet également des étirements en décompression de la colonne qui sont difficiles à obtenir au sol seul. C'est une pratique particulièrement efficace pour les personnes sédentaires ou qui passent beaucoup de temps assises.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Ce que vous travaillez</p>
              <ul className="space-y-5">
                {[
                  { title: 'Alignement et posture', desc: 'Le mur comme miroir : sentir et corriger l\'alignement vertébral, scapulaire et pelvien en temps réel.' },
                  { title: 'Renforcement du centre', desc: 'Squats au mur, gainage en appui, travail des fessiers et des abdominaux profonds avec retour proprioceptif.' },
                  { title: 'Mobilité de la colonne', desc: 'Flexions, extensions et rotations guidées par le mur pour retrouver amplitude et fluidité sans forcer.' },
                  { title: 'Étirements en décompression', desc: 'Hanches, ischio-jambiers, thoracique — le mur permet des étirements en traction que le sol ne peut pas offrir.' },
                  { title: 'Équilibre et proprioception', desc: 'Exercices unipodaux en appui progressif pour renforcer la cheville, le genou et la stabilité globale.' },
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
            &ldquo;Le mur est le meilleur outil de biofeedback qui soit. Il dit la vérité sur votre posture sans vous juger.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-10" data-animate style={{ transitionDelay: '100ms' }}>— Alice, fondatrice du Club Pilates</p>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Essayer le Pilates Wall" utmContent="landing-wall-quote" />
          </div>
        </div>
      </section>

      {/* ── EXERCICES ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper max-w-3xl mx-auto">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-6 text-center" data-animate>03 / Exemples d'exercices</p>
          <h2 className="font-display font-light text-cocoa mb-10 text-center" data-animate style={{ transitionDelay: '100ms' }}>
            Ce que vous ferez<br /><em className="italic text-mink">dans nos cours Wall</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'Wall Squat Pilates', desc: 'Dos au mur, descente en squat lent avec activation du plancher pelvien et des ischios-jambiers. Parfait pour renforcer les jambes sans charger les genoux.' },
              { name: 'Spine Roll Down', desc: 'Déroulement vertébral debout contre le mur — mobilise chaque vertèbre et étire la chaîne postérieure en douceur.' },
              { name: 'Wall Push-Up', desc: 'Version Pilates du pompe debout : travail des pectoraux, triceps et stabilisateurs de l\'épaule avec contrôle total.' },
              { name: 'Leg Slide au mur', desc: 'Couché, pieds au mur — glisser une jambe pour travailler le transverse et les fléchisseurs de hanche sans quitter la position neutre.' },
              { name: 'Thoracic Rotation', desc: 'Assis dos au mur, rotation du thorax guidée par l\'appui — idéal pour les tensions dorsales liées à la sédentarité.' },
              { name: 'Standing Balance', desc: 'En appui progressif, pied contre le mur, pour développer l\'équilibre unipodal et la stabilité de la cheville et du bassin.' },
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
            Questions sur le Pilates Wall
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
            Un mur, un tapis<br /><em className="italic text-mink">et c'est parti</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-wall-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Accès immédiat · Cours Wall inclus dans l'abonnement
          </p>
        </div>
      </section>
    </>
  )
}
