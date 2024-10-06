import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface ButtonStyleConfig extends BaseStyleConfig {
  '--button-bg-color-active': string
  '--button-bg-color-default': string
  '--button-bg-color-disabled': string
  '--button-bg-color-focus': string
  '--button-bg-color-hover': string

  '--button-border-color-active': string
  '--button-border-color-default': string
  '--button-border-color-disabled': string
  '--button-border-color-focus': string
  '--button-border-color-hover': string

  '--button-border-radius-default': string
  '--button-font-size-default': string
  '--button-font-weight-default': string
  '--button-height-default': string
  '--button-icon-color-active': string

  '--button-icon-color-default': string

  '--button-icon-color-disabled': string
  '--button-icon-color-focus': string
  '--button-icon-color-hover': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-left-default`
  '--button-icon-left-spacing-default': string
  // Spacing between icon and text. To change the spacing between icon and border,
  // refer to `--button-padding-right-default`
  '--button-icon-right-spacing-default': string

  // Icons
  '--button-icon-size-default': string
  '--button-loader-color-active': string

  '--button-loader-color-default': string

  '--button-loader-color-disabled': string
  '--button-loader-color-focus': string
  '--button-loader-color-hover': string

  // Loader
  '--button-loader-size-default': string
  '--button-padding-left-default': string
  '--button-padding-right-default': string

  '--button-ring-color-focus': string
  '--button-shadow-active': string
  '--button-shadow-default': string
  '--button-shadow-disabled': string
  '--button-shadow-focus': string

  '--button-shadow-hover': string
  '--button-text-color-active': string
  '--button-text-color-default': string
  '--button-text-color-disabled': string
  '--button-text-color-focus': string
  '--button-text-color-hover': string
}

defineStyleConfig({
  config: {
    '--button-bg-color-active': '#0069da',
    '--button-bg-color-default': '#007bff',
    '--button-bg-color-disabled': '#99c2ff',
    '--button-bg-color-focus': '#007bff',
    '--button-bg-color-hover': '#006fe6',

    '--button-border-color-active': '#007bff',
    '--button-border-color-default': '#007bff',
    '--button-border-color-disabled': '#99c2ff',
    '--button-border-color-focus': '#007bff',
    '--button-border-color-hover': '#007bff',

    '--button-border-radius-default': '6px',
    '--button-font-size-default': '14px',
    '--button-font-weight-default': '500',
    '--button-height-default': '40px',
    '--button-icon-color-active': '#ffffff',

    '--button-icon-color-default': '#ffffff',

    '--button-icon-color-disabled': '#fafafa',
    '--button-icon-color-focus': '#ffffff',
    '--button-icon-color-hover': '#ffffff',
    '--button-icon-left-spacing-default': '10px',
    '--button-icon-right-spacing-default': '10px',

    '--button-icon-size-default': '14px',
    '--button-loader-color-active': '#ffffff',

    '--button-loader-color-default': '#ffffff',

    '--button-loader-color-disabled': '#fafafa',
    '--button-loader-color-focus': '#ffffff',
    '--button-loader-color-hover': '#ffffff',

    '--button-loader-size-default': '18px',
    '--button-padding-left-default': '12px',
    '--button-padding-right-default': '12px',

    '--button-ring-color-focus': '#007bff',
    '--button-shadow-active': '0px 0px 0px 0px #18181b',
    '--button-shadow-default': '0px 0px 0px 0px #18181b',
    '--button-shadow-disabled': '0px 0px 0px 0px #b3d4ff',
    '--button-shadow-focus': '0px 0px 0px 0px #18181b',

    '--button-shadow-hover': '0px 0px 0px 0px #18181b',
    '--button-text-color-active': '#ffffff',
    '--button-text-color-default': '#ffffff',
    '--button-text-color-disabled': '#fafafa',
    '--button-text-color-focus': '#ffffff',
    '--button-text-color-hover': '#ffffff',
  },
  selector: ':root',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-bg-color-active': 'rgb(246, 246, 250)',
    '--button-bg-color-default': 'transparent',
    '--button-bg-color-disabled': 'transparent',
    '--button-bg-color-focus': 'rgb(250, 250, 253)',
    '--button-bg-color-hover': 'rgb(250, 250, 253)',

    '--button-border-color-active': '#0069da',
    '--button-border-color-default': '#007bff',
    '--button-border-color-disabled': '#99c2ff',
    '--button-border-color-focus': '#006fe6',
    '--button-border-color-hover': '#006fe6',

    '--button-icon-color-active': '#0069da',
    '--button-icon-color-default': '#007bff',
    '--button-icon-color-disabled': '#99c2ff',
    '--button-icon-color-focus': '#006fe6',
    '--button-icon-color-hover': '#006fe6',

    '--button-loader-color-active': '#007bff',
    '--button-loader-color-default': '#007bff',
    '--button-loader-color-disabled': '#007bff',
    '--button-loader-color-focus': '#007bff',
    '--button-loader-color-hover': '#007bff',

    '--button-ring-color-active': '#007bff',
    '--button-ring-color-default': '#007bff',
    '--button-ring-color-disabled': '#007bff',
    '--button-ring-color-focus': '#007bff',
    '--button-ring-color-hover': '#007bff',

    '--button-text-color-active': '#0069da',
    '--button-text-color-default': '#007bff',
    '--button-text-color-disabled': '#99c2ff',
    '--button-text-color-focus': '#006fe6',
    '--button-text-color-hover': '#006fe6',
  },
  selector: '.btn-outline',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-bg-color-active': '#e6e6e6',
    '--button-bg-color-default': 'transparent',
    '--button-bg-color-disabled': 'transparent',
    '--button-bg-color-focus': '#efefef',
    '--button-bg-color-hover': '#eeeef1',

    '--button-border-color-active': '#f4f4f5',
    '--button-border-color-default': 'transparent',
    '--button-border-color-disabled': 'transparent',
    '--button-border-color-focus': '#f4f4f5',
    '--button-border-color-hover': '#f4f4f5',

    '--button-icon-color-active': '#667081',
    '--button-icon-color-default': '#98A2B3',
    '--button-icon-color-disabled': '#a4a4a7',
    '--button-icon-color-focus': '#7a8495',
    '--button-icon-color-hover': '#7a8495',

    '--button-loader-color-default': '#18181b',

    '--button-ring-color-focus': '#7a8495',
    '--button-text-color-active': '#18181b',
    '--button-text-color-default': '#18181b',
    '--button-text-color-disabled': 'rgb(164, 164, 167)',
    '--button-text-color-focus': '#18181b',

    '--button-text-color-hover': '#18181b',
  },
  selector: '.btn-ghost',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-bg-color-active': '#e6e6e6',
    '--button-bg-color-default': '#f4f4f5',
    '--button-bg-color-disabled': 'rgb(244, 244, 245)',
    '--button-bg-color-focus': '#efefef',
    '--button-bg-color-hover': '#eeeef1',

    '--button-border-color-active': '#f4f4f5',
    '--button-border-color-default': '#f4f4f5',
    '--button-border-color-disabled': '#f4f4f5',
    '--button-border-color-focus': '#f4f4f5',
    '--button-border-color-hover': '#f4f4f5',

    '--button-icon-color-active': '#18181b',
    '--button-icon-color-default': '#18181b',
    '--button-icon-color-disabled': 'rgb(164, 164, 167)',
    '--button-icon-color-focus': '#18181b',
    '--button-icon-color-hover': '#18181b',

    '--button-ring-color-active': '#18181b',
    '--button-ring-color-default': '#18181b',
    '--button-ring-color-disabled': '#18181b',
    '--button-ring-color-focus': '#18181b',
    '--button-ring-color-hover': '#18181b',

    '--button-text-color-active': '#18181b',
    '--button-text-color-default': '#18181b',
    '--button-text-color-disabled': 'rgb(164, 164, 167)',
    '--button-text-color-focus': '#18181b',
    '--button-text-color-hover': '#18181b',
  },
  selector: '.btn-muted',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-bg-color-active': '#e50000',
    '--button-bg-color-default': '#ff0202',
    '--button-bg-color-disabled': '#ff9898',
    '--button-bg-color-focus': '#f30000',
    '--button-bg-color-hover': '#f30000',

    '--button-border-color-active': '#f30000',
    '--button-border-color-default': '#ff0202',
    '--button-border-color-disabled': '#ff9898',
    '--button-border-color-focus': '#f30000',
    '--button-border-color-hover': '#f30000',

    '--button-icon-color-active': '#ffffff',
    '--button-icon-color-default': '#ffffff',
    '--button-icon-color-disabled': '#ffffff',
    '--button-icon-color-focus': '#ffffff',
    '--button-icon-color-hover': '#ffffff',

    '--button-loader-color-active': '#ffffff',
    '--button-loader-color-default': '#ffffff',
    '--button-loader-color-disabled': '#ffffff',
    '--button-loader-color-focus': '#ffffff',
    '--button-loader-color-hover': '#ffffff',

    '--button-ring-color-active': '#ff0202',
    '--button-ring-color-default': '#ff0202',
    '--button-ring-color-disabled': '#ff0202',
    '--button-ring-color-focus': '#ff0202',
    '--button-ring-color-hover': '#ff0202',

    '--button-text-color-active': '#ffffff',
    '--button-text-color-default': '#ffffff',
    '--button-text-color-disabled': '#ffffff',
    '--button-text-color-focus': '#ffffff',
    '--button-text-color-hover': '#ffffff',
  },
  selector: '.btn-destructive',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-font-size-default': '12px',
    '--button-font-weight-default': '500',
    '--button-height-default': '32px',

    '--button-loader-size-default': '14px',
    '--button-padding-left-default': '8px',

    '--button-padding-right-default': '8px',
  },
  selector: '.btn-sm',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-font-size-default': '16px',
    '--button-font-weight-default': '600',
    '--button-height-default': '48px',

    '--button-loader-size-default': '20px',
    '--button-padding-left-default': '16px',

    '--button-padding-right-default': '16px',
  },
  selector: '.btn-lg',
  component: 'button',
})

defineStyleConfig({
  config: {
    '--button-font-size-default': '14px',
    '--button-font-weight-default': '500',
    '--button-height-default': '100%',

    '--button-loader-size-default': '18px',
    '--button-padding-left-default': '12px',

    '--button-padding-right-default': '12px',
  },
  selector: '.btn-full',
  component: 'button',
})
