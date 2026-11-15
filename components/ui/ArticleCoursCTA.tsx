import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EssaiLink from '@/components/ui/EssaiLink'
import type { Cours } from '@/lib/blog/coursPourArticle'

/** Encadré au milieu d'un article : page cours liée au sujet + essai (position GA « blog-milieu »). */
export default function ArticleCoursCTA({ cours }: { cours: Cours }) {
  return (
    <aside className="my-12 bg-sand/20 border border-sand/40 rounded-sm px-6 py-7 md:px-8" aria-label="Pour aller plus loin">
      <p className="text-xs tracking-widest uppercase text-mink font-light mb-3">Pour aller plus loin</p>
      <p className="font-display text-2xl font-light text-cocoa leading-snug mb-3">{cours.titre}</p>
      <p className="text-cocoa/70 font-light leading-relaxed mb-6">{cours.accroche}</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <EssaiLink
          href="https://app.leclubpilates.com/join?utm_source=site&utm_medium=blog&utm_campaign=article-cta&utm_content=blog-milieu"
          position="blog-milieu"
          className="btn-primary justify-center"
        >
          7 jours gratuits
        </EssaiLink>
        <Link href={cours.href} className="inline-flex items-center gap-2 text-sm font-light text-cocoa underline underline-offset-2 hover:opacity-70 transition-opacity">
          {cours.lien} <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  )
}
