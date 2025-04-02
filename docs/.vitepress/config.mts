import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import pkg from '../../packages/components-next/package.json'
import ComponentPreviewPlugin from './plugins/ComponentPreview'
import ComponentPreviewV1Plugin from './plugins/ComponentPreviewV1'

// @ts-expect-error - Build fails
if (typeof __VUE_PROD_DEVTOOLS__ === 'undefined') {
  // @ts-expect-error - Build fails
  globalThis.__VUE_PROD_DEVTOOLS__ = false
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core',
  title: 'Vue Core',
  description: 'The central repository of Wisemen for all internal Vue packages.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Packages',
        items: [
          {
            text: `Components (${pkg.version})`,
            link: 'packages/components-next/getting-started/installation',
          },
          {
            text: 'Components v1',
            link: 'packages/components-v1/guide/getting-started',
          },
        ],
      },
    ],

    sidebar: {
      '/packages/main': [
        {
          text: `Components (${pkg.version})`,
          link: 'packages/components-next/getting-started/installation',
        },
        {
          text: 'Components v1',
          link: 'packages/components-v1/guide/getting-started',
        },
      ],

      'packages/components-next': [
        {
          text: 'Getting started',
          items: [
            { text: 'Installation', link: '/packages/components-next/getting-started/installation' },
            { text: 'Theming', link: '/packages/components-next/getting-started/theming' },
            { text: 'Icons', link: '/packages/components-next/getting-started/icons' },
            { text: 'Customization', link: '/packages/components-next/getting-started/customization' },
            { text: 'Composition', link: '/packages/components-next/getting-started/composition' },
          ],
        },
        {
          text: 'Components',
          items: [
            {
              text: 'Buttons & Links',
              items: [
                { text: 'Button', link: '/packages/components-next/components/button/button' },
                { text: 'Icon Button', link: '/packages/components-next/components/icon-button/icon-button' },
                { text: 'Router Link Button', link: '/packages/components-next/components/router-link-button/router-link-button' },
              ],
            },
            {
              text: 'Forms & Inputs',
              items: [
                { text: 'Autocomplete', link: '/packages/components-next/components/autocomplete/autocomplete' },
                { text: 'Address Autocomplete', link: '/packages/components-next/components/address-autocomplete/address-autocomplete' },
                { text: 'Checkbox Group', link: '/packages/components-next/components/checkbox-group/checkbox-group' },
                { text: 'Checkbox', link: '/packages/components-next/components/checkbox/checkbox' },
                { text: 'Date Field', link: '/packages/components-next/components/date-field/date-field' },
                { text: 'Date Picker', link: '/packages/components-next/components/date-picker/date-picker' },
                { text: 'Form Field', link: '/packages/components-next/components/form-field/form-field' },
                { text: 'Number Field', link: '/packages/components-next/components/number-field/number-field' },
                { text: 'Password Field', link: '/packages/components-next/components/password-field/password-field' },
                { text: 'Phone Number Field', link: '/packages/components-next/components/phone-number-field/phone-number-field' },
                { text: 'Radio Group', link: '/packages/components-next/components/radio-group/radio-group' },
                { text: 'Select', link: '/packages/components-next/components/select/select' },
                { text: 'Switch', link: '/packages/components-next/components/switch/switch' },
                { text: 'Text Field', link: '/packages/components-next/components/text-field/text-field' },
                { text: 'Textarea', link: '/packages/components-next/components/textarea/textarea' },
                { text: 'Time Field', link: '/packages/components-next/components/time-field/time-field' },
              ],
            },
            {
              text: 'Navigation & Layout',
              items: [
                { text: 'Dialog', link: '/packages/components-next/components/dialog/dialog' },
                { text: 'Dropdown Menu', link: '/packages/components-next/components/dropdown-menu/dropdown-menu' },
                { text: 'Popover', link: '/packages/components-next/components/popover/popover' },
                { text: 'Router Link Tabs', link: '/packages/components-next/components/router-link-tabs/router-link-tabs' },
                { text: 'Tabs', link: '/packages/components-next/components/tabs/tabs' },
                { text: 'Tooltip', link: '/packages/components-next/components/tooltip/tooltip' },
              ],
            },
            {
              text: 'Keyboard & Shortcuts',
              items: [
                { text: 'Keyboard Key', link: '/packages/components-next/components/keyboard-key/keyboard-key' },
                { text: 'Keyboard Shortcut', link: '/packages/components-next/components/keyboard-shortcut/keyboard-shortcut' },
                { text: 'Keyboard Shortcut Provider', link: '/packages/components-next/components/keyboard-shortcut-provider/keyboard-shortcut-provider' },
              ],
            },
            {
              text: 'Miscellaneous',
              items: [
                { text: 'Avatar', link: '/packages/components-next/components/avatar/avatar' },
              ],
            },
          ],
        },
      ],
      'packages/components-v1': [
        {
          link: '/packages/components-v1/guide/getting-started',
          text: 'Getting started',
        },
        {
          link: '/packages/components-v1/guide/extending-icons',
          text: 'Extending icons',
        },
        {
          link: '/packages/components-v1/guide/styling',
          text: 'Styling API',
        },
        {
          text: 'Buttons',
          items: [
            { text: 'Button', link: '/packages/components-v1/components/button/button' },
            { text: 'Icon Button', link: '/packages/components-v1/components/icon-button/icon-button' },
            { text: 'Router Link Button', link: '/packages/components-v1/components/router-link-button/router-link-button' },
            { text: 'Toggle', link: '/packages/components-v1/components/toggle/toggle' },
          ],
        },
        {
          text: 'Form Utilities',
          items: [
            { text: 'Input Field', link: '/packages/components-v1/components/input-field/input-field' },
            { text: 'Input Field Error', link: '/packages/components-v1/components/input-field-error/input-field-error' },
            { text: 'Input Field Hint', link: '/packages/components-v1/components/input-field-hint/input-field-hint' },
            { text: 'Input Field Label', link: '/packages/components-v1/components/input-field-label/input-field-label' },
          ],
        },
        {
          text: 'Form Components',
          items: [
            { text: 'Checkbox', link: '/packages/components-v1/components/checkbox/checkbox' },
            { text: 'Checkbox Group', link: '/packages/components-v1/components/checkbox-group/checkbox-group' },
            { text: 'Date Field', link: '/packages/components-v1/components/date-field/date-field' },
            { text: 'Number Field', link: '/packages/components-v1/components/number-field/number-field' },
            { text: 'Password Field', link: '/packages/components-v1/components/password-field/password-field' },
            { text: 'Phone Number Field', link: '/packages/components-v1/components/phone-number-field/phone-number-field' },
            { text: 'Radio Group', link: '/packages/components-v1/components/radio-group/radio-group' },
            { text: 'Select', link: '/packages/components-v1/components/select/select' },
            { text: 'Switch', link: '/packages/components-v1/components/switch/switch' },
            { text: 'Text Field', link: '/packages/components-v1/components/text-field/text-field' },
            { text: 'Textarea', link: '/packages/components-v1/components/textarea/textarea' },
          ],
        },
        {
          text: 'Overlays & Popups',
          items: [
            { text: 'Dialog', link: '/packages/components-v1/components/dialog/dialog' },
            { text: 'Drawer', link: '/packages/components-v1/components/drawer/drawer' },
            { text: 'Dropdown Menu', link: '/packages/components-v1/components/dropdown-menu/dropdown-menu' },
            { text: 'Popover', link: '/packages/components-v1/components/popover/popover' },
            { text: 'Tooltip', link: '/packages/components-v1/components/tooltip/tooltip' },
            { text: 'Toast', link: '/packages/components-v1/components/toast/toast' },
          ],
        },
        {
          text: 'Navigation & Layout',
          items: [
            { text: 'Breadcrumbs', link: '/packages/components-v1/components/breadcrumbs/breadcrumbs' },
            { text: 'Tabs', link: '/packages/components-v1/components/tabs/tabs' },
            { text: 'Table', link: '/packages/components-v1/components/table/table' },
            { text: 'Table Pagination', link: '/packages/components-v1/components/table/table-pagination' },
          ],
        },
        {
          text: 'Other display components',
          items: [
            { text: 'Calendar', link: '/packages/components-v1/components/calendar/calendar' },
          ],
        },
        {
          text: 'Transitions',
          items: [
            { text: 'Collapsable', link: '/packages/components-v1/components/collapsable/collapsable' },
          ],
        },
        {
          text: 'Utilities',
          items: [
            { text: 'Config Provider', link: '/packages/components-v1/components/config-provider/config-provider' },
            { text: 'Theme Provider', link: '/packages/components-v1/components/theme-provider/theme-provider' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wisemen-digital/vue-core/packages/components-next' },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
      md.use(ComponentPreviewV1Plugin)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
