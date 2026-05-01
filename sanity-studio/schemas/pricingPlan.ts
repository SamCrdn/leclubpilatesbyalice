import { defineType, defineField } from 'sanity'

export const pricingPlanType = defineType({
  name: 'pricingPlan',
  title: 'Tarifs',
  type: 'document',
  fields: [
    defineField({ name: 'name',      title: 'Nom (ex: Mensuel)',                   type: 'string' }),
    defineField({ name: 'tagline',   title: 'Accroche (ex: Idéal pour découvrir)', type: 'string' }),
    defineField({ name: 'price',     title: 'Prix (€)',                            type: 'number' }),
    defineField({ name: 'period',    title: 'Période (ex: mois, 3 mois, an)',      type: 'string' }),
    defineField({
      name: 'features',
      title: 'Avantages (un par entrée)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'badge',     title: 'Badge promo (ex: 15% d\'économie)',  type: 'string' }),
    defineField({ name: 'highlight', title: 'Mettre en avant (fond sombre)',       type: 'boolean', initialValue: false }),
    defineField({ name: 'imageUrl',  title: 'Image (chemin, ex: /images/plan-mensuel.jpg)', type: 'string' }),
    defineField({ name: 'order',     title: 'Ordre d\'affichage',                 type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'price' } },
})
