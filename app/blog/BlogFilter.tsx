'use client'

import Link from 'next/link'
import { useState } from 'react'

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

const categories = ['Tous', 'Pilates', 'Nutrition', 'Bien-être', 'Conseils']

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogFilter({ allPosts }: { allPosts: Post[] }) {
  const [active, setActive] = useState('Tous')

  const posts = active === 'Tous'
    ? allPosts
    : allPosts.filter(p => p.category === active)

  return (
    <>
      {/* Category filter */}
      <div className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-sand/30">
        <div className="section-wrapper">
          <div className="flex gap-6 overflow-x-auto scrollbar-none py-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap font-light pb-0.5 border-b transition-colors ${
                  active === c
                    ? 'text-cocoa border-cocoa'
                    : 'text-cocoa/50 border-transparent hover:text-cocoa hover:border-cocoa'
                }`}
              >
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
              {posts.filter(p => p.featured).slice(0, 1).map(post => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group block border border-cocoa/10 bg-cream rounded-sm p-8 mb-10 hover:border-cocoa/30 transition-colors"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.filter(p => !p.featured).map((post, i) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="group block border border-cocoa/10 bg-cream rounded-sm p-6 hover:border-cocoa/30 transition-colors"
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
