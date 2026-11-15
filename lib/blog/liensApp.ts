/**
 * Remplace un lien vers l'application (app.leclubpilates.com/programs|categories/…) par la page cours du site.
 * Ces pages de l'app ne sont pas suivies (pas de commencer_essai) et ont été retirées de Google.
 * Les liens d'inscription (/join, /checkout, /r/buy) ne sont jamais modifiés.
 */
const SITE = 'https://www.leclubpilates.com'

const CORRESPONDANCE: Record<string, string> = {
  'programs/debutant':        '/cours-de-pilates/debutant',
  'programs/pilates-mama':    '/cours-de-pilates/prenatal',
  'programs/pilates-sculpt':  '/cours-de-pilates/full-body',
  'categories/abdos':         '/cours-de-pilates/abdos',
  'categories/haut-du-corps': '/cours-de-pilates/full-body',
  'categories/bas-du-corps':  '/cours-de-pilates/full-body',
  'categories/intense':       '/cours-de-pilates/full-body',
}

export function remplacerLienApp(href: string): string {
  const m = href.match(/^https?:\/\/app\.leclubpilates\.com\/((?:programs|categories)\/[^/?#]+)/)
  if (!m) return href
  return SITE + (CORRESPONDANCE[m[1]] ?? '/cours-de-pilates')
}
