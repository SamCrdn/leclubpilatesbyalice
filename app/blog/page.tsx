import type { Metadata } from 'next'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { allPostsQuery } from '@/lib/sanity.queries'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog Pilates — Conseils & bien-être',
  description: 'Conseils Pilates, bien-être et santé féminine par nos expertes certifiées. Guides pratiques, programmes et inspiration pour votre pratique.',
  alternates: { canonical: '/blog' },
  robots: { index: true, follow: true },
}

type Post = {
  _id: string
  title: string
  slug: string
  category: string
  excerpt: string
  readTime?: string
  publishedAt: string
  featured?: boolean
}

const categories = ['Tous', 'Pilates', 'Nutrition', 'Bien-être', 'Conseils', 'Témoignages']

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPage() {
  const posts: Post[] = client
    ? await client.fetch(allPostsQuery).catch(() => [])
    : []

  return (
    <>
      {/* Header */}
      <div className="pt-40 pb-16 bg-cream">
        <div className="section-wrapper">
          <p className="eyebrow mb-4" data-animate>Blog</p>
          <h1 className="max-w-xl" data-animate style={{ transitionDelay: '100ms' }}>
            <span className="whitespace-nowrap">Conseils, <em className="italic">inspiration</em></span><br />& bien-être
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

      {/* Articles ou placeholder */}
      <div className="py-section bg-chalk">
        <div className="section-wrapper">
          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20" data-animate>
              <p className="font-display text-4xl font-light italic text-cocoa/30 mb-4">Bientôt disponible</p>
              <p className="text-sm font-light text-cocoa/40">Les articles arrivent très prochainement.</p>
            </div>
          ) : (
            <>
              {/* Article featured */}
              {posts.filter(p => p.featured).slice(0, 1).map(post => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group block border border-cocoa/10 bg-cream rounded-sm p-8 mb-10 hover:border-cocoa/30 transition-colors"
                  data-animate
                >
                  <p className="eyebrow mb-3">{post.category}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-cocoa leading-tight mb-4 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h2>
                  <p className="text-sm text-cocoa/55 font-light leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-mink font-light">
                    <span>{formatDate(post.publishedAt)}</span>
                    {post.readTime && <>
                      <span className="w-1 h-1 rounded-full bg-sand" />
                      <span>{post.readTime} de lecture</span>
                    </>}
                    <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}

              {/* Grille articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.filter(p => !p.featured).map((post, i) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group block border border-cocoa/10 bg-cream rounded-sm p-6 hover:border-cocoa/30 transition-colors"
                    data-animate
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <p className="eyebrow mb-3">{post.category}</p>
                    <h2 className="font-display text-xl font-light text-cocoa leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                      {post.title}
                    </h2>
                    <p className="text-xs text-cocoa/50 font-light leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-mink font-light">
                      <span>{formatDate(post.publishedAt)}</span>
                      {post.readTime && <>
                        <span className="w-1 h-1 rounded-full bg-sand" />
                        <span>{post.readTime}</span>
                      </>}
                      <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
