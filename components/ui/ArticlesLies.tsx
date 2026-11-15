import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { client } from '@/lib/sanity'
import { postsForCoursQuery } from '@/lib/sanity.queries'
import { coursPourArticle, type CoursSlug } from '@/lib/blog/coursPourArticle'

type Post = { title: string; slug: string; topicSubject?: string | null; excerpt?: string; readTime?: string }

/** Bloc « À lire » d'une page cours : les 3 articles les plus récents associés à cette page. */
export default async function ArticlesLies({ cours }: { cours: CoursSlug }) {
  if (!client) return null
  const posts: Post[] = await client.fetch(postsForCoursQuery).catch(() => [])
  const lies = posts.filter(p => coursPourArticle(p).slug === cours).slice(0, 3)
  if (lies.length === 0) return null

  return (
    <section className="py-14 bg-cream border-t border-cocoa/10">
      <div className="section-wrapper">
        <p className="font-mono text-xs text-sand-dark tracking-widest mb-8">À lire sur le blog</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {lies.map(p => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col justify-between gap-4 border border-cocoa/10 rounded-sm px-5 py-5 bg-cream hover:border-cocoa/30 transition-colors"
            >
              <span className="font-display text-xl font-light text-cocoa leading-snug">{p.title}</span>
              <span className="flex items-center justify-between text-xs text-mink font-light">
                {p.readTime ? `${p.readTime} de lecture` : 'Lire l\'article'}
                <ArrowRight size={12} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
