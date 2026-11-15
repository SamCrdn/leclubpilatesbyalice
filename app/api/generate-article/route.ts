import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { generateDraft } from '@/lib/blog/generate'

const CRON_SECRET = process.env.CRON_SECRET

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn:    false,
})

export async function POST(req: NextRequest) {
  // Vérification du secret
  const secret =
    req.headers.get('x-cron-secret') ??
    new URL(req.url).searchParams.get('secret')

  if (!CRON_SECRET || secret !== CRON_SECRET) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY manquante' }, { status: 503 })
  }

  try {
    const { title, slug } = await generateDraft(sanity)
    return NextResponse.json({ ok: true, title, slug })
  } catch (err) {
    console.error('[generate-article] Erreur :', err)
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 })
  }
}
