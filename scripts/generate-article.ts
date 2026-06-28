import { createClient } from '@sanity/client'
import { randomUUID } from 'crypto'
import { pickTopic } from '../lib/blog/topics'
import { runPipeline } from '../lib/blog/pipeline'

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

  const usedSubjects: string[] = await sanity.fetch(
    `*[_type == "post" && defined(topicSubject)].topicSubject`
  )
  const publishedCategories: string[] = await sanity.fetch(`*[_type == "post"].category`)
  const publishedCategoryCounts = publishedCategories.reduce<Record<string, number>>((acc, c) => {
    acc[c] = (acc[c] ?? 0) + 1
    return acc
  }, {})

  const topic = pickTopic(usedSubjects, publishedCategoryCounts)
  console.log(`📝 Sujet : "${topic.subject}" (catégorie : ${topic.category})`)

  const { plan, body } = await runPipeline(topic)
  console.log(`✅ Article rédigé : "${plan.title}"`)

  await sanity.createOrReplace({
    _type:       'post',
    _id:         `drafts.${randomUUID()}`,
    title:       plan.title,
    slug:        { _type: 'slug', current: plan.slug },
    topicSubject: topic.subject,
    category:    plan.category,
    excerpt:     plan.excerpt,
    tldr:        plan.tldr,
    faq:         plan.faqItems.map(f => ({ _type: 'object', _key: randomUUID(), question: f.question, answer: f.answer })),
    readTime:    plan.readTime,
    publishedAt: new Date().toISOString(),
    featured:    false,
    body,
  })

  console.log(`🚀 Brouillon créé dans Sanity : "${plan.title}"`)
}

main().catch(err => { console.error(err); process.exit(1) })
