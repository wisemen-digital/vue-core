import { resolve } from 'node:path'
import { defineConfig } from 'vitepress'

import ComponentPreviewPlugin from './plugins/ComponentPreview'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
  {
    link: '/guide/extending-icons',
    text: 'Extending icons',
  },
  {
    link: '/guide/styling',
    text: 'Styling API',
  },
]

const docs = [
  {
    link: '/components/autocomplete/address-autocomplete',
    text: 'AddressAutocomplete',
  },
  {
    link: '/components/autocomplete/autocomplete',
    text: 'Autocomplete',
  },
  {
    link: '/components/button/button',
    text: 'Button',
  },
  {
    link: '/components/calendar/calendar',
    text: 'Calendar',
  },
  {
    link: '/components/checkbox/checkbox',
    text: 'Checkbox',
  },
  {
    link: '/components/checkbox/checkbox-group',
    text: 'Checkbox Group',
  },
  {
    link: '/components/input-field/date-field',
    text: 'Date Field',
  },
  {
    link: '/components/dialog/dialog',
    text: 'Dialog',
  },
  {
    link: '/components/drawer/drawer',
    text: 'Drawer',
  },
  {
    link: '/components/dropdown-menu/dropdown-menu',
    text: 'Dropdown Menu',
  },
  {
    link: '/components/input-field/input-field',
    text: 'Input Field',
  },
  {
    link: '/components/keyboard/keyboard-shortcut',
    text: 'Keyboard Shortcut',
  },
  {
    link: '/components/keyboard/keyboard-shortcut-provider',
    text: 'Keyboard Shortcut Provider',
  },
  {
    link: '/components/popover/popover',
    text: 'Popover',
  },
  {
    link: '/components/input-field/text-field',
    text: 'Text Field',
  },
  {
    link: '/components/input-field/number-field',
    text: 'Number Field',
  },
  {
    link: '/components/input-field/password-field',
    text: 'Password Field',
  },
  {
    link: '/components/input-field/textarea',
    text: 'Textarea',
  },
  {
    link: '/components/input-field/phone-number-field',
    text: 'Phone Number Field',
  },
  {
    link: '/components/select/select',
    text: 'Select',
  },
  {
    link: '/components/switch/switch',
    text: 'Switch',
  },
  {
    link: '/components/radio-group/radio-group',
    text: 'Radio Group',
  },
  {
    link: '/components/table/table',
    text: 'Table',
  },
  {
    link: '/components/tabs/tabs',
    text: 'Tabs',
  },
  {
    link: '/components/theme-provider/theme-provider',
    text: 'Theme Provider',
  },
  {
    link: '/components/toast/toast',
    text: 'Toast',
  },
  {
    link: '/components/toggle/toggle',
    text: 'Toggle',
  },
  {
    link: '/components/tooltip/tooltip',
    text: 'Tooltip',
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  description: 'Vue Core',
  themeConfig: {
    nav: [],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: false,
            prefix: false,
            boost: {
              title: 10 
            },
          }
        }
      }
    },

    sidebar: [
      {
        items: guide,
        text: 'Guide',
      },
      {
        collapsed: false,
        items: docs,
        text: 'Components',
      },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
    },
  },
  title: 'Vue Core',
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
    plugins: [
      // tailwindcss(),
    ]
  },
})
