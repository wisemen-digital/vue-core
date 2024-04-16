import { defineConfig } from 'vitepress'

const guide = [
  {
    text: 'Getting started',
    link: '/guide/getting-started'
  }
]

const docs = [
  {
    text: 'Button',
    items: [
      {
        text: 'AppButton',
        link: '/components/app-button'
      },
      {
        text: 'AppIconButton',
        link: '/components/app-icon-button'
      },
      {
        text: 'AppRouterLinkButton',
        link: '/components/app-router-link-button'
      },
    ]
  },
  {
    'text': 'Combobox',
    items: [
      {
        text: 'AppCombobox',
        link: '/components/app-combobox'
      },
      {
        text: 'AppMultiCombobox',
        link: '/components/app-multi-combobox'
      },
      {
        text: 'FormCombobox',
        link: '/components/form-combobox'
      },
      {
        text: 'FormMultiCombobox',
        link: '/components/form-multi-combobox'
      }
    ]
  },
  {
    text: 'FormCheckbox',
    items: [
      {
        text: 'FormCheckbox',
        link: '/components/form-checkbox'
      },
      {
        text: 'FormCheckboxGroup',
        link: '/components/form-checkbox-group'
      }
    ]
  },
  {
    text: 'Input',
    items: [
      {
        text: 'AppInput',
        link: '/components/app-input'
      },
      {
        text: 'FormInput',
        link: '/components/form-input'
      }
    ]
  },
  {
    text: 'Select',
    items: [
      {
        text: 'AppSelect',
        link: '/components/app-select'
      },
      {
        text: 'FormSelect',
        link: '/components/form-select'
      }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  title: "Vue Core",
  description: "Vue Core",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Guide',
        items: guide
      },
      {
        text: 'Docs',
        items: docs,
      }
    ],
  }
})
