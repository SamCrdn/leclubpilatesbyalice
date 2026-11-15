import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'
import { sitemapPostsQuery } from '@/lib/sanity.queries'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: { slug: string; _updatedAt?: string }[] = []
  try {
    if (client) posts = await client.fetch(sitemapPostsQuery)
  } catch {
    // Sanity unreachable at build time (local SSL) — blog URLs omitted
  }

  const blogUrls: MetadataRoute.Sitemap = posts.map(({ slug, _updatedAt }) => ({
    url: `${siteUrl}/blog/${slug}`,
    ...(_updatedAt && { lastModified: new Date(_updatedAt) }),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [
    { url: siteUrl,                                     lastModified: new Date('2026-11-15'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/about`,                          lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/profs`,                          lastModified: new Date('2026-03-27'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/cours-de-pilates`,               lastModified: new Date('2026-05-08'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/retraite`,                       lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/cours-de-pilates/debutant`,      lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/cours-de-pilates/prenatal`,      lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/cours-de-pilates/dos`,           lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/cours-de-pilates/wall`,          lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/cours-de-pilates/full-body`,     lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/cours-de-pilates/reformer`,      lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/cours-de-pilates/abdos`,         lastModified: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/livre`,                           lastModified: new Date('2026-06-06'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`,                           lastModified: new Date('2026-11-15'), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact`,                        lastModified: new Date('2026-03-27'), changeFrequency: 'yearly',  priority: 0.5 },
    ...blogUrls,
  ]
}
