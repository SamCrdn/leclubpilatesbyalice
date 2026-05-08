import type { Metadata } from 'next'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'
import RelatedCourses from '@/components/ui/RelatedCourses'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Pilates abdos — Ventre plat et gainage en profondeur',
  description: 'Cours de Pilates abdos en ligne : renforcer le transverse, affiner la taille et gagner en gainage sans risquer le dos. Sans matériel, guidé par des expertes. Essai gratuit 7 jours.',
  alternates: { canonical: `${siteUrl}/cours-de-pilates/abdos` },
  openGraph: {
    title: 'Pilates abdos — Ventre plat et gainage en profondeur',
    description: 'Cours de Pilates abdos en ligne : transverse, gainage profond, taille affinée. Sans matériel, depuis chez vous. Essai gratuit 7 jours.',
    url: `${siteUrl}/cours-de-pilates/abdos`,
    images: [{ url: `${siteUrl}/images/cours/cours-pilates-abdominaux.jpg`, width: 1200, height: 630, alt: 'Pilates abdos en ligne' }],
  },
}

const faqItems = [
  {
    q: 'Le Pilates est-il efficace pour les abdominaux ?',
    a: 'Oui, le Pilates est l\'une des méthodes les plus efficaces pour travailler les abdominaux en profondeur. Contrairement aux crunchs classiques qui sollicitent principalement les droits abdominaux, le Pilates cible le transverse — la couche musculaire la plus profonde — ainsi que les obliques et les muscles stabilisateurs du bassin. Le résultat : un ventre plus plat, un centre plus solide et une posture améliorée, sans risquer de blesser le dos.',
  },
  {
    q: 'Peut-on avoir un ventre plat avec le Pilates ?',
    a: 'Le Pilates contribue à affiner la silhouette en renforçant le transverse, le muscle qui agit comme une ceinture naturelle autour du ventre. Avec une pratique régulière, le ventre se galbe et se raffermit. En revanche, le Pilates ne brûle pas les graisses localement — une alimentation équilibrée reste indispensable pour réduire la graisse abdominale. Le Pilates agit sur le tonus et le maintien, pas sur la combustion des graisses.',
  },
  {
    q: 'Le Pilates abdo est-il sans danger pour le dos ?',
    a: 'C\'est l\'un des grands avantages du Pilates sur les abdominaux classiques : il ne charge pas la colonne. Tous les exercices Pilates partent d\'une position neutre du dos et engagent le transverse AVANT le mouvement pour protéger les lombaires. Nos cours Pilates abdos sont conçus pour renforcer le centre sans aucun risque pour la colonne — idéal même pour les personnes ayant des antécédents de mal de dos.',
  },
  {
    q: 'Quelle est la différence entre gainage Pilates et gainage classique ?',
    a: 'Le gainage classique (planche, crunch) travaille principalement les muscles superficiels — les droits abdominaux. Le gainage Pilates va plus loin : il cible les muscles profonds (transverse, multifides, plancher pelvien) qui stabilisent la colonne et le bassin de l\'intérieur. Ce travail en profondeur est plus fonctionnel, plus sûr et donne des résultats visibles sur la posture et la silhouette à long terme.',
  },
  {
    q: 'Combien de fois par semaine faire du Pilates abdos ?',
    a: '2 à 3 séances par semaine sont idéales pour progresser. Le transverse et les muscles profonds récupèrent vite et peuvent être sollicités plus souvent que les gros groupes musculaires. En pratiquant régulièrement, vous sentirez les premiers résultats — ventre plus ferme, posture plus droite — dès 4 à 6 semaines.',
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

export default function PilatesAbdosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Cours de Pilates', href: '/cours-de-pilates' },
        { name: 'Pilates abdos', href: '/cours-de-pilates/abdos' },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-cream pt-36 pb-16">
        <div className="section-wrapper">
          <p className="eyebrow text-sand-dark mb-6" data-animate>Pilates abdos</p>
          <h1 className="font-display font-light text-cocoa leading-[0.95] mb-8" data-animate style={{ transitionDelay: '100ms' }}>
            Pilates abdos<br />
            <em className="italic text-mink">gainage profond, ventre plat</em>
          </h1>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed max-w-xl mb-10" data-animate style={{ transitionDelay: '150ms' }}>
            Oubliez les crunchs. Le Pilates abdos travaille en profondeur : transverse, obliques, plancher pelvien. Un centre fort, une taille affinée, sans jamais compromettre votre dos.
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Commencer — 7 jours gratuits" utmContent="landing-abdos-hero" />
          </div>
        </div>
      </section>

      {/* ── POURQUOI ── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div data-animate>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">01 / Pourquoi le Pilates transforme les abdos</p>
              <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed">
                <p>
                  Les abdominaux ne se résument pas aux droits abdominaux — ce "six-pack" visible qui fait l'objet de tous les crunchs. En dessous se trouve le transverse, un muscle en ceinture qui enserre les viscères, stabilise le bassin et maintient le dos droit. C'est lui que le Pilates cible en priorité.
                </p>
                <p>
                  En activant le transverse avant chaque mouvement, le Pilates crée un gainage naturel qui protège la colonne et affine la silhouette en profondeur. Pas de gonflement, pas de tension cervicale, pas de lombalgie liée au sur-sollicitation des muscles superficiels.
                </p>
                <p>
                  Le résultat est double : un centre fonctionnellement solide (moins de douleurs, meilleure posture) et esthétiquement plus plat. C'est pourquoi le Pilates abdos est recommandé aussi bien par les kinés que par les coaches sportifs de haut niveau.
                </p>
              </div>
            </div>

            <div data-animate style={{ transitionDelay: '100ms' }}>
              <p className="font-mono text-xs text-sand-dark tracking-widest mb-6">02 / Ce que vous travaillez</p>
              <ul className="space-y-5">
                {[
                  { title: 'Le transverse', desc: 'Le muscle le plus profond de la sangle abdominale — votre ceinture naturelle. Il se contracte avant chaque mouvement pour stabiliser le bassin et les lombaires.' },
                  { title: 'Les obliques internes et externes', desc: 'Responsables de la rotation et de la flexion latérale du tronc. Travaillés en Pilates pour affiner la taille et donner de la définition aux flancs.' },
                  { title: 'Le plancher pelvien', desc: 'La base de votre centre. Souvent oublié en salle, il est systématiquement engagé en Pilates pour compléter la contraction du transverse.' },
                  { title: 'Les droits abdominaux', desc: 'Travaillés aussi — mais intelligemment, en allongement, sans charger les cervicales ni comprimer les disques vertébraux.' },
                  { title: 'Les stabilisateurs lombaires', desc: 'Multifides et érecteurs spinaux en synergie avec le centre pour un gainage complet et fonctionnel.' },
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
            &ldquo;Le ventre plat ne vient pas des crunchs. Il vient d&apos;un transverse fort, d&apos;une posture alignée et d&apos;une respiration maîtrisée. C&apos;est exactement ce que le Pilates enseigne.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase text-cream/30 mb-10" data-animate style={{ transitionDelay: '100ms' }}>Alice, fondatrice du Club Pilates</p>
          <div data-animate style={{ transitionDelay: '150ms' }}>
            <SignupCTA label="Essayer le Pilates abdos" utmContent="landing-abdos-quote" />
          </div>
        </div>
      </section>

      {/* ── EXERCICES ── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper max-w-3xl mx-auto">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-6 text-center" data-animate>03 / Exercices emblématiques</p>
          <h2 className="font-display font-light text-cocoa mb-10 text-center" data-animate style={{ transitionDelay: '100ms' }}>
            Ce que vous ferez<br /><em className="italic text-mink">dans nos cours abdos</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: 'The Hundred', desc: 'L\'exercice signature du Pilates : 100 pompages des bras en position abdominale, avec respiration rythmique. Activation intense du transverse et de la chaîne antérieure.' },
              { name: 'Double Leg Stretch', desc: 'Allongé, genoux à la poitrine puis extension simultanée des bras et jambes — travail profond du centre sans aucune tension cervicale.' },
              { name: 'Criss-Cross', desc: 'Rotation alternée du buste vers le genou opposé — les meilleurs obliques que vous ayez jamais sollicités, sans charger les lombaires.' },
              { name: 'Teaser', desc: 'Équilibre en V assis avec jambes tendues — l\'exercice ultime qui teste la force, la longueur et le contrôle de tout le centre.' },
              { name: 'Roll Up', desc: 'Déroulement vertébral depuis la position allongée — travail excentrique des abdominaux profonds pour une sangle solide et mobile.' },
              { name: 'Side-Lying Leg Series', desc: 'Couché sur le côté, séries de jambes — sollicite les obliques et les stabilisateurs latéraux du bassin pour une taille sculptée.' },
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
            Questions sur le Pilates abdos
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
            Un centre fort,<br /><em className="italic text-mink">une silhouette transformée</em>
          </h2>
          <div data-animate style={{ transitionDelay: '100ms' }}>
            <SignupCTA label="Essai gratuit 7 jours" utmContent="landing-abdos-bottom" />
          </div>
          <p className="mt-4 text-xs text-cocoa/30 font-light">
            Sans engagement · Accès immédiat · Cours abdos inclus dans l'abonnement
          </p>
        </div>
      </section>

      <RelatedCourses current="/cours-de-pilates/abdos" />
    </>
  )
}
