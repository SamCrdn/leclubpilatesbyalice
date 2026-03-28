import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { safeBgUrl } from '@/lib/safeBgUrl'

export const metadata: Metadata = {
  title: 'Blog Pilates — Conseils & bien-être par nos expertes',
  description:
    'Découvrez nos articles sur le Pilates, le bien-être, la nutrition et la santé féminine. Conseils d\'expertes, guides pratiques et inspiration. Rejoignez +1 000 membres actives.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Pilates — Conseils & bien-être par nos expertes',
    description: 'Articles Pilates, bien-être, nutrition et santé féminine par les expertes du Club Pilates.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'}/blog`,
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'}/images/blog-1.jpg`, width: 1200, height: 630, alt: 'Blog du Club Pilates — Conseils Pilates & bien-être' }],
  },
}

const categories = ['Tous', 'Pilates', 'Nutrition', 'Bien-être', 'Conseils', 'Témoignages']

const posts = [
  {
    slug:      'comment-commencer-pilates',
    cat:       'Pilates',
    title:     'Comment commencer le Pilates quand on est débutante',
    excerpt:   'Le Pilates peut sembler intimidant au premier abord. Voici notre guide complet pour commencer en douceur et progresser à votre rythme.',
    date:      '12 mars 2025',
    readTime:  '5 min',
    featured:  true,
    image:     '/images/blog-1.jpg',
  },
  {
    slug:      'pilates-renforcement-musculaire',
    cat:       'Pilates',
    title:     'Pilates vs musculation : quelles différences pour la silhouette ?',
    excerpt:   'Comprendre les spécificités de chaque méthode pour choisir celle qui correspond à vos objectifs.',
    date:      '5 mars 2025',
    readTime:  '7 min',
    featured:  false,
    image:     '/images/blog-2.jpg',
  },
  {
    slug:      'routine-matin-pilates',
    cat:       'Bien-être',
    title:     '5 exercices Pilates pour bien commencer sa journée',
    excerpt:   'Une routine de 15 minutes le matin pour activer le corps et l\'esprit. Aucun équipement nécessaire.',
    date:      '28 fév. 2025',
    readTime:  '4 min',
    featured:  false,
    image:     '/images/blog-3.jpg',
  },
  {
    slug:      'alimentation-pratique-sportive',
    cat:       'Nutrition',
    title:     'Bien manger pour soutenir sa pratique sportive',
    excerpt:   'Les principes nutritionnels essentiels pour nourrir votre corps et optimiser vos entraînements.',
    date:      '20 fév. 2025',
    readTime:  '6 min',
    featured:  false,
    image:     '/images/blog-4.jpg',
  },
  {
    slug:      'pilates-dos-douleurs',
    cat:       'Conseils',
    title:     'Pilates et douleurs de dos : ce que dit la science',
    excerpt:   'De nombreuses études confirment l\'efficacité du Pilates pour réduire les lombalgies. Explications et exercices recommandés.',
    date:      '14 fév. 2025',
    readTime:  '8 min',
    featured:  false,
    image:     '/images/blog-5.jpg',
  },
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Blog Le Club Pilates',
  description: 'Conseils Pilates, bien-être et nutrition par les expertes du Club Pilates',
  url: `${siteUrl}/blog`,
  publisher: { '@type': 'Organization', name: 'Le Club Pilates', url: siteUrl },
  blogPost: posts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Alice', url: `${siteUrl}/about` },
    publisher: { '@type': 'Organization', name: 'Le Club Pilates', url: siteUrl },
  })),
}

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const rest     = posts.filter(p => !p.featured)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {/* Header */}
      <div className="pt-32 pb-16 bg-cream">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Blog</p>
          <h1 className="max-w-xl" data-animate style={{ transitionDelay: '100ms' }}>
            Conseils, <em className="italic">inspiration</em> & bien-être
          </h1>
        </div>
      </div>

      {/* Category filter */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-sand/30">
        <div className="section-wrapper">
          <div className="flex gap-6 overflow-x-auto scrollbar-none py-4">
            {categories.map(c => (
              <button key={c}
                className="text-xs tracking-[0.15em] uppercase whitespace-nowrap font-light text-cocoa/50 hover:text-cocoa transition-colors pb-0.5 border-b border-transparent hover:border-cocoa first:text-cocoa first:border-cocoa">
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-section bg-chalk">
        <div className="section-wrapper">

          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-sand/30"
              data-animate>
              <div className="aspect-[16/10] bg-sand/30 overflow-hidden rounded-sm">
                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: safeBgUrl(featured.image) }}
                  role="img" aria-label={featured.title} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="eyebrow mb-3">{featured.cat} · Article à la une</p>
                <h2 className="mb-4 group-hover:opacity-70 transition-opacity">{featured.title}</h2>
                <p className="text-cocoa/60 font-light leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-mink font-light mb-6">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-sand" />
                  <span>{featured.readTime} de lecture</span>
                </div>
                <span className="btn-ghost self-start">
                  Lire l'article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group block"
                data-animate style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="aspect-[16/10] bg-sand/30 overflow-hidden mb-4 rounded-sm">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: safeBgUrl(post.image) }}
                    role="img" aria-label={post.title} />
                </div>
                <p className="eyebrow mb-2">{post.cat}</p>
                <h3 className="font-display text-xl font-light mb-2 group-hover:opacity-70 transition-opacity leading-snug">{post.title}</h3>
                <p className="text-xs text-mink font-light">{post.date} · {post.readTime}</p>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}
