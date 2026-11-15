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
      // Liens courts Instagram vers /essai (temporaires, pour pouvoir changer la cible)
      { source: '/ig',                                  destination: '/essai?utm_source=ig&utm_medium=social&utm_content=link_in_bio', permanent: false },
      { source: '/story',                               destination: '/essai?utm_source=ig&utm_medium=social&utm_content=story',       permanent: false },
      { source: '/dm',                                  destination: '/essai?utm_source=ig&utm_medium=social&utm_content=dm',          permanent: false },
      // Lien court newsletter vers /essai
      { source: '/email',                               destination: '/essai?utm_source=email&utm_medium=email&utm_content=newsletter', permanent: false },
      // Black Friday 2026 (24–30 novembre) : paiement annuel direct, code BLACKFRIDAY26 à saisir
      { source: '/bf',                                  destination: 'https://app.leclubpilates.com/r/buy/fc127c46-d962-47ff-94cb-2151870a3f2a?o=198383', permanent: false },
      { source: '/pricing',                            destination: 'https://app.leclubpilates.com/join', permanent: true },
      { source: '/a-propos',                            destination: '/about',                             permanent: true },
      // Anciennes adresses en 404 dans Search Console (15/11/2026)
      { source: '/home',                                destination: '/',                                  permanent: true },
      { source: '/retraite/ibiza',                      destination: '/retraite',                          permanent: true },
      { source: '/classes',                             destination: '/cours-de-pilates',                  permanent: true },
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
      // Doublons créés par le pipeline entre juin et novembre 2026 (fusion du 15/11/2026) : copie → article le plus ancien
      { source: '/blog/aliments-pour-la-recuperation-musculaire-apres-le-sport', destination: '/blog/aliments-recuperation-musculaire-apres-sport', permanent: true },
      { source: '/blog/aliments-pour-la-recuperation-musculaire-apres-sport', destination: '/blog/aliments-recuperation-musculaire-apres-sport', permanent: true },
      { source: '/blog/aliments-pour-recuperation-musculaire-apres-le-sport', destination: '/blog/aliments-recuperation-musculaire-apres-sport', permanent: true },
      { source: '/blog/aliments-pour-recuperation-musculaire-apres-sport', destination: '/blog/aliments-recuperation-musculaire-apres-sport', permanent: true },
      { source: '/blog/pilates-en-ligne-reussir-sa-pratique-a-la-maison', destination: '/blog/pilates-en-ligne-pratique-a-la-maison', permanent: true },
      { source: '/blog/pilates-en-ligne-reussir-sa-pratique-la-maison', destination: '/blog/pilates-en-ligne-pratique-a-la-maison', permanent: true },
      { source: '/blog/pilates-en-ligne-reussir-pratique-a-la-maison', destination: '/blog/pilates-en-ligne-pratique-a-la-maison', permanent: true },
      { source: '/blog/pilates-et-douleurs-de-dos-ce-que-les-kines-recommandent', destination: '/blog/pilates-douleurs-de-dos-recommandations-kines', permanent: true },
      { source: '/blog/pilates-et-douleurs-de-dos-ce-que-les-kine-recommandent', destination: '/blog/pilates-douleurs-de-dos-recommandations-kines', permanent: true },
      { source: '/blog/pilates-et-douleurs-au-dos-ce-que-les-kines-recommandent', destination: '/blog/pilates-douleurs-de-dos-recommandations-kines', permanent: true },
      { source: '/blog/recuperation-sportive-pourquoi-les-athletes-font-du-pilates', destination: '/blog/recuperation-sportive-pourquoi-athletes-font-pilates', permanent: true },
      { source: '/blog/recuperation-sportive-pourquoi-athletes-font-du-pilates', destination: '/blog/recuperation-sportive-pourquoi-athletes-font-pilates', permanent: true },
      { source: '/blog/meditation-et-pilates-le-mouvement-contemplatif', destination: '/blog/meditation-et-pilates-mouvement-contemplatif', permanent: true },
      { source: '/blog/meditation-et-pilates-mouvements-contemplatif', destination: '/blog/meditation-et-pilates-mouvement-contemplatif', permanent: true },
      { source: '/blog/5-collations-saines-pour-le-sport-a-toujours-avoir', destination: '/blog/collations-saines-sport', permanent: true },
      { source: '/blog/5-collations-saines-pour-le-sport-toujours-avoir', destination: '/blog/collations-saines-sport', permanent: true },
      { source: '/blog/programme-pilates-debutante-6-semaines', destination: '/blog/programme-pilates-debutant-6-semaines', permanent: true },
      { source: '/blog/pilates-et-gainage-bien-plus-que-les-abdo', destination: '/blog/pilates-et-gainage-bien-plus-que-les-abdos', permanent: true },
      { source: '/blog/premieres-semaines-pilates-ce-que-ressent-ton-corps', destination: '/blog/premieres-semaines-pilates-ressenti-corps', permanent: true },
      { source: '/blog/alimentation-anti-inflammatoire-pilates-resultats', destination: '/blog/anti-inflammatoire-pilates-alimentation-resultats', permanent: true },
      { source: '/blog/manger-intuitif-sport-doux-combinaison-gagnante', destination: '/blog/manger-intuitif-et-sport-doux-combinaison-gagnante', permanent: true },
      { source: '/blog/pilates-pour-les-nuls-par-ou-commencer-en-2025', destination: '/blog/pilates-pour-les-nuls-par-ou-commencer', permanent: true },
      { source: '/blog/choisir-son-programme-pilates-selon-son-niveau', destination: '/blog/choisir-programme-pilates-niveau-objectifs', permanent: true },
      { source: '/blog/commencer-pilates-jamais-fait-de-sport', destination: '/blog/5-raisons-commencer-pilates-jamais-fait-sport', permanent: true },
      { source: '/blog/pilates-et-running-la-combinaison-ideale-pour-courir', destination: '/blog/pilates-et-running-combinaison-ideale-coureuses', permanent: true },
      { source: '/blog/stretching-et-pilates-pourquoi-etirement-crucial', destination: '/blog/stretching-et-pilates-pourquoi-etirement-essentiel', permanent: true },
    ]
  },
}

module.exports = nextConfig
