import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { randomUUID } from 'crypto'
import { pickTopic } from '@/lib/blog/topics'
import { runPipeline } from '@/lib/blog/pipeline'

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
    const topic = pickTopic()
    console.log(`[generate-article] Sujet : "${topic.subject}"`)

    const { plan, body } = await runPipeline(topic)
    console.log(`[generate-article] Article généré : "${plan.title}"`)

    await sanity.createOrReplace({
      _type:       'post',
      _id:         `drafts.${randomUUID()}`,
      title:       plan.title,
      slug:        { _type: 'slug', current: plan.slug },
      category:    plan.category,
      excerpt:     plan.excerpt,
      readTime:    plan.readTime,
      publishedAt: new Date().toISOString(),
      featured:    false,
      body,
    })

    console.log(`[generate-article] Brouillon Sanity créé : "${plan.title}"`)

    return NextResponse.json({ ok: true, title: plan.title, slug: plan.slug })
  } catch (err) {
    console.error('[generate-article] Erreur :', err)
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 })
  }
}
