/**
 * Sanitize a URL before injecting it into a CSS backgroundImage style.
 * Only allows relative paths starting with "/" and trusted external domains.
 * Prevents CSS injection when image URLs come from a CMS (Phase 2).
 */
const ALLOWED_HOSTS = ['images.unsplash.com']

export function safeBgUrl(url: string): string {
  if (!url) return ''
  // Allow relative paths (e.g. /images/blog-1.jpg)
  if (url.startsWith('/')) return `url(${url})`
  // Allow trusted external hosts
  try {
    const { hostname } = new URL(url)
    if (ALLOWED_HOSTS.includes(hostname)) return `url(${url})`
  } catch {
    // invalid URL
  }
  return ''
}
