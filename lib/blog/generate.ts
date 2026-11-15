import { randomUUID } from 'crypto'
import type { SanityClient } from '@sanity/client'
import { pickTopic } from './topics'
import { runPipeline } from './pipeline'
import { remplacerLienApp } from './liensApp'

/**
 * Génère un article et le crée en brouillon dans Sanity.
 * Partagé par scripts/generate-article.ts (GitHub Actions) et /api/generate-article.
 * Lève une erreur, sans rien créer, si aucun sujet n'est libre ou si le slug existe déjà.
 */
export async function generateDraft(sanity: Pick<SanityClient, 'fetch' | 'createOrReplace'>) {
  // Brouillons compris (le token voit les drafts) : un sujet en attente de relecture compte comme pris
  const usedSubjects: string[] = await sanity.fetch(
    `*[_type == "post" && defined(topicSubject)].topicSubject`
  )
  const topic = pickTopic(usedSubjects)
  console.log(`📝 Sujet : "${topic.subject}" (catégorie : ${topic.category})`)

  const { plan, body } = await runPipeline(topic)
  console.log(`✅ Article rédigé : "${plan.title}"`)

  // Filet de sécurité : aucun lien vers les pages de l'app (non suivies, retirées de Google)
  for (const block of body as Array<{ markDefs?: Array<{ _type: string; href?: string }> }>) {
    for (const def of block.markDefs ?? []) {
      if (def._type === 'link' && def.href) def.href = remplacerLienApp(def.href)
    }
  }

  const slugTaken: number = await sanity.fetch(
    `count(*[_type == "post" && slug.current == $slug])`,
    { slug: plan.slug }
  )
  if (slugTaken > 0) {
    throw new Error(`Slug déjà utilisé : "${plan.slug}". Aucun brouillon créé.`)
  }

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
  return { title: plan.title, slug: plan.slug }
}
