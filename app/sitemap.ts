import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/classes`, lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/blog`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
  ]

  // Blog posts — à alimenter depuis le CMS (Phase 2)
  return staticRoutes
}
