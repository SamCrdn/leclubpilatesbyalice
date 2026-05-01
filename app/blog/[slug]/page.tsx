import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { PortableText } from 'next-sanity'
import { client, urlFor } from '@/lib/sanity'
import { postBySlugQuery, allSlugsQuery } from '@/lib/sanity.queries'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  if (!client) return []
  const slugs = await client.fetch(allSlugsQuery).catch(() => [])
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!client) return {}
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) return {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'
  return {
    title: `${post.title} — Le Club Pilates`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      ...(post.mainImage && {
        images: [{ url: urlFor(post.mainImage).width(1200).height(630).url(), width: 1200, height: 630 }],
      }),
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <figure className="my-10">
        <div className="relative aspect-video rounded-sm overflow-hidden">
          <Image
            src={urlFor(value).width(1200).height(675).url()}
            alt={value.alt ?? ''}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {value.caption && (
          <figcaption className="mt-3 text-xs text-center text-cocoa/40 font-light">{value.caption}</figcaption>
        )}
      </figure>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="font-display text-3xl font-light text-cocoa mt-12 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-display text-2xl font-light text-cocoa mt-8 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-cocoa/70 font-light leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-sand pl-6 my-8 font-display text-xl font-light italic text-cocoa/60">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-medium text-cocoa">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-cocoa hover:opacity-70 transition-opacity">
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!client) notFound()
  const post = await client.fetch(postBySlugQuery, { slug })
  if (!post) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    url: `${siteUrl}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Alice', url: `${siteUrl}/about` },
    publisher: { '@type': 'Organization', name: 'Le Club Pilates', url: siteUrl },
    ...(post.mainImage && { image: urlFor(post.mainImage).width(1200).height(630).url() }),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero image */}
      {post.mainImage && (
        <div className="relative h-[50vh] min-h-[320px] max-h-[520px] mt-16 md:mt-20">
          <Image
            src={urlFor(post.mainImage).width(1600).height(900).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-cocoa/40" />
        </div>
      )}

      <article className={`bg-cream ${!post.mainImage ? 'pt-36' : ''}`}>
        <div className="section-wrapper max-w-3xl py-16">

          {/* Retour */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light mb-12">
            <ArrowLeft size={14} /> Tous les articles
          </Link>

          {/* Meta */}
          <p className="eyebrow mb-4">{post.category}</p>
          <h1 className="font-display text-4xl md:text-5xl font-light text-cocoa leading-tight mb-6">{post.title}</h1>
          <p className="text-cocoa/50 font-light mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-mink font-light pb-10 border-b border-sand/30 mb-10">
            <span>{formatDate(post.publishedAt)}</span>
            {post.readTime && <>
              <span className="w-1 h-1 rounded-full bg-sand" />
              <span>{post.readTime} de lecture</span>
            </>}
          </div>

          {/* Contenu */}
          <div className="prose-custom">
            {post.body && <PortableText value={post.body} components={ptComponents} />}
          </div>

          {/* CTA fin d'article */}
          <div className="mt-16 pt-10 border-t border-sand/30 text-center">
            <p className="font-display text-2xl font-light italic text-cocoa mb-6">Envie de pratiquer ?</p>
            <a
              href="https://app.leclubpilates.com/join?utm_source=site&utm_medium=blog&utm_campaign=article-cta"
              className="btn-primary"
            >
              7 jours gratuits
            </a>
          </div>

        </div>
      </article>
    </>
  )
}
