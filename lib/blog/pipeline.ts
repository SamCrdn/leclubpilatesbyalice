import Anthropic from '@anthropic-ai/sdk'
import { type Topic } from './topics'
import { markdownToPortableText, type PTBlock } from './markdown-to-pt'

const SITE_CONTEXT = `
Le Club Pilates — studio de Pilates en ligne fondé par Alice.
Site : https://www.leclubpilates.com
Studio : https://app.leclubpilates.com

Catégories de cours :
- Express : https://app.leclubpilates.com/categories/express
- Full Body : https://app.leclubpilates.com/categories/full-body
- Haut du corps : https://app.leclubpilates.com/categories/haut-du-corps
- Bas du corps : https://app.leclubpilates.com/categories/bas-du-corps
- Abdos : https://app.leclubpilates.com/categories/abdos
- Intense : https://app.leclubpilates.com/categories/intense
- Doux : https://app.leclubpilates.com/categories/doux
- Mama (grossesse/post-partum) : https://app.leclubpilates.com/categories/pilatesmama
- Méditation : https://app.leclubpilates.com/categories/meditation
- Pilates Wall : https://app.leclubpilates.com/categories/pilates-wall
- Reformer : https://app.leclubpilates.com/categories/reformer
- Stretching : https://app.leclubpilates.com/categories/stretching
- Accessoires : https://app.leclubpilates.com/categories/accessoires

Programmes :
- Fondamentaux du Pilates (6 semaines, Débutant) : https://app.leclubpilates.com/programs/debutant
- Full Body Sculpt (4 semaines, Intermédiaire/Avancé) : https://app.leclubpilates.com/programs/pilates-sculpt
- Pilates Mama (12 mois, Prénatal/Postnatal) : https://app.leclubpilates.com/programs/pilates-mama

Pages du site : https://www.leclubpilates.com/classes | https://www.leclubpilates.com/about
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
`.trim()

export type ArticlePlan = {
  title: string
  slug: string
  category: 'Pilates' | 'Bien-être' | 'Conseils' | 'Nutrition'
  excerpt: string
  readTime: string
  targetKeyword: string
  h2Sections: string[]
  internalLinks: Array<{ anchorText: string; url: string; section: string }>
}

export type GeneratedArticle = {
  plan: ArticlePlan
  body: PTBlock[]
}

async function planArticle(client: Anthropic, topic: Topic): Promise<ArticlePlan> {
  const msg = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 800,
    messages: [{
      role: 'user',
      content: `Tu es éditrice SEO pour Le Club Pilates. Planifie un article de blog.

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
  "h2Sections": ["titre section 1", "titre section 2", "titre section 3"],
  "internalLinks": [
    { "anchorText": "texte ancre naturel", "url": "url complète", "section": "titre H2 cible" }
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

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2500,
    messages: [{
      role: 'user',
      content: `Tu es Alice, fondatrice du Club Pilates. Rédige cet article de blog.

${TONE_GUIDE}

Plan :
- Titre : ${plan.title}
- Mot-clé cible : ${plan.targetKeyword}
- Sections : ${plan.h2Sections.join(' / ')}
- Longueur : ${topic.length === 'short' ? '600–800 mots' : '1000–1400 mots'}
${linksInstruction}

Format Markdown strict :
- Ne pas écrire le titre H1 (géré séparément)
- Commence par un paragraphe d'intro accrocheur
- ## pour H2, ### pour H3 si besoin
- > pour une citation inspirante (1 maximum)
- **gras** pour les points importants, *italique* avec parcimonie
- [texte](url) pour les liens internes
- Paragraphes courts (3–4 lignes max)
- Termine par une invitation douce sans jamais écrire "abonne-toi" ou "achète"`,
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
