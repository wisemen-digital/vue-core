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
      {
        link: '/components/button/app-unstyled-button',
        text: 'AppUnstyledButton',
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
        link: '/components/combobox/app-tags-combobox',
        text: 'AppTagsCombobox',
      },
      {
        link: '/components/combobox/form-combobox',
        text: 'FormCombobox',
      },
      {
        link: '/components/combobox/form-multi-combobox',
        text: 'FormMultiCombobox',
      },
      {
        link: '/components/combobox/form-tags-combobox',
        text: 'FormTagsCombobox',
      },
    ],
    text: 'Combobox',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/container/app-container',
        text: 'AppContainer',
      },
    ],
    text: 'Container',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/date/app-date-picker',
        text: 'AppDatePicker',
      },
      {
        link: '/components/date/form-date-picker',
        text: 'FormDatePicker',
      },
    ],
    text: 'Date',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/dialog/app-dialog',
        text: 'AppDialog',
      },
    ],
    text: 'Dialog',
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
        link: '/components/form-label/form-label',
        text: 'FormLabel',
      },
    ],
    text: 'FormLabel',
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
        link: '/components/loader/app-loader',
        text: 'AppLoader',
      },
    ],
    text: 'Loader',
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
      {
        link: '/components/select/form-multi-select',
        text: 'FormMultiSelect',
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
        link: '/components/switch/form-switch',
        text: 'FormSwitch',
      },
    ],
    text: 'Switch',
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
        link: '/components/tabs/app-tabs',
        text: 'AppTabs',
      },
      {
        link: '/components/tabs/app-route-tabs',
        text: 'AppRouteTabs',
      },
    ],
    text: 'Tabs',
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
        link: '/components/toast/app-toast',
        text: 'AppToast',
      },
    ],
    text: 'Toast',
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
  {
    collapsed: true,
    items: [
      {
        link: '/components/transitions/app-collapse-transition',
        text: 'AppCollapseTransition',
      },
    ],
    text: 'Transitions',
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
