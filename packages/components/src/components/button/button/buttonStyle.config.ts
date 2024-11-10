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
  '--button-icon-size-default': string
  '--button-loader-color-active': string
  '--button-loader-color-default': string
  '--button-loader-color-disabled': string
  '--button-loader-color-focus': string
  '--button-loader-color-hover': string
  '--button-loader-size-default': string
  '--button-padding-left-default': string
  '--button-padding-right-default': string
  '--button-ring-color-focus': string
  '--button-ring-offset-color-focus': string
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

// Default
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--brand-primary-800)',
    '--button-bg-color-default': 'var(--brand-primary-600)',
    '--button-bg-color-disabled': 'var(--bg-disabled)',
    '--button-bg-color-focus': 'var(--brand-primary-600)',
    '--button-bg-color-hover': 'var(--brand-primary-700)',
    '--button-border-color-active': 'var(--brand-primary-800)',
    '--button-border-color-default': 'var(--brand-primary-600)',
    '--button-border-color-disabled': 'var(--border-disabled-subtle)',
    '--button-border-color-focus': 'var(--brand-primary-600)',
    '--button-border-color-hover': 'var(--brand-primary-700)',
    '--button-border-radius-default': 'var(--radius-md)',
    '--button-font-size-default': 'var(--text-sm)',
    '--button-font-weight-default': '500',
    '--button-height-default': '2.5rem',
    '--button-icon-color-active': 'var(--fg-white)',
    '--button-icon-color-default': 'var(--fg-white)',
    '--button-icon-color-disabled': 'var(--fg-disabled)',
    '--button-icon-color-focus': 'var(--fg-white)',
    '--button-icon-color-hover': 'var(--fg-white)',
    '--button-icon-left-spacing-default': 'var(--spacing-xs)',
    '--button-icon-right-spacing-default': 'var(--spacing-xs)',
    '--button-icon-size-default': 'var(--text-md)',
    '--button-loader-color-active': 'var(--fg-white)',
    '--button-loader-color-default': 'var(--fg-white)',
    '--button-loader-color-disabled': 'var(--fg-disabled)',
    '--button-loader-color-focus': 'var(--fg-white)',
    '--button-loader-color-hover': 'var(--fg-white)',
    '--button-loader-size-default': '1.125rem',
    '--button-padding-left-default': 'var(--spacing-xl)',
    '--button-padding-right-default': 'var(--spacing-xl)',
    '--button-ring-color-focus': 'var(--brand-primary-500)',
    '--button-ring-offset-color-focus': 'var(--bg-primary)',
    '--button-shadow-active': '0 0 0 0 transparent',
    '--button-shadow-default': '0 0 0 0 transparent',
    '--button-shadow-disabled': 'var(--shadow-xs)',
    '--button-shadow-focus': '0 0 0 0 transparent',
    '--button-shadow-hover': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--fg-white)',
    '--button-text-color-default': 'var(--fg-white)',
    '--button-text-color-disabled': 'var(--fg-disabled)',
    '--button-text-color-focus': 'var(--fg-white)',
    '--button-text-color-hover': 'var(--fg-white)',
  },
  selector: '.button-variant-default',
  component: 'button',
})

// Primary
defineStyleConfig({
  config: {},
  selector: '.btn-primary',
  component: 'button',
})

// Secondary gray
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--gray-50)',
    '--button-border-color-active': 'var(--gray-300)',
    '--button-border-color-default': 'var(--gray-300)',
    '--button-border-color-focus': 'var(--gray-300)',
    '--button-border-color-hover': 'var(--gray-300)',
    '--button-icon-color-active': 'var(--gray-900)',
    '--button-icon-color-default': 'var(--gray-700)',
    '--button-icon-color-focus': 'var(--gray-700)',
    '--button-icon-color-hover': 'var(--gray-800)',
    '--button-loader-color-active': 'var(--gray-900)',
    '--button-loader-color-default': 'var(--gray-700)',
    '--button-loader-color-focus': 'var(--gray-700)',
    '--button-loader-color-hover': 'var(--gray-800)',
    '--button-shadow-active': 'var(--shadow-xs)',
    '--button-shadow-default': 'var(--shadow-xs)',
    '--button-shadow-disabled': 'var(--shadow-xs)',
    '--button-shadow-focus': 'var(--shadow-xs)',
    '--button-shadow-hover': 'var(--shadow-xs)',
    '--button-text-color-active': 'var(--gray-900)',
    '--button-text-color-default': 'var(--gray-700)',
    '--button-text-color-focus': 'var(--gray-700)',
    '--button-text-color-hover': 'var(--gray-800)',
  },
  selector: '.btn-secondary-gray',
  component: 'button',
})

// Secondary gray dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-700)',
    '--button-bg-color-default': 'var(--gray-900)',
    '--button-bg-color-focus': 'var(--gray-700)',
    '--button-bg-color-hover': 'var(--gray-800)',
    '--button-border-color-active': 'var(--gray-700)',
    '--button-border-color-default': 'var(--gray-700)',
    '--button-border-color-focus': 'var(--gray-700)',
    '--button-border-color-hover': 'var(--gray-700)',
    '--button-icon-color-active': 'var(--gray-100)',
    '--button-icon-color-default': 'var(--gray-300)',
    '--button-icon-color-focus': 'var(--gray-300)',
    '--button-icon-color-hover': 'var(--gray-200)',
    '--button-loader-color-active': 'var(--gray-100)',
    '--button-loader-color-default': 'var(--gray-300)',
    '--button-loader-color-focus': 'var(--gray-300)',
    '--button-loader-color-hover': 'var(--gray-200)',
    '--button-text-color-active': 'var(--gray-100)',
    '--button-text-color-default': 'var(--gray-300)',
    '--button-text-color-focus': 'var(--gray-300)',
    '--button-text-color-hover': 'var(--gray-200)',
  },
  selector: '.dark.btn-secondary-gray',
  component: 'button',
})

// Secondary color
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--brand-primary-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--brand-primary-50)',
    '--button-border-color-active': 'var(--brand-primary-300)',
    '--button-border-color-default': 'var(--brand-primary-300)',
    '--button-border-color-focus': 'var(--brand-primary-300)',
    '--button-border-color-hover': 'var(--brand-primary-300)',
    '--button-icon-color-active': 'var(--brand-primary-900)',
    '--button-icon-color-default': 'var(--brand-primary-700)',
    '--button-icon-color-focus': 'var(--brand-primary-700)',
    '--button-icon-color-hover': 'var(--brand-primary-800)',
    '--button-loader-color-active': 'var(--brand-primary-900)',
    '--button-loader-color-default': 'var(--brand-primary-700)',
    '--button-loader-color-focus': 'var(--brand-primary-700)',
    '--button-loader-color-hover': 'var(--brand-primary-800)',
    '--button-shadow-active': 'var(--shadow-xs)',
    '--button-shadow-default': 'var(--shadow-xs)',
    '--button-shadow-disabled': 'var(--shadow-xs)',
    '--button-shadow-focus': 'var(--shadow-xs)',
    '--button-shadow-hover': 'var(--shadow-xs)',
    '--button-text-color-active': 'var(--brand-primary-800)',
    '--button-text-color-default': 'var(--brand-primary-700)',
    '--button-text-color-focus': 'var(--brand-primary-700)',
    '--button-text-color-hover': 'var(--brand-primary-800)',
  },
  selector: '.btn-secondary-color',
  component: 'button',
})

// Secondary color dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-700)',
    '--button-bg-color-default': 'var(--gray-900)',
    '--button-bg-color-focus': 'var(--gray-900)',
    '--button-bg-color-hover': 'var(--gray-800)',
    '--button-border-color-active': 'var(--gray-700)',
    '--button-border-color-default': 'var(--gray-700)',
    '--button-border-color-focus': 'var(--gray-700)',
    '--button-border-color-hover': 'var(--gray-700)',
    '--button-icon-color-active': 'var(--gray-100)',
    '--button-icon-color-default': 'var(--gray-300)',
    '--button-icon-color-focus': 'var(--gray-300)',
    '--button-icon-color-hover': 'var(--gray-200)',
    '--button-loader-color-active': 'var(--gray-100)',
    '--button-loader-color-default': 'var(--gray-300)',
    '--button-loader-color-focus': 'var(--gray-300)',
    '--button-loader-color-hover': 'var(--gray-200)',
    '--button-text-color-active': 'var(--gray-100)',
    '--button-text-color-default': 'var(--gray-300)',
    '--button-text-color-focus': 'var(--gray-300)',
    '--button-text-color-hover': 'var(--gray-200)',
  },
  selector: '.dark.btn-secondary-color',
  component: 'button',
})

// Tertiary gray
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--gray-50)',
    '--button-border-color-active': 'var(--gray-50)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--gray-50)',
    '--button-icon-color-active': 'var(--gray-700)',
    '--button-icon-color-default': 'var(--gray-600)',
    '--button-icon-color-focus': 'var(--gray-600)',
    '--button-icon-color-hover': 'var(--gray-700)',
    '--button-loader-color-active': 'var(--gray-700)',
    '--button-loader-color-default': 'var(--gray-600)',
    '--button-loader-color-focus': 'var(--gray-600)',
    '--button-loader-color-hover': 'var(--gray-700)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--gray-700)',
    '--button-text-color-default': 'var(--gray-600)',
    '--button-text-color-focus': 'var(--gray-600)',
    '--button-text-color-hover': 'var(--gray-700)',
  },
  selector: '.btn-tertiary-gray',
  component: 'button',
})

// Tertiary gray dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-700)',
    '--button-bg-color-hover': 'var(--gray-800)',
    '--button-border-color-active': 'var(--bg-primary)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--bg-primary)',
    '--button-icon-color-active': 'var(--gray-200)',
    '--button-icon-color-default': 'var(--gray-400)',
    '--button-icon-color-focus': 'var(--gray-400)',
    '--button-icon-color-hover': 'var(--gray-300)',
    '--button-loader-color-active': 'var(--gray-200)',
    '--button-loader-color-default': 'var(--gray-400)',
    '--button-loader-color-focus': 'var(--gray-400)',
    '--button-loader-color-hover': 'var(--gray-300)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--gray-200)',
    '--button-text-color-default': 'var(--gray-400)',
    '--button-text-color-focus': 'var(--gray-400)',
    '--button-text-color-hover': 'var(--gray-300)',
  },
  selector: '.dark.btn-tertiary-gray',
  component: 'button',
})

// Tertiary color
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--brand-primary-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--brand-primary-50)',
    '--button-border-color-active': 'var(--brand-primary-50)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--brand-primary-50)',
    '--button-icon-color-active': 'var(--brand-primary-800)',
    '--button-icon-color-default': 'var(--brand-primary-700)',
    '--button-icon-color-focus': 'var(--brand-primary-700)',
    '--button-icon-color-hover': 'var(--brand-primary-800)',
    '--button-loader-color-active': 'var(--brand-primary-800)',
    '--button-loader-color-default': 'var(--brand-primary-700)',
    '--button-loader-color-focus': 'var(--brand-primary-700)',
    '--button-loader-color-hover': 'var(--brand-primary-800)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--brand-primary-800)',
    '--button-text-color-default': 'var(--brand-primary-700)',
    '--button-text-color-focus': 'var(--brand-primary-700)',
    '--button-text-color-hover': 'var(--brand-primary-800)',
  },
  selector: '.btn-tertiary-color',
  component: 'button',
})

// Tertiary color dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--gray-700)',
    '--button-bg-color-hover': 'var(--gray-800)',
    '--button-border-color-active': 'var(--bg-primary)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--bg-primary)',
    '--button-icon-color-active': 'var(--gray-200)',
    '--button-icon-color-default': 'var(--gray-400)',
    '--button-icon-color-focus': 'var(--gray-400)',
    '--button-icon-color-hover': 'var(--gray-300)',
    '--button-loader-color-active': 'var(--gray-200)',
    '--button-loader-color-default': 'var(--gray-400)',
    '--button-loader-color-focus': 'var(--gray-400)',
    '--button-loader-color-hover': 'var(--gray-300)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--gray-200)',
    '--button-text-color-default': 'var(--gray-400)',
    '--button-text-color-focus': 'var(--gray-400)',
    '--button-text-color-hover': 'var(--gray-300)',
  },
  selector: '.dark .btn-tertiary-color',
  component: 'button',
})

// Destructive primary
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--error-800)',
    '--button-bg-color-default': 'var(--error-600)',
    '--button-bg-color-disabled': 'var(--bg-disabled)',
    '--button-bg-color-focus': 'var(--error-600)',
    '--button-bg-color-hover': 'var(--error-700)',
    '--button-border-color-active': 'var(--error-800)',
    '--button-border-color-default': 'var(--error-600)',
    '--button-border-color-disabled': 'var(--border-disabled-subtle)',
    '--button-border-color-focus': 'var(--error-600)',
    '--button-border-color-hover': 'var(--error-700)',
    '--button-icon-color-active': 'var(--white)',
    '--button-icon-color-default': 'var(--white)',
    '--button-icon-color-disabled': 'var(--fg-disabled)',
    '--button-icon-color-focus': 'var(--white)',
    '--button-icon-color-hover': 'var(--white)',
    '--button-loader-color-active': 'var(--white)',
    '--button-loader-color-default': 'var(--white)',
    '--button-loader-color-disabled': 'var(--fg-disabled)',
    '--button-loader-color-focus': 'var(--white)',
    '--button-loader-color-hover': 'var(--white)',
    '--button-ring-color-focus': 'var(--error-500)',
    '--button-text-color-active': 'var(--white)',
    '--button-text-color-default': 'var(--white)',
    '--button-text-color-disabled': 'var(--fg-disabled)',
    '--button-text-color-focus': 'var(--white)',
    '--button-text-color-hover': 'var(--white)',
  },
  selector: '.btn-destructive-primary',
  component: 'button',
})

// Destructive secondary
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--error-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--error-50)',
    '--button-border-color-active': 'var(--error-300)',
    '--button-border-color-default': 'var(--error-300)',
    '--button-border-color-focus': 'var(--error-300)',
    '--button-border-color-hover': 'var(--error-300)',
    '--button-icon-color-active': 'var(--error-800)',
    '--button-icon-color-default': 'var(--error-700)',
    '--button-icon-color-focus': 'var(--error-700)',
    '--button-icon-color-hover': 'var(--error-800)',
    '--button-loader-color-active': 'var(--error-800)',
    '--button-loader-color-default': 'var(--error-700)',
    '--button-loader-color-focus': 'var(--error-700)',
    '--button-loader-color-hover': 'var(--error-800)',
    '--button-ring-color-focus': 'var(--error-500)',
    '--button-shadow-active': 'var(--shadow-xs)',
    '--button-shadow-default': 'var(--shadow-xs)',
    '--button-shadow-disabled': 'var(--shadow-xs)',
    '--button-shadow-focus': 'var(--shadow-xs)',
    '--button-shadow-hover': 'var(--shadow-xs)',
    '--button-text-color-active': 'var(--error-800)',
    '--button-text-color-default': 'var(--error-700)',
    '--button-text-color-focus': 'var(--error-700)',
    '--button-text-color-hover': 'var(--error-800)',
  },
  selector: '.btn-destructive-secondary',
  component: 'button',
})

// Destructive secondary dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--error-800)',
    '--button-bg-color-default': 'var(--error-950)',
    '--button-bg-color-focus': 'var(--error-950)',
    '--button-bg-color-hover': 'var(--error-900)',
    '--button-border-color-active': 'var(--error-700)',
    '--button-border-color-default': 'var(--error-800)',
    '--button-border-color-focus': 'var(--error-800)',
    '--button-border-color-hover': 'var(--error-700)',
    '--button-icon-color-active': 'var(--error-100)',
    '--button-icon-color-default': 'var(--error-200)',
    '--button-icon-color-focus': 'var(--error-200)',
    '--button-icon-color-hover': 'var(--error-100)',
    '--button-loader-color-active': 'var(--error-100)',
    '--button-loader-color-default': 'var(--error-200)',
    '--button-loader-color-focus': 'var(--error-200)',
    '--button-loader-color-hover': 'var(--error-100)',
    '--button-text-color-active': 'var(--error-100)',
    '--button-text-color-default': 'var(--error-200)',
    '--button-text-color-focus': 'var(--error-200)',
    '--button-text-color-hover': 'var(--error-100)',
  },
  selector: '.dark .btn-destructive-secondary',
  component: 'button',
})

// Destructive tertiary
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--error-100)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--error-50)',
    '--button-border-color-active': 'var(--error-50)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--error-50)',
    '--button-icon-color-active': 'var(--error-800)',
    '--button-icon-color-default': 'var(--error-700)',
    '--button-icon-color-focus': 'var(--error-700)',
    '--button-icon-color-hover': 'var(--error-800)',
    '--button-loader-color-active': 'var(--error-800)',
    '--button-loader-color-default': 'var(--error-700)',
    '--button-loader-color-focus': 'var(--error-700)',
    '--button-loader-color-hover': 'var(--error-800)',
    '--button-ring-color-focus': 'var(--error-500)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--error-800)',
    '--button-text-color-default': 'var(--error-700)',
    '--button-text-color-focus': 'var(--error-700)',
    '--button-text-color-hover': 'var(--error-800)',
  },
  selector: '.btn-destructive-tertiary',
  component: 'button',
})

// Destructive tertiary dark
defineStyleConfig({
  config: {
    '--button-bg-color-active': 'var(--error-800)',
    '--button-bg-color-default': 'var(--bg-primary)',
    '--button-bg-color-disabled': 'var(--bg-primary)',
    '--button-bg-color-focus': 'var(--bg-primary)',
    '--button-bg-color-hover': 'var(--error-900)',
    '--button-border-color-active': 'var(--error-800)',
    '--button-border-color-default': 'var(--bg-primary)',
    '--button-border-color-disabled': 'var(--bg-primary)',
    '--button-border-color-focus': 'var(--bg-primary)',
    '--button-border-color-hover': 'var(--error-900)',
    '--button-icon-color-active': 'var(--error-200)',
    '--button-icon-color-default': 'var(--error-300)',
    '--button-icon-color-focus': 'var(--error-300)',
    '--button-icon-color-hover': 'var(--error-200)',
    '--button-loader-color-active': 'var(--error-200)',
    '--button-loader-color-default': 'var(--error-300)',
    '--button-loader-color-focus': 'var(--error-300)',
    '--button-loader-color-hover': 'var(--error-200)',
    '--button-ring-color-focus': 'var(--error-500)',
    '--button-shadow-disabled': '0 0 0 0 transparent',
    '--button-text-color-active': 'var(--error-200)',
    '--button-text-color-default': 'var(--error-300)',
    '--button-text-color-focus': 'var(--error-300)',
    '--button-text-color-hover': 'var(--error-200)',
  },
  selector: '.dark .btn-destructive-tertiary',
  component: 'button',
})

// Size XS
defineStyleConfig({
  config: {
    '--button-font-size-default': 'var(--text-xs)',
    '--button-height-default': '2rem',
    '--button-icon-left-spacing-default': 'var(--spacing-xs)',
    '--button-icon-right-spacing-default': 'var(--spacing-xs)',
    '--button-icon-size-default': '1rem',
    '--button-padding-left-default': 'var(--spacing-md)',
    '--button-padding-right-default': 'var(--spacing-md)',
  },
  selector: '.btn-xs',
  component: 'button',
})

// Size SM
defineStyleConfig({
  config: {
    '--button-height-default': '2.25rem',
    '--button-icon-left-spacing-default': 'var(--spacing-xs)',
    '--button-icon-right-spacing-default': 'var(--spacing-xs)',
    '--button-padding-left-default': 'var(--spacing-lg)',
    '--button-padding-right-default': 'var(--spacing-lg)',
  },
  selector: '.btn-sm',
  component: 'button',
})

// Size L
defineStyleConfig({
  config: {
    '--button-font-size-default': 'var(--text-md)',
    '--button-height-default': '2.75rem',
    '--button-icon-left-spacing-default': 'var(--spacing-sm)',
    '--button-icon-right-spacing-default': 'var(--spacing-sm)',
    '--button-padding-left-default': 'var(--spacing-xl)',
    '--button-padding-right-default': 'var(--spacing-xl)',
  },
  selector: '.btn-lg',
  component: 'button',
})

// Size XL
defineStyleConfig({
  config: {
    '--button-font-size-default': 'var(--text-md)',
    '--button-height-default': '3rem',
    '--button-icon-left-spacing-default': 'var(--spacing-sm)',
    '--button-icon-right-spacing-default': 'var(--spacing-sm)',
    '--button-padding-left-default': '1.125rem',
    '--button-padding-right-default': '1.125rem',
  },
  selector: '.btn-xl',
  component: 'button',
})

// Size 2XL
defineStyleConfig({
  config: {
    '--button-font-size-default': 'var(--text-lg)',
    '--button-height-default': '3.75rem',
    '--button-icon-left-spacing-default': '0.625rem',
    '--button-icon-right-spacing-default': '0.625rem',
    '--button-padding-left-default': '1.375rem',
    '--button-padding-right-default': '1.375rem',
  },
  selector: '.btn-2xl',
  component: 'button',
})
