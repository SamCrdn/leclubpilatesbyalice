import { createClient } from '@sanity/client'
import { generateDraft } from '../lib/blog/generate'

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '71c7c0vz',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn:    false,
})

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY manquante')
  if (!process.env.SANITY_API_TOKEN)  throw new Error('SANITY_API_TOKEN manquante')

  await generateDraft(sanity)
}

main().catch(err => { console.error(err); process.exit(1) })
