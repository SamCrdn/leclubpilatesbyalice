import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null

export function urlFor(source: any) {
  if (!client) throw new Error('Sanity client not configured')
  return createImageUrlBuilder(client).image(source)
}
