import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, Layers, MonitorSmartphone } from 'lucide-react'
import { client } from '@/lib/sanity'
import { testimonialsQuery } from '@/lib/sanity.queries'
import { FALLBACK } from '@/components/sections/TestimonialsSection'
import type { Testimonial } from '@/components/sections/TestimonialsCarousel'
import EssaiCTA from './EssaiCTA'
import StickyCTA from './StickyCTA'
import EssaiVideo from './EssaiVideo'
import { LIENS_PAIEMENT } from '@/lib/offres'

// ── Liens et médias ────────────────────────────────────
const LIEN_ANNUEL = LIENS_PAIEMENT.annuel
const LIEN_MENSUEL = LIENS_PAIEMENT.mensuel
const VIDEO_URL: string = '/videos/essai-alice-presentation.mp4'           // vidéo verticale, avec son (muette au départ)
const VIDEO_POSTER: string = '/images/essai-alice-presentation-poster.jpg' // image affichée pendant le chargement
const VIDEO_FOND: string = '/videos/essai-alice-fond.mp4'                  // même vidéo en très basse définition, floutée en fond
const LIEN_SEANCE_OFFERTE: string = '' // vide = lien masqué

// ── Avis Google (à tenir à jour, comme dans StatsBar) ──
const NOTE_GOOGLE = '5'
const NB_AVIS_GOOGLE = 81

export const revalidate = 3600

export const metadata: Metadata = {
  title: '7 jours de Pilates gratuits',
  description: 'Des cours guidés par Alice, pour tous les niveaux.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: '/essai' },
}

const POINTS = [
  { icon: Clock,             text: 'Des séances de 5 à 55 min, pour tous les niveaux' },
  { icon: Layers,            text: 'Des programmes guidés, dont un pour bien débuter' },
  { icon: MonitorSmartphone, text: 'Sur ton téléphone, ton ordinateur ou ta TV' },
]

const AVIS = ['Audrey', 'Noémie', 'Laurence']

const FAQ = [
  { q: 'Je débute, c\'est pour moi ?', a: 'Oui. Le programme Fondamentaux du Pilates te guide pas à pas. Ensuite, d\'autres programmes prennent le relais selon tes envies.' },
  { q: 'J\'ai besoin de matériel ?', a: 'Non. Un tapis suffit, idéalement épais (plus de 8 mm). Les petits accessoires sont en option.' },
  { q: 'Il y a des cours en direct ?', a: 'Oui, plusieurs fois par mois sur Zoom (30 à 40 min). La prof te voit et te corrige. Les replays restent disponibles.' },
  { q: 'Combien ça coûte après ?', a: 'Rien pendant 7 jours. Ensuite 229 € l\'année, soit environ 19 € par mois, ou 26,90 € au mois.' },
  { q: 'Comment j\'annule ?', a: 'Depuis ton espace membre. Avant la fin des 7 jours, tu ne paies rien. Après, tu peux résilier à tout moment et tu gardes l\'accès jusqu\'à la fin de la période payée. Les abonnements ne sont pas remboursés.' },
]

async function getAvis(): Promise<Testimonial[]> {
  const data: Testimonial[] | null = client
    ? await client.fetch(testimonialsQuery).catch(() => null)
    : null
  return AVIS.map(
    (name) =>
      data?.find((t) => t.name === name) ??
      FALLBACK.find((t) => t.name === name)!,
  )
}

/** « 34 ans · Membre » → « 34 ans » */
function age(role: string) {
  return role.split('·')[0].trim()
}

/** Garde la 1re phrase, ou les 2 premières si elles restent courtes, puis « … ». */
function extrait(quote: string) {
  const texte = quote.trim()
  const phrases = texte.match(/[^.!?]+[.!?]+/g)?.map((p) => p.trim()) ?? [texte]
  let out = phrases[0]
  if (phrases[1] && `${out} ${phrases[1]}`.length <= 140) out = `${out} ${phrases[1]}`
  return out.length < texte.length ? `${out} …` : out
}

export default async function EssaiPage() {
  const avis = await getAvis()

  return (
    <div className="min-h-screen bg-cream pb-28 lg:pb-20">

      {/* 1-4. Bannière sombre, la vidéo floutée en fond : titre, action (haut) et vidéo nette */}
      <section className="relative isolate overflow-hidden bg-cocoa pb-16 text-cream lg:pb-24">
        {VIDEO_FOND && (
          <video
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-70 blur-2xl motion-reduce:hidden"
            src={VIDEO_FOND}
            poster={VIDEO_POSTER || undefined}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cocoa/60 via-cocoa/40 to-cocoa/85" aria-hidden="true" />

        {/* Logo, sans lien */}
        <p className="mx-auto max-w-6xl px-6 pt-6 pb-8 text-center font-body font-medium tracking-[0.2em] uppercase text-sm text-cream/90 md:px-10 lg:pt-10 lg:pb-12 lg:text-left">
          Le Club Pilates
        </p>

        {/* Empilés sur mobile, côte à côte sur ordinateur */}
        <div className="mx-auto grid max-w-md gap-12 px-6 md:max-w-xl lg:max-w-6xl lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20 lg:px-10">
          <div id="cta-haut" className="text-center lg:text-left">
            <Image
              src="/images/essai-alice-avatar.jpg"
              alt="Alice, fondatrice du Club Pilates"
              width={72}
              height={72}
              priority
              className="mx-auto mb-5 h-[72px] w-[72px] rounded-full object-cover ring-2 ring-cream/40 lg:mx-0 lg:mb-7 lg:h-20 lg:w-20"
            />
            <h1 className="font-display font-light text-[2.5rem] leading-[1.05] text-cream text-balance md:text-5xl lg:text-[4.25rem]">
              7 jours de Pilates gratuits, chez toi
            </h1>
            <p className="mt-4 font-light text-cream/85 text-balance md:text-lg lg:mt-6">
              Des cours guidés par Alice, pour tous les niveaux.
            </p>
            <p className="mt-3 mb-7 flex items-center justify-center gap-2 text-sm font-light text-cream/85 lg:mb-9 lg:justify-start">
              <span className="tracking-[0.15em] text-[#E8A33D]" aria-hidden="true">★★★★★</span>
              <span>{NOTE_GOOGLE}/5 · {NB_AVIS_GOOGLE} avis Google</span>
            </p>
            <EssaiCTA
              position="haut"
              lienAnnuel={LIEN_ANNUEL}
              lienMensuel={LIEN_MENSUEL}
              fond="sombre"
              className="lg:items-start lg:text-left"
            />
          </div>

          {VIDEO_URL && <EssaiVideo src={VIDEO_URL} poster={VIDEO_POSTER} />}
        </div>
      </section>

      {/* 5. Trois points : une colonne sur mobile, trois à partir de la tablette */}
      <ul className="mx-auto mt-10 grid max-w-md gap-3 px-6 md:mt-14 md:max-w-3xl md:grid-cols-3 md:gap-4 lg:mt-20 lg:max-w-6xl lg:px-10">
        {POINTS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-4 rounded-2xl bg-chalk px-5 py-4 md:flex-col md:items-start md:gap-3 md:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-dark text-cocoa">
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="font-light leading-snug text-cocoa">{text}</span>
          </li>
        ))}
      </ul>

      {/* 6. Trois avis : à faire glisser sur mobile et tablette, en grille sur ordinateur */}
      <section aria-label="Avis de membres" className="mt-14 bg-cream-dark py-12 md:py-16 lg:mt-20 lg:py-20">
        <h2 className="mx-auto max-w-md px-6 font-display font-light text-3xl text-cocoa md:max-w-3xl md:text-4xl lg:max-w-6xl lg:px-10">
          Elles en parlent
        </h2>
        <div className="mx-auto mt-6 flex max-w-md snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:max-w-3xl lg:mt-10 lg:grid lg:max-w-6xl lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-10">
          {avis.map((t) => (
            <figure key={t.name} className="flex w-[82%] shrink-0 snap-start flex-col rounded-2xl bg-chalk p-6 md:w-[45%] lg:w-auto lg:p-8">
              <span className="text-sm tracking-[0.15em] text-[#E8A33D]" aria-label="5 étoiles sur 5">★★★★★</span>
              <blockquote className="mt-3 flex-1 font-display italic text-lg leading-snug text-cocoa lg:text-xl">
                « {extrait(t.quote)} »
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-light text-xs font-medium text-cocoa">
                  {t.initials}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase font-light text-mink">
                  {t.name}, {age(t.role)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7-8. Questions et action (bas) : empilées sur mobile, côte à côte sur ordinateur */}
      <div className="mx-auto mt-14 grid max-w-md gap-14 px-6 md:max-w-xl lg:mt-20 lg:max-w-6xl lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16 lg:px-10">
        <section aria-label="Questions fréquentes">
          <h2 className="font-display font-light text-3xl text-cocoa md:text-4xl">Tes questions</h2>
          <div className="mt-4 divide-y divide-cocoa/10 border-y border-cocoa/10 lg:mt-6">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-cocoa [&::-webkit-details-marker]:hidden">
                  {q}
                  <span className="text-xl font-light text-mink transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 font-light text-cocoa/80">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="cta-bas" className="lg:sticky lg:top-10">
          <div className="rounded-3xl bg-chalk px-6 py-10 text-center lg:px-10 lg:py-12">
            <h2 className="mb-6 font-display font-light text-3xl text-cocoa md:text-4xl">Prête à commencer ?</h2>
            <EssaiCTA position="bas" lienAnnuel={LIEN_ANNUEL} lienMensuel={LIEN_MENSUEL} />
          </div>

          {/* 9. Séance offerte, masquée tant que le lien est vide */}
          {LIEN_SEANCE_OFFERTE && (
            <p className="mt-10 text-center">
              <a href={LIEN_SEANCE_OFFERTE} className="text-sm font-light text-cocoa/70 underline underline-offset-4 hover:text-cocoa">
                Pas prête ? Reçois une séance offerte
              </a>
            </p>
          )}
        </section>
      </div>

      <StickyCTA lienAnnuel={LIEN_ANNUEL} />
    </div>
  )
}
