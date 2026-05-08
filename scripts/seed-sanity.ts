/**
 * Seed initial Sanity data from hardcoded site values.
 * Run once: npx tsx scripts/seed-sanity.ts
 */
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token:     process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  console.log('🌱 Seeding Sanity...\n')

  // ── 1. siteSettings (singleton) ──────────────────────────────────────────
  await client.createOrReplace({
    _id:  'siteSettings',
    _type: 'siteSettings',
    promoBanner: {
      active:     true,
      emoji:      '☀️',
      line1:      'Retraite Pilates · Ibiza',
      line2:      'Juin 2026 · Places limitées',
      ctaLabel:   'Découvrir',
      href:       '/retraite',
      storageKey: 'promo-retraite-ibiza-2026',
    },
    stats: [
      { _key: 's1', value: '+350',   label: 'cours disponibles', href: 'https://app.leclubpilates.com/', external: true },
      { _key: 's2', value: '+17',    label: 'catégories',         href: 'https://app.leclubpilates.com/', external: true },
      { _key: 's3', value: '★ 5/5', label: '74 avis Google',      href: 'https://share.google/2FofxTrt8YdrjBKRw', external: true },
      { _key: 's4', value: '10 ans', label: "d'expérience",        href: '/about', external: false },
      { _key: 's5', value: '+2',     label: 'lives par mois',      href: 'https://app.leclubpilates.com/programs/pilates', external: true },
      { _key: 's6', value: '+1 000', label: 'membres',             href: 'https://app.leclubpilates.com/', external: true },
    ],
  })
  console.log('✅ siteSettings')

  // ── 2. retraite (singleton) ──────────────────────────────────────────────
  await client.createOrReplace({
    _id:   'retraite',
    _type: 'retraite',
    active:          true,
    title:           'Retraite Pilates',
    destination:     'à Ibiza',
    startDate:       '2026-09-25',
    endDate:         '2026-09-29',
    heroDescription: '5 jours & 4 nuits dans une villa exceptionnelle. Pilates, cuisine saine, reconnexion. Du 25 au 29 septembre 2026.',
    price:           1350,
    priceNote:       'Paiement en 2 fois possible',
    maxParticipants: 10,
    locationName:    'Villa Ibiza — Cala de Bou',
    inclus: [
      'Hébergement en villa', 'Repas végétariens et snacks', 'Navettes sur place',
      '2 cours de Pilates par jour', 'Tapis de Pilates fournis', 'Accessoires de Pilates offerts',
      'Randonnée avec vue exceptionnelle', 'Balades au coucher du soleil', 'Gift bag bien-être',
    ],
    nonInclus: ['Vols', 'Massages', 'Déplacements personnels'],
  })
  console.log('✅ retraite')

  // ── 3. Témoignages ───────────────────────────────────────────────────────
  const testimonials = [
    { name: 'Sarah',      role: '26 ans · Membre',              initials: 'S',  order: 1,  quote: "Je suis devenue complètement addict ! Je mixe plusieurs cours courts selon mon humeur, et j'adore pouvoir pratiquer à n'importe quelle heure. En quelques semaines, j'ai vu des résultats que je n'aurais jamais espérés avec une salle classique." },
    { name: 'Noémie',     role: '38 ans · Membre',              initials: 'N',  order: 2,  quote: "Je fais du Pilates depuis une dizaine d'années, mais depuis que je suis les cours d'Alice, c'est devenu une véritable hygiène de vie. Alice a sauvé mon dos, qui a été ma bête noire pendant des années, et je me sens réellement plus forte et plus souple dans mon quotidien." },
    { name: 'Marie',      role: '41 ans · Membre',              initials: 'M',  order: 3,  quote: "Après avoir essayé des dizaines d'applis fitness, Le Club Pilates est de loin la meilleure. Les cours sont variés, la progression est logique et Alice a une énergie communicative. Mon corps a changé de façon visible en 2 mois." },
    { name: 'Clara',      role: '45 ans · Membre',              initials: 'C',  order: 4,  quote: "Je ne pensais pas aimer le Pilates, et pourtant ! L'approche d'Alice est tellement motivante que j'ai accroché dès le premier cours. Mon dos et mes épaules vont beaucoup mieux, et je me sens vraiment plus à l'aise dans mon corps." },
    { name: 'Fabienne',   role: '51 ans · Membre',              initials: 'F',  order: 5,  quote: "Des cours en ligne au top ! Des séances variées et tellement efficaces : des cours toniques pour galber, affiner la silhouette et des séances plus douces pour s'étirer, se relaxer. Le parfait équilibre ! Alice est une super prof, très pédagogue et bienveillante." },
    { name: 'Emilie',     role: '31 ans · Membre',              initials: 'E',  order: 6,  quote: "J'ai découvert Le Club Pilates pendant ma grossesse grâce aux séances Mama. Après l'accouchement, j'ai pu reprendre doucement avec les cours post-natal. Six mois plus tard, mon corps est même mieux qu'avant !" },
    { name: 'Laurence',   role: '58 ans · Membre',              initials: 'L',  order: 7,  quote: "À 58 ans, je cherchais une pratique douce mais efficace. Les cours sont variés, très bien construits, et les résultats sont là. C'est exactement ce qu'il me fallait pour prendre soin de moi sans me mettre en danger." },
    { name: 'Lesley-Ann', role: '35 ans · Ostéopathe · Membre', initials: 'LA', order: 8,  quote: "J'adore les cours d'Alice. Ils sont accessibles à tous les niveaux et toujours de grande qualité. En tant qu'ostéopathe, j'apprécie particulièrement sa précision et son écoute." },
    { name: 'Audrey',     role: '34 ans · Membre',              initials: 'A',  order: 9,  quote: "J'ai pris l'abonnement et je suis passée de zéro sport à un cours quotidien. Je ne peux plus m'en passer ! Alice est douce, gentille et surtout donne des explications très claires." },
    { name: 'Anaïs',      role: '28 ans · Membre',              initials: 'A',  order: 10, quote: "Je viens de télécharger l'application mobile et j'adore : je peux faire mes séances directement sur mon téléphone et n'importe où ! Les explications sont claires et il y a toujours des rappels pour ajuster notre posture." },
  ]
  for (const t of testimonials) {
    await client.create({ _type: 'testimonial', ...t })
  }
  console.log(`✅ ${testimonials.length} témoignages`)

  // ── 4. Professeurs ───────────────────────────────────────────────────────
  const profs = [
    {
      name: 'Alice', role: 'Fondatrice & instructrice', index: '01', order: 1, imageRight: true,
      photo: { _type: 'externalFile', url: '/images/profs/alice-prof-pilates.jpg' },
      photoAlt: 'Alice, fondatrice du Club Pilates',
      formation: 'Polestar Pilates Training Mat & Machine · CQP ALS AGEE · Carte Professionnelle de coach sportif',
      credentials: ['Polestar Pilates Rehab & Studio Teacher Training', "Diplôme d'État — Activités Physiques et Sportives (CQP ALS AGEE)", 'Carte Professionnelle de coach sportif', 'Formation EAT Danse Classique'],
      bio: ["À travers ses cours, elle propose une approche douce, précise et efficace, où chaque séance est pensée pour sculpter le corps et se sentir bien, sans tensions.", "Alice accorde une grande importance à la précision du mouvement et à la fluidité des enchaînements. Elle explique chaque exercice avec précision et donne un maximum de corrections afin que chacun puisse trouver la justesse du mouvement."],
      sameAs: ['https://www.instagram.com/alice.leclubpilates/', 'https://www.youtube.com/@leclubpilates'],
    },
    {
      name: 'Athena', role: 'Instructrice', index: '02', order: 2, imageRight: false,
      photo: { _type: 'externalFile', url: '/images/profs/athena-prof-pilates.jpg' },
      photoAlt: 'Athena, professeure de Pilates',
      formation: 'Alyne Pilates Mat & Reformer',
      credentials: ['Diplôme Alyne Pilates Mat & Reformer', 'Membre FFMP — Fédération Française des Méthodes Pilates'],
      bio: ["Elle est diplômée de l'école Alyne, membre de la FFMP. Elle étudie actuellement au Costa Rica, où elle dispense ses cours de Pilates dans un décor de rêve.", "Ayant évolué dans le milieu du spectacle pendant de nombreuses années, elle s'est ensuite orientée vers le Pilates lorsqu'elle a découvert cette méthode. Une approche douce et bienveillante, mais aussi dynamique et ludique."],
      sameAs: [],
    },
    {
      name: 'Maria', role: 'Instructrice · Pilates prénatal', index: '03', order: 3, imageRight: true,
      photo: { _type: 'externalFile', url: '/images/profs/maria-prof-pilates.jpg' },
      photoAlt: 'Maria, professeure de Pilates',
      formation: 'Polestar Pilates Training Mat & Machine · CQP ALS AGEE',
      credentials: ['Polestar Pilates Training Mat & Machine', "Diplôme d'État — Activités Physiques et Sportives (CQP ALS AGEE)", 'Spécialisation Pilates prénatal & postnatal'],
      bio: ["Athlète, danseuse, éducatrice, coach bien-être et professeure de Pilates. Pour elle, le mouvement est une véritable thérapie qui aide à surpasser les blocages.", "Sa signature : proposer un voyage sensoriel de l'intérieur vers l'extérieur. Ses cours sont caractérisés par un positionnement dynamique, sérénité, exigence et douceur. Au sein du studio, Maria propose des cours pour femmes enceintes."],
      sameAs: [],
    },
    {
      name: 'Vince', role: 'Instructeur · Yoga & Pilates', index: '04', order: 4, imageRight: false,
      photo: { _type: 'externalFile', url: '/images/profs/vince-prof-pilates.jpg' },
      photoAlt: 'Vince, professeur de Pilates et Yoga',
      formation: "Pilates Mat 1 à l'IMF · 200h Yoga Vinyasa · CQP ALS AGEE",
      credentials: ["Pilates Mat 1 — Institut de Méthode de la Forme (IMF)", '200h Yoga Vinyasa Teacher Training', "Diplôme d'État — Activités Physiques et Sportives (CQP ALS AGEE)", 'Diplôme en mobilité fonctionnelle'],
      bio: ["Après avoir travaillé dans l'Art, Vince décide de se consacrer à son autre passion : le mouvement. Coach depuis neuf ans, mixant yoga et Pilates.", "Il aime proposer des séances créatives qui reflètent la personnalité de chacun. Un enseignement bienveillant et une passion pour l'éveil."],
      sameAs: [],
    },
    {
      name: 'Elizabeth', role: 'Praticienne en hypnose & bien-être', index: '05', order: 5, imageRight: true,
      photo: { _type: 'externalFile', url: '/images/profs/elizabeth-prof-pilates.jpg' },
      photoAlt: 'Elizabeth, praticienne en hypnose',
      formation: "Diplômée de l'École Centrale d'Hypnose de Paris",
      credentials: ["Diplôme — École Centrale d'Hypnose de Paris", 'Spécialisation gestion des traumas et psychopathologies'],
      bio: ["Elizabeth est praticienne en hypnose et tarologue, spécialisée en gestion des traumas. Elle vous guide à travers des pratiques de respiration, de visualisation et de relaxation guidée.", "L'auto-hypnose permet de relâcher les tensions mentales et d'installer un sentiment profond de sérénité. Elizabeth vous guide en complémentarité des séances de Pilates."],
      sameAs: [],
    },
  ]
  for (const p of profs) {
    await client.create({ _type: 'prof', ...p })
  }
  console.log(`✅ ${profs.length} professeurs`)

  // ── 5. Tarifs ────────────────────────────────────────────────────────────
  const plans: Array<{ name: string; tagline: string; price: number; period: string; order: number; highlight: boolean; badge?: string; imageUrl: string; features: string[] }> = [
    {
      name: 'Mensuel',     tagline: 'Idéal pour découvrir',              price: 29,  period: 'mois',   order: 1, highlight: false, imageUrl: '/images/plan-mensuel.jpg',
      features: ["7 jours d'essai offerts", 'Accès illimité à +350 cours', 'Sur web, mobile et TV', 'Annulation à tout moment'],
    },
    {
      name: 'Trimestriel', tagline: 'Idéal pour obtenir des résultats',  price: 75,  period: '3 mois', order: 2, highlight: true,  badge: "15% d'économie", imageUrl: '/images/plan-trimestriel.jpg',
      features: ["7 jours d'essai offerts", 'Accès illimité à +350 cours', 'Sur web, mobile et TV', 'Annulation à tout moment'],
    },
    {
      name: 'Annuel',      tagline: 'Idéal pour transformer son corps',  price: 229, period: 'an',     order: 3, highlight: false, badge: "34% d'économie", imageUrl: '/images/cours/cours-pilates-stretching.jpg',
      features: ["7 jours d'essai offerts", 'Accès illimité à +350 cours', 'Sur web, mobile et TV', 'Le tarif le plus avantageux', 'Annulation à tout moment'],
    },
  ]
  for (const p of plans) {
    await client.create({ _type: 'pricingPlan', ...p })
  }
  console.log(`✅ ${plans.length} tarifs`)

  console.log('\n🎉 Seed terminé ! Toutes les données sont dans Sanity.')
  console.log('👉 Publie-les sur https://leclubpilates.sanity.studio')
}

seed().catch(console.error)
