import type { Metadata } from 'next'
import Image from 'next/image'
import BreadcrumbJsonLd from '@/components/ui/BreadcrumbJsonLd'
import ReservationForm from './ReservationForm'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Retraite Pilates à Ibiza — 5 jours bien-être · Le Club Pilates',
  description:
    'Retraite Pilates à Ibiza du 25 au 29 septembre 2026 : 5 jours & 4 nuits dans une villa exceptionnelle, 2 cours de Pilates par jour, cuisine végétarienne, randonnée. 10 participants maximum.',
  alternates: { canonical: `${siteUrl}/retraite` },
  keywords: ['retraite pilates', 'retraite ibiza', 'retraite bien-être', 'stage pilates ibiza', 'retraite pilates 2026'],
  openGraph: {
    title: 'Retraite Pilates à Ibiza — 5 jours bien-être · Le Club Pilates',
    description: '5 jours & 4 nuits dans une villa à Ibiza : 2 cours de Pilates/jour, cuisine végétarienne, randonnée. Du 25 au 29 septembre 2026. 10 participants max.',
    url: `${siteUrl}/retraite`,
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Le Club Pilates',
    images: [{ url: `${siteUrl}/images/Retraites/retraite-pilates-ibiza-villa.jpg`, width: 1200, height: 630, alt: 'Retraite Pilates à Ibiza — Le Club Pilates' }],
  },
}

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Retraite Pilates à Ibiza',
  description: '5 jours & 4 nuits dans une villa exceptionnelle à Ibiza : 2 cours de Pilates par jour, cuisine végétarienne saine, randonnée et balades au coucher du soleil. Ouvert à tous les niveaux, 10 participants maximum.',
  startDate: '2026-09-25',
  endDate: '2026-09-29',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Villa Ibiza — Cala de Bou',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cala de Bou',
      addressRegion: 'Ibiza',
      addressCountry: 'ES',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Le Club Pilates',
    url: siteUrl,
  },
  offers: {
    '@type': 'Offer',
    price: '1350',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/LimitedAvailability',
    url: `${siteUrl}/retraite#reservation`,
    validFrom: '2026-01-01',
  },
  image: `${siteUrl}/images/Retraites/retraite-pilates-ibiza-villa.jpg`,
  url: `${siteUrl}/retraite`,
  maximumAttendeeCapacity: 10,
}

// ── Image selections ──────────────────────────────────────────────────────────
const PROGRAMME = [
  { src: '/images/Retraites/cours-pilates-groupe-rooftop-ibiza.jpg', alt: 'Cours de Pilates en groupe sur le rooftop de la villa à Ibiza' },
  { src: '/images/Retraites/seance-pilates-coucher-soleil-ibiza.jpg', alt: 'Séance Pilates au coucher du soleil à Ibiza' },
  { src: '/images/Retraites/groupe-pilates-rooftop-villa-ibiza.jpg', alt: 'Groupe de Pilates sur le rooftop de la villa à Ibiza' },
]

const VILLA = [
  { src: '/images/Retraites/20230615_072811000_iOS.jpg', alt: 'Salon et salle à manger de la villa, arches blanches' },
  { src: '/images/Retraites/20230615_175605000_iOS.jpg', alt: 'Piscine avec daybed et vue sur la mer' },
  { src: '/images/Retraites/20230615_164600000_iOS.jpg', alt: 'Piscine avec chaises longues et parasol macramé' },
  { src: '/images/Retraites/20230613_104103000_iOS.jpg', alt: 'Chambre avec fauteuil suspendu en rotin' },
  { src: '/images/Retraites/20230613_101829000_iOS.jpg', alt: 'Couloir menant à la chambre lumineuse' },
  { src: '/images/Retraites/20230613_105941000_iOS.jpg', alt: 'Salle de bain avec vasque en pierre et miroir en bois' },
  { src: '/images/Retraites/20230615_170219000_iOS.jpg', alt: 'Reflet du daybed dans la piscine' },
  { src: '/images/Retraites/20230615_175438000_iOS.jpg', alt: 'Vue sur la piscine à travers un miroir en rotin' },
  { src: '/images/Retraites/20230615_181456000_iOS.jpg', alt: 'Extérieur de la villa avec arche et piscine' },
  { src: '/images/Retraites/20230615_181837000_iOS.jpg', alt: 'Piscine vue à travers l\'arche de la villa' },
  { src: '/images/Retraites/20230614_090419000_iOS.jpg', alt: 'Salon avec table tronc et décoration gecko' },
  { src: '/images/Retraites/20230613_131550000_iOS.jpg', alt: 'Chambre avec ventilateur et tableau surf' },
  { src: '/images/Retraites/20230616_065212000_iOS.jpg', alt: 'Chambre avec tableau mandala et fauteuil rotin' },
  { src: '/images/Retraites/20230613_110355000_iOS.jpg', alt: 'Détail salle de bain, échelle à serviettes et vase' },
  { src: '/images/Retraites/20230614_181728000_iOS.jpg', alt: 'Plage d\'Ibiza au coucher du soleil' },
  { src: '/images/Retraites/20240524_145017000_iOS.jpg', alt: 'Terrasse petit-déjeuner de la villa' },
  { src: '/images/Retraites/seance-pilates-coucher-soleil-ibiza.jpg', alt: 'Séance Pilates sur le rooftop de la villa à Ibiza' },
  { src: '/images/Retraites/20251003_084944000_iOS.jpg', alt: 'Cours de Pilates sur le rooftop, vue sur Ibiza' },
]

const CUISINE = [
  { src: '/images/Retraites/20230519_090743000_iOS.jpg', alt: 'Tarte verte aux framboises' },
  { src: '/images/Retraites/20230531_135016000_iOS.jpg', alt: 'Boules coco rose betterave' },
  { src: '/images/Retraites/20230604_072903000_iOS.jpg', alt: 'Chocolats aux fleurs blanches' },
  { src: '/images/Retraites/20230616_064009000_iOS.jpg', alt: 'Smoothie bowl fruits rouges et granola' },
  { src: '/images/Retraites/20230712_183940000_iOS.jpg', alt: 'Tarte aux abricots et fleurs sauvages' },
  { src: '/images/Retraites/20230909_181948000_iOS.jpg', alt: 'Grande table de partage végétarienne' },
  { src: '/images/Retraites/20240524_145021000_iOS.jpg', alt: 'Pain brioché tressé aux fleurs' },
  { src: '/images/Retraites/20240601_185036000_iOS.jpg', alt: 'Bols granola fraises' },
  { src: '/images/Retraites/20240603_095607000_iOS.jpg', alt: 'Table petit-déjeuner colorée' },
  { src: '/images/Retraites/20240604_095546000_iOS.jpg', alt: 'Brownie chocolat noisettes et fleurs' },
  { src: '/images/Retraites/20240604_100535000_iOS.jpg', alt: 'Assiette courgettes sauce betterave et bougainvilliers' },
  { src: '/images/Retraites/20240602_112327000_iOS.jpg', alt: 'Plateau burgers végétariens et salade' },
  { src: '/images/Retraites/20241003_113315000_iOS.jpg', alt: 'Fruits rouges frais et granola' },
  { src: '/images/Retraites/20241003_113349000_iOS.jpg', alt: 'Granola, salade de tomates et yaourt' },
  { src: '/images/Retraites/20241003_113403000_iOS.jpg', alt: 'Salade de tomates aux herbes et grenade' },
  { src: '/images/Retraites/20241004_104649000_iOS.jpg', alt: 'Pain tressé aux pétales de rose' },
  { src: '/images/Retraites/20241005_102914000_iOS.jpg', alt: 'Soupe courge et tartines garnies' },
  { src: '/images/Retraites/20251001_190723000_iOS.jpg', alt: 'Verrines fruits rouges pollen d\'abeille' },
  { src: '/images/Retraites/20251002_071621000_iOS.jpg', alt: 'Bowl petit-déjeuner granola et fruits' },
  { src: '/images/Retraites/20251002_103725000_iOS.jpg', alt: 'Patates douces rôties à la grenade' },
  { src: '/images/Retraites/20251002_104343000_iOS.jpg', alt: 'Plateau tacos, salade et patates douces' },
  { src: '/images/Retraites/20251003_070806000_iOS.jpg', alt: 'Porridge aux prunes caramélisées' },
  { src: '/images/Retraites/20251003_103007000_iOS.jpg', alt: 'Assiettes végétariennes raffinées' },
  { src: '/images/Retraites/20251003_103127000_iOS.jpg', alt: 'Toast roquette et oignons marinés' },
  { src: '/images/Retraites/20251003_103242000_iOS.jpg', alt: 'Aubergines à la chermoula sur houmous' },
  { src: '/images/Retraites/20251003_174218000_iOS.jpg', alt: 'Poire pochée sur crème et granola' },
  { src: '/images/Retraites/20251004_071544000_iOS.jpg', alt: 'Bols petit-déjeuner fruits et noix' },
  { src: '/images/Retraites/20251004_104614000_iOS.jpg', alt: 'Burger et patate douce au pesto' },
  { src: '/images/Retraites/20251004_183901000_iOS.jpg', alt: 'Risotto aux asperges et tomates confites' },
  { src: '/images/Retraites/20251005_080611000_iOS.jpg', alt: 'Carottes rôties aux figues et betterave' },
  { src: '/images/Retraites/20251005_080643000_iOS.jpg', alt: 'Table de partage, carottes et cake' },
  { src: '/images/Retraites/20251007_095235000_iOS.jpg', alt: 'Assiette colorée tacos végétariens' },
]

const INCLUS = [
  'Hébergement en villa',
  'Repas végétariens et snacks',
  'Navettes sur place',
  '2 cours de Pilates par jour',
  'Tapis de Pilates fournis',
  'Accessoires de Pilates offerts',
  'Randonnée avec vue exceptionnelle',
  'Balades au coucher du soleil',
  'Gift bag bien-être',
]

const NON_INCLUS = [
  'Vols',
  'Massages',
  'Déplacements personnels',
]

export default function RetraitePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Retraite Pilates Ibiza', href: '/retraite' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />

      {/* ── 1. HERO VIDÉO ───────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden bg-cocoa">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/Retraites/retraite-pilates-ibiza-villa.jpg"
          aria-hidden="true"
        >
          <source src="/videos/retraite-pilates-ibiza.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-cocoa/75 via-cocoa/20 to-transparent" aria-hidden="true" />
        <div className="section-wrapper relative z-10 w-full">
          <h1
            className="font-display font-light text-cream mb-8 animate-fade-up leading-[1.05]"
            style={{ animationDelay: '350ms' }}
          >
            Retraite Pilates<br />
            <em className="italic">à Ibiza.</em>
          </h1>
          <p
            className="text-cream/80 font-body font-light text-lg mb-10 max-w-lg leading-relaxed animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            5 jours & 4 nuits dans une villa exceptionnelle. Pilates, cuisine saine, reconnexion. Du 25 au 29 septembre 2026.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '650ms' }}>
            <a href="#reservation" className="btn-primary">Réserver ma place</a>
          </div>
          <p
            className="mt-6 text-xs text-cream/40 font-light tracking-wider uppercase animate-fade-in"
            style={{ animationDelay: '800ms' }}
          >
            10 participants maximum · Paiement en 2 fois possible
          </p>
        </div>
      </section>

      {/* ── 2. DATES & INTRO ─────────────────────────────────────────────────── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper max-w-4xl mx-auto text-center">
          <p className="eyebrow text-sand-dark mb-8" data-animate>La prochaine retraite</p>
          <h2 className="font-display font-light text-cocoa mb-4" data-animate style={{ transitionDelay: '100ms' }}>
            Du vendredi 25 au mardi 29 septembre 2026
          </h2>
          <div className="flex items-center justify-center gap-8 mt-8 mb-10 text-sm text-cocoa/50 font-light tracking-wide" data-animate style={{ transitionDelay: '150ms' }}>
            <span>5 jours & 4 nuits</span>
            <span className="w-px h-4 bg-cocoa/20" aria-hidden="true" />
            <span>10 participants maximum</span>
            <span className="w-px h-4 bg-cocoa/20 hidden sm:block" aria-hidden="true" />
            <span className="hidden sm:block">1 350 €</span>
          </div>
          <p className="text-sm text-cocoa/60 font-light leading-relaxed mb-10" data-animate style={{ transitionDelay: '200ms' }}>
            Offrez-vous une parenthèse hors du temps dans un cadre exceptionnel à Ibiza,
            entre bien-être, mouvement et détente.
          </p>
          <div data-animate style={{ transitionDelay: '250ms' }}>
            <a href="#reservation" className="btn-primary">Réserver ma place</a>
          </div>
        </div>
      </section>

      {/* ── 3. LA VILLA ──────────────────────────────────────────────────────── */}
      <section className="py-section bg-sand/10 overflow-hidden">
        <div className="section-wrapper mb-12">
          <p className="font-mono text-xs text-sand-dark tracking-widest mb-4" data-animate>LA VILLA</p>
          <div className="mb-6" data-animate style={{ transitionDelay: '100ms' }}>
            <h2 className="font-display font-light text-cocoa max-w-2xl mb-4">
              Une villa de rêve sur une île féerique.
            </h2>
            <p className="text-xs text-cocoa/35 font-light tracking-widest uppercase" data-animate style={{ transitionDelay: '150ms' }}>
              📍 Cala de Bou · sud-ouest de l&apos;île · 20 min de l&apos;aéroport
            </p>
          </div>
          <div className="max-w-2xl space-y-4 text-sm text-cocoa/60 font-light leading-relaxed" data-animate style={{ transitionDelay: '200ms' }}>
            <p>
              Située à l&apos;ouest de l&apos;île, la villa est le lieu idéal pour une véritable parenthèse enchantée. Ce havre de paix, à la fois authentique et moderne, a été pensé dans les moindres détails pour vous offrir une expérience de déconnexion. Vous profiterez d&apos;une piscine élégante, d&apos;un rooftop pour les séances de Pilates et d&apos;une terrasse conviviale pour partager de délicieux repas.
            </p>
            <p>
              Les chambres sont en duo, équipées de deux lits simples (possibilité de les réunir en un grand lit), avec salle de bain et toilettes privatives.
            </p>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
          {VILLA.map(({ src, alt }, i) => (
            <div key={src} className="relative flex-none w-[55vw] sm:w-[32vw] lg:w-[22vw] aspect-[3/4] rounded-sm overflow-hidden snap-start" data-animate style={{ transitionDelay: `${i * 60}ms` }}>
              <Image src={src} alt={alt} fill className="object-cover" sizes="32vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. LE PROGRAMME ──────────────────────────────────────────────────── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="font-mono text-xs text-sand-dark tracking-widest mb-6" data-animate>LE PROGRAMME</p>
            <h2 className="font-display font-light text-cocoa mb-8" data-animate style={{ transitionDelay: '100ms' }}>
              Bougez. Respirez. Ressentez.
            </h2>
            <div className="space-y-5 text-sm text-cocoa/60 font-light leading-relaxed" data-animate style={{ transitionDelay: '150ms' }}>
              <p>
                Offrez-vous un moment de reconnexion à vous-même grâce à 2 cours de Pilates par jour d&apos;environ 1h30. Chaque séance est pensée pour explorer le mouvement en profondeur&nbsp;: stretching, renforcement musculaire, séances plus dynamiques et breathwork rythmeront votre séjour.
              </p>
              <p>
                La retraite est ouverte à tous les niveaux. En petit groupe de 10 participants avec des ajustements adaptés à vos besoins et à votre niveau.
              </p>
              <p>
                Pour compléter cette immersion, différentes activités sont proposées selon la météo&nbsp;: randonnée avec vue sublime, balades au coucher du soleil… autant de moments pour s&apos;émerveiller de la beauté de l&apos;île et se reconnecter à l&apos;essentiel.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {PROGRAMME.map(({ src, alt }, i) => (
              <div key={src} className="relative aspect-[3/4] rounded-sm overflow-hidden" data-animate style={{ transitionDelay: `${i * 80}ms` }}>
                <Image src={src} alt={alt} fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LA CUISINE ────────────────────────────────────────────────────── */}
      <section className="py-section bg-sand/10">
        <div className="section-wrapper">
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-sand-dark tracking-widest mb-4" data-animate>LA CUISINE</p>
            <h2 className="font-display font-light text-cocoa" data-animate style={{ transitionDelay: '100ms' }}>
              Repas végétariens & sains
            </h2>
            <p className="mt-4 text-sm text-cocoa/50 font-light max-w-lg mx-auto" data-animate style={{ transitionDelay: '150ms' }}>
              Des plats végétariens, colorés et nourrissants, préparés avec soin pour accompagner votre immersion.
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-hide -mx-4 md:-mx-8 px-4 md:px-8 pb-4">
            <div className="grid grid-rows-2 grid-flow-col gap-3 w-max">
              {CUISINE.map(({ src, alt }, i) => (
                <div key={src} className="relative w-52 h-52 sm:w-60 sm:h-60 overflow-hidden rounded-sm flex-none" data-animate style={{ transitionDelay: `${(i % 16) * 40}ms` }}>
                  <Image src={src} alt={alt} fill className="object-cover" sizes="240px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TARIFS ────────────────────────────────────────────────────────── */}
      <section className="py-section bg-cream">
        <div className="section-wrapper">

          <p className="eyebrow text-sand-dark mb-12" data-animate>Tarif</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-stretch">

            {/* Carte prix */}
            <div className="bg-cocoa rounded-sm p-10 flex flex-col gap-10" data-animate>
              <div>
                <p className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-light text-cream leading-none">
                  1 350 €
                </p>
                <p className="mt-3 text-xs text-cream/30 tracking-widest font-light uppercase">Paiement en 2 fois possible</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-5 font-light">Inclus</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                  {INCLUS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-cream/70 font-light">
                      <span className="w-1 h-1 rounded-full bg-sand flex-none" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#reservation" className="inline-flex items-center gap-2 bg-cream text-cocoa font-body font-light text-xs tracking-widest uppercase px-6 py-3 rounded-pill transition-all duration-300 hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]">
                  Réserver ma place
                </a>
              </div>
            </div>

            {/* Carte non inclus */}
            <div className="border border-cocoa/10 rounded-sm p-10 flex flex-col gap-8" data-animate style={{ transitionDelay: '100ms' }}>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-cocoa/40 mb-5 font-light">Non inclus</p>
                <ul className="space-y-3">
                  {NON_INCLUS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-cocoa/40 font-light">
                      <span className="w-1 h-1 rounded-full bg-cocoa/20 flex-none" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-cocoa/50 font-light leading-relaxed">
                Les places sont limitées à 10 participants. Envoyez votre demande et nous vous recontacterons pour confirmer.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 9. FORMULAIRE DE RÉSERVATION ─────────────────────────────────────── */}
      <section id="reservation" className="py-section bg-cream scroll-mt-24">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Image */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden" data-animate>
              <Image
                src="/images/Retraites/randonnee-retraite-ibiza.jpg"
                alt="Groupe lors de la randonnée à Ibiza"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* Form */}
            <div>
              <p className="eyebrow text-sand-dark mb-6" data-animate>Réservation</p>
              <h2 className="font-display font-light text-cocoa mb-3" data-animate style={{ transitionDelay: '100ms' }}>
                Réservez votre place
              </h2>
              <p className="text-sm text-cocoa/50 font-light mb-8" data-animate style={{ transitionDelay: '150ms' }}>
                Les places sont limitées à 10 participants. Envoyez-nous votre demande et nous vous recontacterons pour confirmer votre réservation.
              </p>
              <ReservationForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
