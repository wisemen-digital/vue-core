import type { PackageDocNavigation } from '@docs/packages/navigation.utils'

export const FORMANGO_NAVIGATION: PackageDocNavigation = {
  link: 'guide/getting-started',
  title: 'Formango',
  path: 'formango',
  sidebar: [
    {
      text: 'Guide',
      items: [
        {
          text: 'Getting Started',
          link: '/guide/getting-started',
        },
        {
          text: 'Devtools',
          link: '/guide/devtools',
        },
      ],
    },
    {
      text: 'API Reference',
      items: [
        {
          text: 'useForm',
          link: '/api/useForm',
        },
        {
          text: 'Field',
          link: '/api/field',
        },
        {
          text: 'Field Array',
          link: '/api/field-array',
        },
      ],
    },
    {
      text: 'Examples',
      items: [
        {
          text: 'Subforms',
          link: '/examples/subforms',
        },
        {
          text: 'External Errors',
          link: '/examples/external-errors',
        },
      ],
    },
    {
      text: 'Best Practices',
      items: [
        {
          text: 'Custom Input',
          link: '/best-practices/custom-input',
        },
        {
          text: 'i18n',
          link: '/best-practices/i18n',
        },
      ],
    },
  ],
}
