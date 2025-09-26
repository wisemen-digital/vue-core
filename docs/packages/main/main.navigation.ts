import type { PackageDocNavigation } from '@docs/packages/navigation'

export const MAIN_DOC_NAVIGATION: PackageDocNavigation = {
  link: 'pages/index',
  title: 'Main',
  path: 'main',
  sidebar: [
    {
      text: `Main`,
      link: 'pages/index',
    },
    {
      text: `Other`,
      link: 'pages/other',
    },
  ],
}
