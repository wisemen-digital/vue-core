import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
]

const docs = [
  {
    items: [
      {
        link: '/components/badge/app-badge',
        text: 'AppBadge',
      },
    ],
    text: 'Badge',
  },
  {
    items: [
      {
        link: '/components/breadcrumbs/app-breadcrumbs',
        text: 'AppBreadcrumbs',
      },
    ],
    text: 'Breadcrumbs',
  },
  {
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
    items: [
      {
        link: '/components/form-element/form-element',
        text: 'FormElement',
      },
    ],
    text: 'FormElement',
  },
  {
    items: [
      {
        link: '/components/form-group/form-group',
        text: 'FormGroup',
      },
    ],
    text: 'FormGroup',
  },
  {
    items: [
      {
        link: '/components/icon/app-icon',
        text: 'AppIcon',
      },
    ],
    text: 'Icon',
  },
  {
    items: [
      {
        link: '/components/input/app-input',
        text: 'AppInput',
      },
      {
        link: '/components/input/form-input',
        text: 'FormInput',
      },
    ],
    text: 'Input',
  },
  {
    items: [
      {
        link: '/components/popover/app-popover',
        text: 'AppPopover',
      },
    ],
    text: 'Popover',
  },
  {
    items: [
      {
        link: '/components/app-select',
        text: 'AppSelect',
      },
      {
        link: '/components/form-select',
        text: 'FormSelect',
      },
    ],
    text: 'Select',
  },
  {
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
    items: [
      {
        link: '/components/table/app-table',
        text: 'AppTable',
      },
      {
        link: '/components/table/app-table-skeleton-loader',
        text: 'AppTableSkeletonLoader',
      },
    ],
    text: 'Table',
  },
  {
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
    items: [
      {
        link: '/components/text/app-text',
        text: 'AppText',
      },
    ],
    text: 'Text',
  },
  {
    items: [
      {
        link: '/components/textarea/app-textarea',
        text: 'AppTextarea',
      },
    ],
    text: 'Textarea',
  },
  {
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
        '@components': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
