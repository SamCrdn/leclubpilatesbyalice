import Link from 'next/link'
import { client } from '@/lib/sanity'
import { latestPostsQuery } from '@/lib/sanity.queries'

type Post = {
  _id: string
  title: string
  slug: string
  category: string
  excerpt: string
  readTime?: string
  publishedAt: string
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function LatestArticles() {
  const posts: Post[] = client
    ? await client.fetch(latestPostsQuery).catch(() => [])
    : []

  if (posts.length === 0) return null

  return (
    <section aria-labelledby="latest-articles-title" className="py-section bg-cream border-t border-cocoa/10">
      <div className="section-wrapper">

        <div className="flex items-end justify-between mb-12" data-animate>
          <div>
            <p className="eyebrow mb-4">Blog</p>
            <h2 id="latest-articles-title">
              Nos derniers <em className="italic">articles</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-block text-xs tracking-[0.15em] uppercase text-cocoa/40 hover:text-cocoa transition-colors font-light pb-1"
          >
            Voir tous les articles →
          </Link>
        </div>

        <div className="relative">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide pb-2 sm:pb-0 overscroll-x-contain">
          {posts.map((post, i) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block shrink-0 w-[78vw] sm:w-auto border border-cocoa/10 bg-chalk rounded-sm p-6 hover:border-cocoa/30 transition-colors snap-start"
            >
              <p className="eyebrow mb-3">{post.category}</p>
              <h3 className="font-display text-xl font-light text-cocoa leading-snug mb-3 group-hover:opacity-70 transition-opacity">
                {post.title}
              </h3>
              <p className="text-xs text-cocoa/50 font-light leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-mink font-light">
                <span>{formatDate(post.publishedAt)}</span>
                {post.readTime && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-sand" />
                    <span>{post.readTime}</span>
                  </>
                )}
                <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-2 w-14 bg-gradient-to-l from-cream to-transparent pointer-events-none sm:hidden flex items-center justify-end pr-2" aria-hidden="true">
          <span className="text-cocoa/40 text-base">→</span>
        </div>
        </div>

      </div>
    </section>
  )
}
