/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ]
  },
}

module.exports = nextConfig
