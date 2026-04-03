import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name:  'post',
  title: 'Article',
  type:  'document',
  fields: [
    defineField({
      name:       'title',
      title:      'Titre',
      type:       'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:       'slug',
      title:      'Slug (URL)',
      type:       'slug',
      options:    { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:  'category',
      title: 'Catégorie',
      type:  'string',
      options: {
        list: [
          { title: 'Pilates',      value: 'Pilates'      },
          { title: 'Bien-être',    value: 'Bien-être'    },
          { title: 'Nutrition',    value: 'Nutrition'    },
          { title: 'Conseils',     value: 'Conseils'     },
          { title: 'Témoignages',  value: 'Témoignages'  },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:       'excerpt',
      title:      'Résumé',
      type:       'text',
      rows:       3,
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name:  'mainImage',
      title: 'Image principale',
      type:  'image',
      options: { hotspot: true },
    }),
    defineField({
      name:  'readTime',
      title: 'Temps de lecture',
      type:  'string',
      placeholder: '5 min',
    }),
    defineField({
      name:       'publishedAt',
      title:      'Date de publication',
      type:       'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name:  'featured',
      title: 'Article à la une',
      type:  'boolean',
    }),
    defineField({
      name:  'body',
      title: 'Contenu',
      type:  'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Texte alternatif', type: 'string' },
            { name: 'caption', title: 'Légende', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'category' },
  },
  orderings: [
    {
      title: 'Date de publication',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
