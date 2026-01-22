import type { PackageDocNavigation } from '@docs/packages/navigation.utils'

export const ESLINT_NAVIGATION: PackageDocNavigation = {
  link: 'pages/getting-started/installation',
  title: 'Linting',
  path: 'eslint',
  sidebar: [
    {
      text: 'Getting started',
      items: [
        {
          text: 'Installation',
          link: '/pages/getting-started/installation',
        },
        {
          text: 'Oxlint',
          link: '/pages/getting-started/oxlint',
        },
      ],
    },
    {
      text: 'Tools',
      items: [
        {
          text: 'ESLint Inspector',
          link: '/pages/tools/eslint-inspector',
        },
      ],
    },
  ],
}
