import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({
      name: 'promoBanner',
      title: 'Bannière promo',
      type: 'object',
      fields: [
        defineField({ name: 'active',     title: 'Afficher',          type: 'boolean', initialValue: false }),
        defineField({ name: 'emoji',      title: 'Emoji',             type: 'string'  }),
        defineField({ name: 'line1',      title: 'Ligne 1 (titre)',   type: 'string'  }),
        defineField({ name: 'line2',      title: 'Ligne 2 (sous-titre)', type: 'string' }),
        defineField({ name: 'ctaLabel',   title: 'Texte du bouton',   type: 'string'  }),
        defineField({ name: 'href',       title: 'Lien',              type: 'string'  }),
        defineField({ name: 'storageKey', title: 'Clé de session (unique par promo, ex: promo-ete-2026)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Chiffres clés',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value',    title: 'Valeur (ex: +350)',        type: 'string' }),
          defineField({ name: 'label',    title: 'Label (ex: cours disponibles)', type: 'string' }),
          defineField({ name: 'href',     title: 'Lien',                    type: 'string' }),
          defineField({ name: 'external', title: 'Lien externe',            type: 'boolean', initialValue: true }),
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
  ],
})
