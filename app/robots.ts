import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/__/'],
      },
      // Crawlers IA — explicitement autorisés
      { userAgent: 'GPTBot',        allow: '/' },
      { userAgent: 'Anthropic-AI',  allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'CCBot',         allow: '/' },
      { userAgent: 'Claude-Web',    allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
