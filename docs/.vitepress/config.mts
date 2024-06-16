import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
  {
    link: '/guide/cli',
    text: 'CLI',
  },
]

const query = [
  {
    link: '/query/getting-started',
    text: 'Getting started',
  },
]

const docs = [
  {
    collapsed: true,
    items: [
      {
        link: '/components/badge/app-badge',
        text: 'AppBadge',
      },
    ],

    text: 'Badge',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/breadcrumbs/app-breadcrumbs',
        text: 'AppBreadcrumbs',
      },
    ],
    text: 'Breadcrumbs',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/button/app-button',
        text: 'AppButton',
      },
      {
        link: '/components/button/app-icon-button',
        text: 'AppIconButton',
      },
      {
        link: '/components/button/app-router-link-button',
        text: 'AppRouterLinkButton',
      },
    ],
    text: 'Button',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/checkbox/form-checkbox',
        text: 'FormCheckbox',
      },
      {
        link: '/components/checkbox/form-checkbox-group',
        text: 'FormCheckboxGroup',
      },
    ],
    text: 'Checkbox',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/combobox/app-combobox',
        text: 'AppCombobox',
      },
      {
        link: '/components/combobox/app-multi-combobox',
        text: 'AppMultiCombobox',
      },
      {
        link: '/components/combobox/form-combobox',
        text: 'FormCombobox',
      },
      {
        link: '/components/combobox/form-multi-combobox',
        text: 'FormMultiCombobox',
      },
    ],
    text: 'Combobox',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/dropdown-menu/app-dropdown-menu',
        text: 'AppDropdownMenu',
      },
    ],
    text: 'DropdownMenu',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/form-element/form-element',
        text: 'FormElement',
      },
    ],
    text: 'FormElement',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/form-error/form-error',
        text: 'FormError',
      },
    ],
    text: 'FormError',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/form-group/form-group',
        text: 'FormGroup',
      },
    ],
    text: 'FormGroup',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/icon/app-icon',
        text: 'AppIcon',
      },
    ],
    text: 'Icon',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/input/app-input',
        text: 'AppInput',
      },
      {
        link: '/components/input/app-number-input',
        text: 'AppNumberInput',
      },
      {
        link: '/components/input/form-input',
        text: 'FormInput',
      },
      {
        link: '/components/input/form-number-input',
        text: 'FormNumberInput',
      },
      {
        link: '/components/input/form-password-input',
        text: 'FormPasswordInput',
      },
      {
        link: '/components/input/form-phone-number-input',
        text: 'FormPhoneNumberInput',
      },
    ],
    text: 'Input',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/keyboard/app-keyboard-key',
        text: 'AppKeyboardKey',
      },
      {
        link: '/components/keyboard/app-keyboard-shortcut',
        text: 'AppKeyboardShortcut',
      },
      {
        link: '/components/keyboard/app-keyboard-shortcut-provider',
        text: 'AppKeyboardShortcutProvider',
      },
    ],
    text: 'Keyboard',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/popover/app-popover',
        text: 'AppPopover',
      },
    ],
    text: 'Popover',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/select/app-select',
        text: 'AppSelect',
      },
      {
        link: '/components/select/app-multi-select',
        text: 'AppMultiSelect',
      },
      {
        link: '/components/select/form-select',
        text: 'FormSelect',
      },
    ],
    text: 'Select',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/skeleton-loader/app-page-skeleton-loader',
        text: 'AppPageSkeletonLoader',
      },
      {
        link: '/components/skeleton-loader/app-skeleton-loader-button',
        text: 'AppSkeletonLoaderButton',
      },
      {
        link: '/components/skeleton-loader/app-skeleton-loader-row',
        text: 'AppSkeletonLoaderRow',
      },
      {
        link: '/components/skeleton-loader/app-skeleton-loader-rows',
        text: 'AppSkeletonLoaderRows',
      },
    ],
    text: 'SkeletonLoader',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/table/app-table',
        text: 'AppTable',
      },
      {
        link: '/components/table/app-table-local',
        text: 'AppTable (local)',
      },
      {
        link: '/components/table/app-table-skeleton-loader',
        text: 'AppTableSkeletonLoader',
      },
    ],
    text: 'Table',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/tags-input/app-tags-input',
        text: 'AppTagsInput',
      },
      {
        link: '/components/tags-input/form-tags-input',
        text: 'FormTagsInput',
      },
    ],
    text: 'TagsInput',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/text/app-text',
        text: 'AppText',
      },
    ],
    text: 'Text',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/textarea/app-textarea',
        text: 'AppTextarea',
      },
    ],
    text: 'Textarea',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/toggle/app-toggle',
        text: 'AppToggle',
      },
    ],
    text: 'Toggle',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/tooltip/app-tooltip',
        text: 'AppTooltip',
      },
    ],
    text: 'Tooltip',
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  description: 'Vue Core',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: '/', text: 'Home' },
      { link: '/markdown-examples', text: 'Examples' },
    ],

    search: {
      provider: 'local',
    },

    sidebar: [
      {
        items: guide,
        text: 'Guide',
      },
      {
        items: query,
        text: 'Query',
      },
      {
        collapsed: false,
        items: docs,
        text: 'Components',
      },
    ],
  },
  title: 'Vue Core',
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
