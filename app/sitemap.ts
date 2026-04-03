import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { allSlugsQuery } from '@/lib/sanity.queries'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,                                     lastModified: new Date('2026-03-27'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/about`,                          lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/profs`,                          lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/classes`,                        lastModified: new Date('2026-03-27'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/blog`,                           lastModified: new Date('2026-03-27'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact`,                        lastModified: new Date('2026-03-27'), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${siteUrl}/legal/mentions-legales`,         lastModified: new Date('2026-03-27'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${siteUrl}/legal/confidentialite`,          lastModified: new Date('2026-03-27'), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${siteUrl}/legal/cgv`,                      lastModified: new Date('2026-03-27'), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Blog posts depuis Sanity
  const slugs: { slug: string }[] = await client.fetch(allSlugsQuery).catch(() => [])
  const blogRoutes: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${siteUrl}/blog/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
