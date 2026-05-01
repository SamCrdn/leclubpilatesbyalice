import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/sanity.queries'
import PromoBannerClient, { type BannerData } from './PromoBannerClient'

const FALLBACK: BannerData = {
  active: true,
  emoji: '☀️',
  line1: 'Retraite Pilates · Ibiza',
  line2: 'Juin 2026 · Places limitées',
  ctaLabel: 'Découvrir',
  href: '/retraite',
  storageKey: 'promo-retraite-ibiza-2026',
}

export default async function PromoBanner() {
  const settings = client ? await client.fetch(siteSettingsQuery).catch(() => null) : null
  const banner: BannerData = settings?.promoBanner ?? FALLBACK
  if (!banner.active) return null
  return <PromoBannerClient banner={banner} />
}
