import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Témoignages',
  type: 'document',
  fields: [
    defineField({ name: 'quote',    title: 'Témoignage',                   type: 'text', rows: 4 }),
    defineField({ name: 'name',     title: 'Prénom',                       type: 'string' }),
    defineField({ name: 'role',     title: 'Rôle (ex: 26 ans · Membre)',   type: 'string' }),
    defineField({ name: 'initials', title: 'Initiales (ex: S ou LA)',      type: 'string', validation: Rule => Rule.max(3) }),
    defineField({ name: 'order',    title: 'Ordre d\'affichage',           type: 'number', initialValue: 0 }),
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'quote' } },
})
