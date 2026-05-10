import type { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/sanity.queries'
import BlogFilter from './BlogFilter'

export const dynamic = 'force-dynamic'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  title: 'Blog Pilates — Conseils & bien-être',
  description: 'Conseils Pilates, bien-être et santé féminine par nos expertes certifiées. Guides pratiques, programmes et inspiration pour votre pratique.',
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: 'Blog Pilates — Conseils & bien-être · Le Club Pilates',
    description: 'Conseils Pilates, bien-être et santé féminine par nos expertes certifiées.',
    url: `${siteUrl}/blog`,
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Blog Le Club Pilates' }],
  },
  robots: { index: true, follow: true },
}

export default async function BlogPage() {
  const allPosts = client
    ? await client.fetch(allPostsQuery).catch(() => [])
    : []

  const itemListJsonLd = allPosts.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Blog Pilates — Le Club Pilates',
    url: `${siteUrl}/blog`,
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${siteUrl}/blog/${post.slug}`,
      name: post.title,
    })),
  } : null

  return (
    <>
      {itemListJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />}

      {/* Header */}
      <div className="pt-40 pb-16 bg-cream">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Blog</p>
          <h1 className="max-w-xl" data-animate style={{ transitionDelay: '100ms' }}>
            <span className="whitespace-nowrap">Conseils, <em className="italic">inspiration</em></span><br />& bien-être
          </h1>
        </div>
      </div>

      <BlogFilter allPosts={allPosts} />
    </>
  )
}
