import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.leclubpilates.com'

const categories = [
  { label: 'Express',      image: '/images/cours/cours-pilates-express.jpg',        href: 'https://app.leclubpilates.com/categories/express' },
  { label: 'Full Body',    image: '/images/cours/cours-pilates-full-body.jpg',       href: '/cours-de-pilates/full-body' },
  { label: 'Haut du corps',image: '/images/cours/cours-pilates-haut-du-corps.jpg',  href: 'https://app.leclubpilates.com/categories/haut-du-corps' },
  { label: 'Bas du corps', image: '/images/cours/cours-pilates-bas-du-corps.jpg',   href: 'https://app.leclubpilates.com/categories/bas-du-corps' },
  { label: 'Abdos',        image: '/images/cours/cours-pilates-abdominaux.jpg',      href: 'https://app.leclubpilates.com/categories/abdos' },
  { label: 'Intense',      image: '/images/cours/cours-pilates-intense.jpg',         href: 'https://app.leclubpilates.com/categories/intense' },
  { label: 'Doux',         image: '/images/cours/cours-pilates-doux.jpg',            href: 'https://app.leclubpilates.com/categories/doux' },
  { label: 'Mama',         image: '/images/cours/cours-pilates-mama.jpg',            href: '/cours-de-pilates/prenatal' },
  { label: 'Méditation',   image: '/images/cours/cours-pilates-meditation.jpg',      href: 'https://app.leclubpilates.com/categories/meditation' },
  { label: 'Pilates Wall', image: '/images/cours/cours-pilates-wall.jpg',            href: '/cours-de-pilates/wall' },
  { label: 'Reformer',     image: '/images/cours/cours-pilates-reformer.jpg',        href: '/cours-de-pilates/reformer' },
  { label: 'Stretching',   image: '/images/cours/cours-pilates-stretching.jpg',      href: 'https://app.leclubpilates.com/categories/stretching' },
  { label: 'Accessoires',  image: '/images/cours/cours-pilates-accessoires.jpg',     href: 'https://app.leclubpilates.com/categories/accessoires' },
]

const classes = [
  {
    slug:      'pilates-debutant',
    href:      'https://app.leclubpilates.com/programs/debutant',
    tag:       'Pilates Beginner',
    title:     'Fondamentaux du Pilates',
    weeks:     '6 semaines',
    level:     'Débutant',
    image:     '/images/programme-pilates-beginner.jpg',
  },
  {
    slug:      'pilates-renforcement',
    href:      'https://app.leclubpilates.com/programs/pilates-sculpt',
    tag:       'Pilates Sculpt',
    title:     'Full body',
    weeks:     '4 semaines',
    level:     'Intermédiaire / Avancé',
    image:     '/images/programme-pilates-sculpt.jpg',
  },
  {
    slug:      'pilates-mama',
    href:      'https://app.leclubpilates.com/programs/pilates-mama',
    tag:       'Pilates Mama',
    title:     'Pilates pour femmes enceintes',
    weeks:     '12 mois',
    level:     'Prénatal et postnatal',
    image:     '/images/programme-pilates-mama.jpg',
  },
  {
    slug:      'pilates-summer-body',
    href:      'https://app.leclubpilates.com/programs/summer-reset',
    tag:       'Summer Reset',
    title:     'Full Body',
    weeks:     '4 semaines',
    level:     'Tous niveaux',
    image:     '/images/programme-summer-reset.jpg',
  },
  {
    slug:      'pilates-booty-sculpt',
    href:      'https://app.leclubpilates.com/programs/booty-sculpt',
    tag:       'Booty Sculpt',
    title:     'Fessiers et bas du corps',
    weeks:     '3 semaines',
    level:     'Tous niveaux',
    image:     '/images/programme-booty-sculpt.jpg',
  },
]

function CategoryCard({ label, image, href }: { label: string; image: string; href: string }) {
  const isInternal = href.startsWith('/')
  const inner = (
    <>
      <Image src={image} alt={`Cours de Pilates ${label}`} fill sizes="(max-width: 768px) 176px, 224px" className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-body font-light text-sm tracking-widest text-white lowercase">{label}</span>
      </div>
    </>
  )
  const className = "relative shrink-0 w-52 md:w-64 aspect-[3/2] overflow-hidden group block"
  return isInternal
    ? <Link href={href} className={className}>{inner}</Link>
    : <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{inner}</a>
}

export default function ClassesPreview() {
  return (
    <section aria-labelledby="classes-title" className="py-section bg-cream">
      <div className="section-wrapper">

        <div className="mb-10" data-animate>
          <p className="eyebrow mb-4">Les cours</p>
          <h2 id="classes-title">Des cours de Pilates pour <em className="italic">chaque moment</em></h2>
          <div className="max-w-2xl mt-6">
            <p className="text-cocoa/70 font-light leading-relaxed mb-3">
              Une bibliothèque de cours pensée pour te simplifier la vie.
            </p>
            <p className="text-cocoa/60 font-light leading-relaxed text-sm mb-6">
              Le studio en ligne est structuré en plusieurs catégories selon tes objectifs : zones du corps, intensité ou format. Tu trouves facilement des séances adaptées à ton niveau, ton temps et ton envie du jour. Ajoute tes vidéos en favoris, laisse des commentaires et crée ta liste de favoris. Une approche simple et intuitive pour te concentrer pleinement sur ton bien-être.
            </p>
            <a href="https://app.leclubpilates.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Voir tous les cours
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>

      {/* Bandeau catégories — 1 rangée, contenu dans le wrapper */}
      <div className="section-wrapper pb-8 md:pb-10">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-slow gap-3">
            {[...categories, ...categories].map((c, i) => (
              <CategoryCard key={i} {...c} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-wrapper">

        <div className="mb-10" data-animate>
          <p className="text-cocoa/70 font-light leading-relaxed mb-3">Des programmes pour aller plus loin.</p>
          <p className="text-cocoa/60 font-light leading-relaxed text-sm max-w-2xl mb-6">
            Accède à des programmes complets : des packs de vidéos conçus autour d'un objectif ou d'une thématique, organisés sur une période définie. Chaque programme est pensé pour être suivi pas à pas, afin de rester focus, progresser efficacement et te laisser guider sans te poser de questions.
          </p>
          <a href="https://app.leclubpilates.com/categories/programmes" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Voir tous les programmes
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Class cards — slider mobile / grid desktop */}
        <div className="relative">
        <div className="flex md:grid md:grid-cols-5 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 md:pb-0 overscroll-x-contain">
          {classes.map((c) => (
            <a
              key={c.slug}
              href={c.href ?? `${APP_URL}/classes/${c.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden shrink-0 w-[65vw] md:w-auto snap-start"
            >
              <div className="aspect-[4/4] bg-sand/30 overflow-hidden mb-5 relative">
                <Image
                  src={c.image}
                  alt={`Programme ${c.tag}`}
                  fill
                  sizes="(max-width: 768px) 65vw, 20vw"
                  className="object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cocoa/15 group-hover:bg-cocoa/25 transition-colors" />
              </div>
              <h3 className="font-display text-xl font-light mb-2 group-hover:text-cocoa-mid transition-colors">
                {c.title}
              </h3>
              <p className="text-xs text-mink font-light">{c.weeks} · {c.level}</p>
            </a>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-cream to-transparent pointer-events-none md:hidden flex items-center justify-end pr-2" aria-hidden="true">
          <span className="text-cocoa/40 text-base">→</span>
        </div>
        </div>

      </div>
    </section>
  )
}
