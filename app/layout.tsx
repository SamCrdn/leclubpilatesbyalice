import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/ui/ScrollReveal'
import CookieBanner from '@/components/ui/CookieBanner'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// ── Fonts ──────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// ── Metadata ───────────────────────────────────────────
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.leclubpilates.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Le Club Pilates — Studio de Pilates en ligne',
    template: '%s | Le Club Pilates',
  },
  description:
    'Cours de Pilates en ligne, programmes personnalisés et abonnements flexibles. Rejoignez notre communauté et transformez votre corps depuis chez vous.',
  keywords: [
    'pilates en ligne', 'cours pilates', 'studio pilates', 'pilates streaming',
    'programme pilates', 'pilates débutant', 'pilates renforcement musculaire',
  ],
  authors: [{ name: 'Le Club Pilates' }],
  creator: 'Le Club Pilates',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Le Club Pilates',
    title: 'Le Club Pilates — Studio de Pilates en ligne',
    description: 'Cours de Pilates en ligne, programmes personnalisés et abonnements flexibles.',
    images: [{ url: `${siteUrl}/images/og-image.jpg`, width: 1200, height: 630, alt: 'Le Club Pilates' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Club Pilates — Studio de Pilates en ligne',
    description: 'Cours de Pilates en ligne, programmes personnalisés et abonnements flexibles.',
    images: [`${siteUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
}

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
  width: 'device-width',
  initialScale: 1,
}

// ── Root Layout ────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <meta name="p:domain_verify" content="74f930673b2f968c5b3134fd5377d05d" />
      </head>
      <body className="bg-cream text-cocoa antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cocoa focus:text-cream focus:text-sm focus:rounded"
        >
          Aller au contenu
        </a>
        <ScrollReveal />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        <CookieBanner />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
            <Script id="ga4-init" strategy="lazyOnload">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  )
}
