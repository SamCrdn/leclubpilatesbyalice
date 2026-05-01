import { groq } from 'next-sanity'

// ── Singletons ────────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    promoBanner,
    stats[] { value, label, href, external },
  }
`

export const retraiteQuery = groq`
  *[_type == "retraite" && _id == "retraite"][0] {
    active, title, destination,
    startDate, endDate,
    heroDescription,
    price, priceNote, maxParticipants,
    locationName,
    inclus, nonInclus,
  }
`

// ── Collections ───────────────────────────────────────────────────────────────

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id, quote, name, role, initials,
  }
`

export const profsQuery = groq`
  *[_type == "prof"] | order(order asc) {
    _id, name, role, index,
    photo, photoAlt,
    formation, credentials, bio, sameAs,
    imageRight,
  }
`

export const pricingPlansQuery = groq`
  *[_type == "pricingPlan"] | order(order asc) {
    _id, name, tagline, price, period,
    features, badge, highlight, imageUrl,
  }
`

// ── Blog ──────────────────────────────────────────────────────────────────────

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    mainImage,
    readTime,
    publishedAt,
    featured,
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    mainImage,
    readTime,
    publishedAt,
    featured,
    body,
  }
`

export const allSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`
