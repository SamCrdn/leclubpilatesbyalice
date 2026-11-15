import Anthropic from '@anthropic-ai/sdk'
import { type Topic } from './topics'
import { markdownToPortableText, type PTBlock } from './markdown-to-pt'

const SITE_CONTEXT = `
Le Club Pilates — studio de Pilates en ligne fondé par Alice.
Site : https://www.leclubpilates.com

Liens internes : UNIQUEMENT les pages du site ci-dessous. Ne jamais mettre de lien vers app.leclubpilates.com
(pages de l'application, non suivies et retirées de Google). Pour citer un programme, lier la page cours du site correspondante.

Pages du site :
- Hub cours : https://www.leclubpilates.com/cours-de-pilates
- Cours débutant : https://www.leclubpilates.com/cours-de-pilates/debutant
- Cours prénatal/postnatal : https://www.leclubpilates.com/cours-de-pilates/prenatal
- Cours dos : https://www.leclubpilates.com/cours-de-pilates/dos
- Pilates Wall : https://www.leclubpilates.com/cours-de-pilates/wall
- Pilates Full Body : https://www.leclubpilates.com/cours-de-pilates/full-body
- Pilates Reformer : https://www.leclubpilates.com/cours-de-pilates/reformer
- Pilates Abdos : https://www.leclubpilates.com/cours-de-pilates/abdos
- À propos d'Alice : https://www.leclubpilates.com/about
- L'équipe : https://www.leclubpilates.com/profs

Catégories de cours dans l'application (à citer sans lien) : Express, Haut du corps, Bas du corps, Abdos, Intense, Doux, Stretching, Accessoires, Méditation.

Programmes, à citer exactement avec ces noms, durées et nombres de séances (lien = page cours indiquée) :
- Programme Pilates pour Débutant (4 semaines, 15 séances, aucun niveau requis) : https://www.leclubpilates.com/cours-de-pilates/debutant
- Programme Pilates Sculpt (1 mois, 12 séances, pratiquantes ayant déjà une base) : https://www.leclubpilates.com/cours-de-pilates/full-body
- Programme Pilates Mama (grossesse et post-partum, 26 séances, avec l'accord d'un professionnel de santé) : https://www.leclubpilates.com/cours-de-pilates/prenatal
- Programme Express Routine (séances d'environ 10 minutes, 28 séances, déconseillé aux débutantes) : https://www.leclubpilates.com/cours-de-pilates
Ne jamais inventer de chiffre sur le studio (nombre de membres, de cours, résultats) qui ne figure pas ici.
`.trim()

const TONE_GUIDE = `
Ton éditorial d'Alice :
- Chaleureuse, experte, bienveillante — elle parle à ses élèves comme à des amies
- Tutoiement systématique
- Jamais commercial : on informe et inspire, on ne vend pas
- Phrases courtes et aérées, pas de blocs compacts
- Intertitres accrocheurs mais jamais clickbait
- Maximum 2 liens internes, naturellement intégrés
- Fin d'article : phrase d'invitation douce, jamais de CTA agressif
- Sujets de santé (douleurs, grossesse, post-partum, pathologies) : jamais de diagnostic ni de promesse de guérison, rappeler de demander l'avis d'un professionnel de santé
`.trim()

export type FaqItem = { question: string; answer: string }

export type ArticlePlan = {
  title: string
  slug: string
  category: 'Pilates' | 'Bien-être' | 'Conseils' | 'Nutrition'
  excerpt: string
  readTime: string
  targetKeyword: string
  lsiKeywords: string[]
  tldr: string
  h2Sections: string[]
  internalLinks: Array<{ anchorText: string; url: string; section: string }>
  faqItems: FaqItem[]
}

export type GeneratedArticle = {
  plan: ArticlePlan
  body: PTBlock[]
}

async function planArticle(client: Anthropic, topic: Topic): Promise<ArticlePlan> {
  const msg = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 2000,
    messages: [{
      role: 'user',
      content: `Tu es éditrice SEO pour Le Club Pilates. Planifie un article de blog optimisé SEO et GEO.

${SITE_CONTEXT}

Sujet : "${topic.subject}"
Longueur : ${topic.length === 'short' ? 'court (600–800 mots, 3–4 min de lecture)' : 'long (1000–1400 mots, 7–9 min de lecture)'}
${topic.internalLinks ? `Liens internes suggérés :\n${topic.internalLinks.map(l => `- ${l.label} : ${l.url}`).join('\n')}` : 'Pas de liens internes imposés — choisis 0 à 2 si naturellement pertinents.'}

Réponds UNIQUEMENT avec ce JSON (sans balises markdown) :
{
  "title": "titre H1 optimisé SEO (55 caractères max)",
  "slug": "slug-kebab-case-sans-accents",
  "category": "Pilates ou Bien-être ou Conseils ou Nutrition",
  "excerpt": "meta description engageante de 120 à 150 caractères",
  "readTime": "X min",
  "targetKeyword": "mot-clé principal",
  "lsiKeywords": ["mot-clé LSI 1", "mot-clé LSI 2", "mot-clé LSI 3", "mot-clé LSI 4"],
  "tldr": "Résumé en 2-3 phrases simples et directes — réponse immédiate à la question principale. Extractible par les IA (ChatGPT, Perplexity).",
  "h2Sections": ["titre section 1", "titre section 2", "titre section 3"],
  "internalLinks": [
    { "anchorText": "texte ancre naturel", "url": "url complète", "section": "titre H2 cible" }
  ],
  "faqItems": [
    { "question": "Question fréquente 1 ?", "answer": "Réponse directe en moins de 60 mots." },
    { "question": "Question fréquente 2 ?", "answer": "Réponse directe en moins de 60 mots." },
    { "question": "Question fréquente 3 ?", "answer": "Réponse directe en moins de 60 mots." },
    { "question": "Question fréquente 4 ?", "answer": "Réponse directe en moins de 60 mots." },
    { "question": "Question fréquente 5 ?", "answer": "Réponse directe en moins de 60 mots." }
  ]
}`,
    }],
  })

  const raw = msg.content[0].type === 'text' ? msg.content[0].text.trim() : ''
  const json = raw.replace(/^```json?\s*/i, '').replace(/\s*```$/, '')
  return JSON.parse(json) as ArticlePlan
}

async function writeArticle(client: Anthropic, topic: Topic, plan: ArticlePlan): Promise<string> {
  const linksInstruction = plan.internalLinks.length > 0
    ? `Liens à intégrer naturellement :\n${plan.internalLinks.map(l => `- [${l.anchorText}](${l.url}) dans la section "${l.section}"`).join('\n')}`
    : ''

  const faqSection = plan.faqItems.map(f => `**${f.question}**\n${f.answer}`).join('\n\n')

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 3000,
    messages: [{
      role: 'user',
      content: `Tu es Alice, fondatrice du Club Pilates. Rédige cet article de blog.

${TONE_GUIDE}

Plan :
- Titre : ${plan.title}
- Mot-clé cible : ${plan.targetKeyword}
- Mots-clés LSI à intégrer naturellement : ${plan.lsiKeywords.join(', ')}
- Sections : ${plan.h2Sections.join(' / ')}
- Longueur corps de l'article : ${topic.length === 'short' ? '600–800 mots' : '1000–1400 mots'}
${linksInstruction}

Structure OBLIGATOIRE du Markdown :

1. Commence directement par un paragraphe d'intro accrocheur (2-3 phrases) — NE PAS écrire de TL;DR, il est géré séparément

2. Développe les sections H2 du plan

3. Termine par cette section FAQ (telle quelle) :
## Questions fréquentes

${faqSection}

Règles Markdown :
- Ne pas écrire le titre H1 (géré séparément)
- ## pour H2, ### pour H3 si besoin
- > pour le TL;DR et une citation inspirante max (pas plus)
- **gras** pour les points importants, *italique* avec parcimonie
- [texte](url) pour les liens internes
- Paragraphes courts (3–4 lignes max)
- Intègre les mots-clés LSI de façon naturelle dans le texte`,
    }],
  })

  return msg.content[0].type === 'text' ? msg.content[0].text : ''
}

export async function runPipeline(topic: Topic): Promise<GeneratedArticle> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  const plan = await planArticle(client, topic)
  const markdown = await writeArticle(client, topic, plan)
  const body = markdownToPortableText(markdown)

  return { plan, body }
}
