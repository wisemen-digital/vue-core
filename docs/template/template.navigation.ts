import { icons } from '../icons/icons'
import type { PackageDocNavigation } from '../packages/navigation'

export const TEMPLATE_NAVIGATION: PackageDocNavigation = {
  title: 'Template',
  link: 'index',
  path: 'template',
  sidebar: [
    {
      text: 'Directory',
      link: '/template/directory',
      collapsed: true,
      items: [
        {
          text: 'api',
          link: '/template/directory/api',
          icon: icons.apiFolder,
        },
        {
          text: 'client',
          link: '/template/directory/client',
          icon: icons.clientFolder,
        },
        {
          text: 'composables',
          link: '/template/directory/composables',
          icon: icons.composablesFolder,
        },
        {
          text: 'configs',
          link: '/template/directory/configs',
          icon: icons.configsFolder,
        },

      ],
    },

  ],
}
