import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const allCourses = [
  { href: '/cours-de-pilates/debutant',  label: 'Pilates débutant'  },
  { href: '/cours-de-pilates/dos',       label: 'Pilates & dos'     },
  { href: '/cours-de-pilates/prenatal',  label: 'Pilates prénatal'  },
  { href: '/cours-de-pilates/wall',      label: 'Pilates Wall'      },
  { href: '/cours-de-pilates/full-body', label: 'Pilates Full Body' },
  { href: '/cours-de-pilates/reformer',  label: 'Pilates Reformer'  },
  { href: '/cours-de-pilates/abdos',     label: 'Pilates abdos'     },
]

export default function RelatedCourses({ current }: { current: string }) {
  const related = allCourses.filter(c => c.href !== current)
  return (
    <section className="py-14 bg-sand/10 border-t border-cocoa/10">
      <div className="section-wrapper">
        <p className="font-mono text-xs text-sand-dark tracking-widest mb-8">Autres cours</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {related.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex items-center justify-between gap-2 border border-cocoa/10 rounded-sm px-4 py-3 bg-cream hover:border-cocoa/30 transition-colors"
            >
              <span className="text-sm font-light text-cocoa group-hover:opacity-70 transition-opacity">{c.label}</span>
              <ArrowRight size={12} className="text-mink shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
