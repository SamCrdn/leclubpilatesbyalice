import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/sanity.queries'

type Stat = { value: string; label: string; href: string; external: boolean }

const FALLBACK_STATS: Stat[] = [
  { value: '+350',    label: 'cours disponibles', href: 'https://app.leclubpilates.com/', external: true },
  { value: '+17',     label: 'catégories',         href: 'https://app.leclubpilates.com/', external: true },
  { value: '★ 5/5',  label: '74 avis Google',      href: 'https://share.google/2FofxTrt8YdrjBKRw', external: true },
  { value: '10 ans',  label: "d'expérience",        href: '/about', external: false },
  { value: '+2',      label: 'lives par mois',      href: 'https://app.leclubpilates.com/programs/pilates', external: true },
  { value: '+1 000',  label: 'membres',             href: 'https://app.leclubpilates.com/', external: true },
]

function StatItem({ s }: { s: Stat }) {
  const inner = (
    <>
      <p className="font-display text-4xl md:text-5xl font-light text-cream mb-2">{s.value}</p>
      <p className="text-xs tracking-[0.15em] uppercase text-cream/40 font-light">{s.label}</p>
    </>
  )
  const cls = "text-center hover:opacity-70 transition-opacity block shrink-0 px-8 md:px-0"
  return s.external ? (
    <a href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <a href={s.href} className={cls}>{inner}</a>
  )
}

export default async function StatsBar() {
  const settings = client ? await client.fetch(siteSettingsQuery).catch(() => null) : null
  const stats: Stat[] = settings?.stats?.length ? settings.stats : FALLBACK_STATS

  return (
    <section aria-label="Chiffres clés" className="py-12 md:py-16 bg-cocoa text-cream overflow-hidden">
      <div className="md:hidden relative">
        <div className="flex animate-marquee">
          {[...stats, ...stats].map((s, i) => <StatItem key={i} s={s} />)}
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 section-wrapper" data-animate>
        {stats.map(s => <StatItem key={s.label} s={s} />)}
      </div>
    </section>
  )
}
