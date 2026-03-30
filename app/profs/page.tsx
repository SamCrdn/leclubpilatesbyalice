import type { Metadata } from 'next'
import Image from 'next/image'
import { SignupCTA } from '@/components/ui/CTAButton'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Nos professeurs de Pilates certifiés — Le Club Pilates',
  description:
    'Découvrez l\'équipe de professeurs du Club Pilates : Alice, Athena, Maria, Vince et Elizabeth. Des instructeurs certifiés passionnés par le mouvement et le bien-être.',
  alternates: { canonical: `${siteUrl}/profs` },
  openGraph: {
    title: 'Nos professeurs de Pilates certifiés — Le Club Pilates',
    description: 'Alice, Athena, Maria, Vince et Elizabeth — 5 instructeurs certifiés pour vous accompagner dans votre pratique du Pilates en ligne.',
    url: `${siteUrl}/profs`,
    images: [{ url: `${siteUrl}/images/profs/alice-prof-pilates.jpg`, width: 1200, height: 630, alt: 'Équipe de professeurs du Club Pilates' }],
  },
}

const profs = [
  {
    name: 'Alice',
    role: 'Fondatrice & instructrice',
    index: '01',
    photo: '/images/profs/alice-prof-pilates.jpg',
    photoAlt: 'Alice, fondatrice du Club Pilates',
    formation: 'Polestar Pilates Training Mat & Machine · CQP ALS AGEE · Carte Professionnelle de coach sportif · EAT Danse Classique',
    bio: [
      'À travers ses cours, elle propose une approche douce, précise et profondément efficace, où chaque mouvement est pensé pour engager les muscles en profondeur. Sa vision calme guide des séances à la fois fluides et exigeantes : une méthode subtile où la douceur ne remplace jamais le travail intense.',
      'Alice accorde une grande importance à la précision du mouvement, à la fluidité des enchaînements et aime particulièrement proposer des séances ciblées, focalisées sur une zone du corps.',
    ],
    imageRight: true,
  },
  {
    name: 'Athena',
    role: 'Instructrice',
    index: '02',
    photo: '/images/profs/athena-prof-pilates.jpg',
    photoAlt: 'Athena, professeure de Pilates',
    formation: 'Alyne Pilates Mat & Reformer',
    bio: [
      'Elle est diplômée de l\'école Alyne, membre de la FFMP (Fédération des professionnels de la Méthode Pilates). Elle étudie actuellement au Costa Rica, où elle dispense ses cours de Pilates dans un décor de rêve.',
      'Ayant évolué dans le milieu du spectacle pendant de nombreuses années, elle s\'est ensuite orientée vers le Pilates lorsqu\'elle a découvert cette méthode qui lui a apporté énormément de bien-être. Elle a alors décidé de la partager pour aider les autres à se sentir mieux dans leur corps et dans leur esprit. Une approche douce et bienveillante, mais aussi dynamique et ludique.',
    ],
    imageRight: false,
  },
  {
    name: 'Maria',
    role: 'Instructrice · Pilates prénatal',
    index: '03',
    photo: '/images/profs/maria-prof-pilates.jpg',
    photoAlt: 'Maria, professeure de Pilates',
    formation: 'Polestar Pilates Training Mat & Machine · CQP ALS AGEE · Carte Professionnelle de coach sportif',
    bio: [
      'Athlète, danseuse, éducatrice, coach bien-être et professeure de Pilates. Passionnée par le mouvement sous toutes ses formes, elle s\'intéresse principalement à l\'anatomie, à la linguistique, l\'écriture et aux relations humaines.',
      'Pour elle, le mouvement est une véritable thérapie qui aide à surpasser les blocages, à se reconnecter à soi et à choisir la manière dont on souhaite se positionner dans le monde. Sa signature : proposer un voyage sensoriel de l\'intérieur vers l\'extérieur, invitant chacun à se reconnecter à soi. Ses cours sont caractérisés par un positionnement dynamique, sérénité, exigence et douceur, discipline et liberté. Au sein du studio digital, Maria propose des cours de Pilates pour femmes enceintes.',
    ],
    imageRight: true,
  },
  {
    name: 'Vince',
    role: 'Instructeur · Yoga & Pilates',
    index: '04',
    photo: '/images/profs/vince-prof-pilates.jpg',
    photoAlt: 'Vince, professeur de Pilates et Yoga',
    formation: 'Pilates Mat 1 à l\'IMF · 200h Yoga Vinyasa · CQP ALS AGEE · Carte Professionnelle de coach sportif · Diplôme en mobilité fonctionnelle',
    bio: [
      'Après avoir travaillé dans l\'Art, Vince décide de se consacrer à son autre passion : le mouvement. Coach depuis neuf ans pour le groupe mondial Sport Club Dyoniss, mixant yoga et Pilates, Vince a d\'abord commencé par des entraînements cardio, puis HIT fonctionnels et déplacements construits, ajoutant progressivement des mouvements fonctionnels.',
      'Il aime proposer des séances créatives qui reflètent la personnalité de chacun. Un enseignement bienveillant et une passion pour l\'éveil. Inspirer et sensibiliser — il vous guidera pour un entraînement frais et précis.',
    ],
    imageRight: false,
  },
  {
    name: 'Elizabeth',
    role: 'Praticienne en hypnose & bien-être',
    index: '05',
    photo: '/images/profs/elizabeth-prof-pilates.jpg',
    photoAlt: 'Elizabeth, praticienne en hypnose',
    formation: 'Diplômée de l\'École Centrale d\'Hypnose de Paris, spécialisation en gestion des traumas',
    bio: [
      'Elizabeth est praticienne en hypnose et tarologue, spécialisée en gestion des traumas et psychopathologies. Elle vous guide à travers des pratiques de respiration, de visualisation et de relaxation guidée sur des thématiques précises.',
      'Lorsque les pensées s\'emballent ou que les tensions s\'accumulent, il devient difficile de retrouver le calme intérieur. L\'auto-hypnose permet de relâcher ces tensions mentales, de ralentir le flot des pensées et d\'installer en soi un sentiment profond de sérénité. Elizabeth vous guide en ligne en complémentarité des séances de Pilates afin de créer une réelle connexion du corps et de l\'esprit.',
    ],
    imageRight: true,
  },
]

const profsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Équipe de professeurs — Le Club Pilates',
  itemListElement: profs.map((prof, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Person',
      name: prof.name,
      jobTitle: prof.role,
      image: `https://www.leclubpilates.com${prof.photo}`,
      description: prof.bio[0],
      worksFor: {
        '@type': 'Organization',
        name: 'Le Club Pilates',
        url: 'https://www.leclubpilates.com',
      },
    },
  })),
}

export default function ProfsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Les Professeurs', href: '/profs' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profsJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="bg-cocoa pt-36 pb-16 min-h-[380px] flex flex-col justify-end relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[20vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight" aria-hidden="true">
          pilates
        </p>
        <div className="section-wrapper relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="eyebrow text-cream/40 mb-6" data-animate>L&apos;équipe</p>
            <h1 className="font-display font-light text-cream leading-[0.95] max-w-lg text-[clamp(2.75rem,5.5vw,5rem)]" data-animate style={{ transitionDelay: '100ms' }}>
              Les <em className="italic text-cream/50">professeurs.</em>
            </h1>
          </div>
          <p className="text-sm text-cream/40 font-light max-w-xs pb-1" data-animate style={{ transitionDelay: '200ms' }}>
            Une équipe de passionnés certifiés, réunis autour d&apos;une même conviction&nbsp;: le mouvement transforme.
          </p>
        </div>
      </section>

      {/* ── PROFS ── */}
      {profs.map((prof, i) => (
        <section
          key={prof.name}
          className={`py-section ${i % 2 === 0 ? 'bg-cream' : 'bg-sand/10'}`}
        >
          <div className="section-wrapper">
            <div className={`grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-24 items-center ${prof.imageRight ? '' : 'lg:[&>*:first-child]:order-last'}`}>

              {/* Photo */}
              <div
                className="relative aspect-[3/4] rounded-sm overflow-hidden"
                data-animate
                style={{ transitionDelay: prof.imageRight ? '150ms' : '0ms' }}
              >
                <Image
                  src={prof.photo}
                  alt={prof.photoAlt}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Texte */}
              <div data-animate style={{ transitionDelay: prof.imageRight ? '0ms' : '150ms' }}>
                <p className="font-mono text-xs text-sand-dark tracking-widest mb-4">{prof.index} / {prof.role}</p>
                <h2 className="font-display text-5xl md:text-6xl font-light text-cocoa mb-8">{prof.name}</h2>

                <div className="space-y-4 text-sm text-cocoa/70 font-light leading-relaxed mb-8">
                  {prof.bio.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>

                {prof.formation && (
                  <div className="pt-6 border-t border-cocoa/10">
                    <p className="text-xs text-cocoa/40 tracking-widest uppercase font-light mb-1">Formation</p>
                    <p className="text-xs text-cocoa/60 font-light">{prof.formation}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── PULL QUOTE ── */}
      <section className="py-20 bg-sand/20 overflow-hidden">
        <div className="section-wrapper">
          <p
            className="font-display text-3xl md:text-5xl font-light italic text-cocoa leading-snug max-w-3xl"
            data-animate
          >
            &ldquo;Une équipe au service de votre bien-être, où que vous soyez.&rdquo;
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-cocoa/30 font-light" data-animate style={{ transitionDelay: '150ms' }}>
            — Le Club Pilates
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-cocoa relative overflow-hidden">
        <p className="absolute inset-0 flex items-center justify-center font-display text-[18vw] font-light text-cream/[0.03] select-none pointer-events-none tracking-tight" aria-hidden="true">
          pilates
        </p>
        <div className="section-wrapper relative z-10 max-w-2xl mx-auto text-center">
          <p
            className="font-display text-xl md:text-2xl font-light italic text-cream/80 leading-relaxed mb-6"
            data-animate
          >
            &ldquo;Rejoignez le club et accédez à tous les cours de nos professeurs, depuis votre salon.&rdquo;
          </p>
          <div data-animate style={{ transitionDelay: '200ms' }}>
            <SignupCTA label="Rejoindre le club" utmContent="profs-cta" />
          </div>
        </div>
      </section>
    </>
  )
}
