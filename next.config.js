/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/pricing',                             destination: 'https://app.leclubpilates.com/join', permanent: true },
      { source: '/a-propos',                            destination: '/about',                             permanent: true },
      { source: '/classes',                               destination: '/cours-de-pilates',                  permanent: true },
      { source: '/les-cours',                           destination: '/cours-de-pilates',                  permanent: true },
      { source: '/conditions-generales-dutilisation',   destination: '/legal/cgv',                         permanent: true },
      { source: '/mentions-legales',                    destination: '/legal/mentions-legales',            permanent: true },
      { source: '/politique-confidentialite',           destination: '/legal/confidentialite',             permanent: true },
      { source: '/blog/pilates-bas-du-corps-jambes-fesses-sans-impact', destination: '/blog/pilates-bas-du-corps-jambes-fessiers-sans-impact', permanent: true },
      { source: '/blog/pilates-et-perte-de-poids',       destination: '/blog/pilates-perte-de-poids',       permanent: true },
      { source: '/blog/pilates-intense-methode-douce-defi', destination: '/blog/pilates-intense-methode-douce-vrai-defi', permanent: true },
      { source: '/blog/erreurs-courantes-debutantes-pilates-solutions', destination: '/blog/erreurs-courantes-debutantes-pilates', permanent: true },
      { source: '/blog/3-erreurs-courantes-en-pilates-debutant-et-solutions', destination: '/blog/erreurs-courantes-debutantes-pilates', permanent: true },
      { source: '/blog/pilates-en-ligne-pratiquer-a-la-maison', destination: '/blog/pilates-en-ligne-pratique-a-la-maison', permanent: true },
    ]
  },
}

module.exports = nextConfig
