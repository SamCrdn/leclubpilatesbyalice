/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         { key: 'X-Content-Type-Options', value: 'nosniff' },
  //         { key: 'X-Frame-Options', value: 'DENY' },
  //         { key: 'X-XSS-Protection', value: '1; mode=block' },
  //         { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  //       ],
  //     },
  //   ]
  // },
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: 'https://app.leclubpilates.com/join',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
