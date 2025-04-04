import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface IconButtonStyleConfig {
  '--icon-button-bg-color-active': string
  '--icon-button-bg-color-default': string
  '--icon-button-bg-color-disabled': string
  '--icon-button-bg-color-focus': string
  '--icon-button-bg-color-hover': string
  '--icon-button-border-color-active': string
  '--icon-button-border-color-default': string
  '--icon-button-border-color-disabled': string
  '--icon-button-border-color-focus': string
  '--icon-button-border-color-hover': string
  '--icon-button-border-radius-default': string
  '--icon-button-font-size-default': string
  '--icon-button-font-weight-default': string
  '--icon-button-icon-color-active': string
  '--icon-button-icon-color-default': string
  '--icon-button-icon-color-disabled': string
  '--icon-button-icon-color-focus': string
  '--icon-button-icon-color-hover': string
  '--icon-button-icon-size-default': string
  '--icon-button-loader-color-active': string
  '--icon-button-loader-color-default': string
  '--icon-button-loader-color-disabled': string
  '--icon-button-loader-color-focus': string
  '--icon-button-loader-color-hover': string
  '--icon-button-loader-size-default': string
  '--icon-button-ring-color-focus': string
  '--icon-button-ring-offset-color-focus': string
  '--icon-button-shadow-active': string
  '--icon-button-shadow-default': string
  '--icon-button-shadow-disabled': string
  '--icon-button-shadow-focus': string
  '--icon-button-shadow-hover': string
  '--icon-button-size-default': string
  '--icon-button-tooltip-font-color-default': string
  '--icon-button-tooltip-font-size-default': string
  '--icon-button-tooltip-font-weight-default': string
  '--icon-button-tooltip-padding-x-default': string
  '--icon-button-tooltip-padding-y-default': string
  '--icon-button-tooltip-text-color-default': string
}

export function setupDefaultIconButtonStyles(): void {
  // Default
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-bg-color-active': 'var(--brand-800)',
      '--icon-button-bg-color-default': 'var(--brand-600)',
      '--icon-button-bg-color-disabled': 'var(--bg-disabled)',
      '--icon-button-bg-color-focus': 'var(--brand-600)',
      '--icon-button-bg-color-hover': 'var(--brand-700)',
      '--icon-button-border-color-active': 'var(--brand-800)',
      '--icon-button-border-color-default': 'var(--brand-600)',
      '--icon-button-border-color-disabled': 'var(--border-disabled-subtle)',
      '--icon-button-border-color-focus': 'var(--brand-600)',
      '--icon-button-border-color-hover': 'var(--brand-700)',
      '--icon-button-border-radius-default': 'var(--radius-md)',
      '--icon-button-font-size-default': 'var(--text-sm)',
      '--icon-button-font-weight-default': '500',
      '--icon-button-icon-color-active': 'var(--fg-white)',
      '--icon-button-icon-color-default': 'var(--fg-white)',
      '--icon-button-icon-color-disabled': 'var(--fg-disabled)',
      '--icon-button-icon-color-focus': 'var(--fg-white)',
      '--icon-button-icon-color-hover': 'var(--fg-white)',
      '--icon-button-icon-size-default': '1.25rem',
      '--icon-button-loader-color-active': 'var(--fg-white)',
      '--icon-button-loader-color-default': 'var(--fg-white)',
      '--icon-button-loader-color-disabled': 'var(--fg-disabled)',
      '--icon-button-loader-color-focus': 'var(--fg-white)',
      '--icon-button-loader-color-hover': 'var(--fg-white)',
      '--icon-button-loader-size-default': '1.125rem',
      '--icon-button-ring-color-focus': 'var(--brand-500)',
      '--icon-button-ring-offset-color-focus': 'var(--bg-primary)',
      '--icon-button-shadow-active': '0 0 0 0 transparent',
      '--icon-button-shadow-default': '0 0 0 0 transparent',
      '--icon-button-shadow-disabled': 'var(--shadow-xs)',
      '--icon-button-shadow-focus': '0 0 0 0 transparent',
      '--icon-button-shadow-hover': '0 0 0 0 transparent',
      '--icon-button-size-default': '2.5rem',
      '--icon-button-tooltip-font-size-default': 'var(--text-sm)',
      '--icon-button-tooltip-font-weight-default': 'var(--font-weight-medium)',
      '--icon-button-tooltip-padding-x-default': 'var(--spacing-sm)',
      '--icon-button-tooltip-padding-y-default': 'var(--spacing-xs)',
      '--icon-button-tooltip-text-color-default': 'var(--fg-white)',
    },
    theme: '*',
    variant: 'default',
    component: 'iconButton',
  })

  // Primary
  defineStyleConfig({
    colorScheme: '*',
    config: {},
    theme: '*',
    variant: 'primary',
    component: 'iconButton',
  })

  // Secondary gray
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-100)',
      '--icon-button-bg-color-default': 'var(--bg-primary)',
      '--icon-button-bg-color-disabled': 'var(--bg-primary)',
      '--icon-button-bg-color-focus': 'var(--bg-primary)',
      '--icon-button-bg-color-hover': 'var(--gray-50)',
      '--icon-button-border-color-active': 'var(--gray-300)',
      '--icon-button-border-color-default': 'var(--gray-300)',
      '--icon-button-border-color-focus': 'var(--gray-300)',
      '--icon-button-border-color-hover': 'var(--gray-300)',
      '--icon-button-icon-color-active': 'var(--gray-900)',
      '--icon-button-icon-color-default': 'var(--gray-700)',
      '--icon-button-icon-color-focus': 'var(--gray-700)',
      '--icon-button-icon-color-hover': 'var(--gray-800)',
      '--icon-button-loader-color-active': 'var(--gray-900)',
      '--icon-button-loader-color-default': 'var(--gray-700)',
      '--icon-button-loader-color-focus': 'var(--gray-700)',
      '--icon-button-loader-color-hover': 'var(--gray-800)',
      '--icon-button-shadow-active': 'var(--shadow-xs)',
      '--icon-button-shadow-default': 'var(--shadow-xs)',
      '--icon-button-shadow-disabled': 'var(--shadow-xs)',
      '--icon-button-shadow-focus': 'var(--shadow-xs)',
      '--icon-button-shadow-hover': 'var(--shadow-xs)',
    },
    theme: '*',
    variant: 'secondary-gray',
    component: 'iconButton',
  })

  // Secondary gray dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-700)',
      '--icon-button-bg-color-default': 'var(--gray-900)',
      '--icon-button-bg-color-focus': 'var(--gray-900)',
      '--icon-button-bg-color-hover': 'var(--gray-800)',
      '--icon-button-border-color-active': 'var(--gray-700)',
      '--icon-button-border-color-default': 'var(--gray-700)',
      '--icon-button-border-color-focus': 'var(--gray-700)',
      '--icon-button-border-color-hover': 'var(--gray-700)',
      '--icon-button-icon-color-active': 'var(--gray-100)',
      '--icon-button-icon-color-default': 'var(--gray-300)',
      '--icon-button-icon-color-focus': 'var(--gray-300)',
      '--icon-button-icon-color-hover': 'var(--gray-200)',
      '--icon-button-loader-color-active': 'var(--gray-100)',
      '--icon-button-loader-color-default': 'var(--gray-300)',
      '--icon-button-loader-color-focus': 'var(--gray-300)',
      '--icon-button-loader-color-hover': 'var(--gray-200)',
    },
    theme: '*',
    variant: 'secondary-gray',
    component: 'iconButton',
  })

  // Secondary color
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--brand-primary-100)',
      '--icon-button-bg-color-default': 'var(--bg-primary)',
      '--icon-button-bg-color-disabled': 'var(--bg-primary)',
      '--icon-button-bg-color-focus': 'var(--bg-primary)',
      '--icon-button-bg-color-hover': 'var(--brand-50)',
      '--icon-button-border-color-active': 'var(--brand-300)',
      '--icon-button-border-color-default': 'var(--brand-300)',
      '--icon-button-border-color-focus': 'var(--brand-300)',
      '--icon-button-border-color-hover': 'var(--brand-300)',
      '--icon-button-icon-color-active': 'var(--brand-900)',
      '--icon-button-icon-color-default': 'var(--brand-700)',
      '--icon-button-icon-color-focus': 'var(--brand-700)',
      '--icon-button-icon-color-hover': 'var(--brand-800)',
      '--icon-button-loader-color-active': 'var(--brand-900)',
      '--icon-button-loader-color-default': 'var(--brand-700)',
      '--icon-button-loader-color-focus': 'var(--brand-700)',
      '--icon-button-loader-color-hover': 'var(--brand-800)',
      '--icon-button-shadow-active': 'var(--shadow-xs)',
      '--icon-button-shadow-default': 'var(--shadow-xs)',
      '--icon-button-shadow-disabled': 'var(--shadow-xs)',
      '--icon-button-shadow-focus': 'var(--shadow-xs)',
      '--icon-button-shadow-hover': 'var(--shadow-xs)',
    },
    theme: '*',
    variant: 'secondary-color',
    component: 'iconButton',
  })

  // Secondary color dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-700)',
      '--icon-button-bg-color-default': 'var(--gray-900)',
      '--icon-button-bg-color-focus': 'var(--gray-900)',
      '--icon-button-bg-color-hover': 'var(--gray-800)',
      '--icon-button-border-color-active': 'var(--gray-700)',
      '--icon-button-border-color-default': 'var(--gray-700)',
      '--icon-button-border-color-focus': 'var(--gray-700)',
      '--icon-button-border-color-hover': 'var(--gray-700)',
      '--icon-button-icon-color-active': 'var(--gray-100)',
      '--icon-button-icon-color-default': 'var(--gray-300)',
      '--icon-button-icon-color-focus': 'var(--gray-300)',
      '--icon-button-icon-color-hover': 'var(--gray-200)',
      '--icon-button-loader-color-active': 'var(--gray-100)',
      '--icon-button-loader-color-default': 'var(--gray-300)',
      '--icon-button-loader-color-focus': 'var(--gray-300)',
      '--icon-button-loader-color-hover': 'var(--gray-200)',
    },
    theme: '*',
    variant: 'secondary-color',
    component: 'iconButton',
  })

  // Tertiary gray
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-100)',
      '--icon-button-bg-color-default': 'transparent',
      '--icon-button-bg-color-disabled': 'transparent',
      '--icon-button-bg-color-focus': 'transparent',
      '--icon-button-bg-color-hover': 'var(--gray-50)',
      '--icon-button-border-color-active': 'var(--gray-50)',
      '--icon-button-border-color-default': 'transparent',
      '--icon-button-border-color-disabled': 'transparent',
      '--icon-button-border-color-focus': 'transparent',
      '--icon-button-border-color-hover': 'var(--gray-50)',
      '--icon-button-icon-color-active': 'var(--gray-700)',
      '--icon-button-icon-color-default': 'var(--gray-600)',
      '--icon-button-icon-color-focus': 'var(--gray-600)',
      '--icon-button-icon-color-hover': 'var(--gray-700)',
      '--icon-button-loader-color-active': 'var(--gray-700)',
      '--icon-button-loader-color-default': 'var(--gray-600)',
      '--icon-button-loader-color-focus': 'var(--gray-600)',
      '--icon-button-loader-color-hover': 'var(--gray-700)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'tertiary-gray',
    component: 'iconButton',
  })

  // Tertiary gray dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-700)',
      '--icon-button-bg-color-default': 'transparent',
      '--icon-button-bg-color-focus': 'transparent',
      '--icon-button-bg-color-hover': 'var(--gray-800)',
      '--icon-button-border-color-active': 'var(--bg-primary)',
      '--icon-button-border-color-default': 'var(--bg-primary)',
      '--icon-button-border-color-disabled': 'var(--bg-primary)',
      '--icon-button-border-color-focus': 'var(--bg-primary)',
      '--icon-button-border-color-hover': 'var(--bg-primary)',
      '--icon-button-icon-color-active': 'var(--gray-200)',
      '--icon-button-icon-color-default': 'var(--gray-400)',
      '--icon-button-icon-color-focus': 'var(--gray-400)',
      '--icon-button-icon-color-hover': 'var(--gray-300)',
      '--icon-button-loader-color-active': 'var(--gray-200)',
      '--icon-button-loader-color-default': 'var(--gray-400)',
      '--icon-button-loader-color-focus': 'var(--gray-400)',
      '--icon-button-loader-color-hover': 'var(--gray-300)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'tertiary-gray',
    component: 'iconButton',
  })

  // Tertiary color
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--brand-primary-100)',
      '--icon-button-bg-color-default': 'transparent',
      '--icon-button-bg-color-disabled': 'var(--bg-primary)',
      '--icon-button-bg-color-focus': 'transparent',
      '--icon-button-bg-color-hover': 'var(--brand-50)',
      '--icon-button-border-color-active': 'var(--brand-50)',
      '--icon-button-border-color-default': 'transparent',
      '--icon-button-border-color-disabled': 'transparent',
      '--icon-button-border-color-focus': 'transparent',
      '--icon-button-border-color-hover': 'var(--brand-50)',
      '--icon-button-icon-color-active': 'var(--brand-800)',
      '--icon-button-icon-color-default': 'var(--brand-700)',
      '--icon-button-icon-color-focus': 'var(--brand-700)',
      '--icon-button-icon-color-hover': 'var(--brand-800)',
      '--icon-button-loader-color-active': 'var(--brand-800)',
      '--icon-button-loader-color-default': 'var(--brand-700)',
      '--icon-button-loader-color-focus': 'var(--brand-700)',
      '--icon-button-loader-color-hover': 'var(--brand-800)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'tertiary-color',
    component: 'iconButton',
  })

  // Tertiary color dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--gray-700)',
      '--icon-button-bg-color-default': 'transparent',
      '--icon-button-bg-color-focus': 'transparent',
      '--icon-button-bg-color-hover': 'var(--gray-800)',
      '--icon-button-border-color-active': 'transparent',
      '--icon-button-border-color-default': 'transparent',
      '--icon-button-border-color-disabled': 'transparent',
      '--icon-button-border-color-focus': 'transparent',
      '--icon-button-border-color-hover': 'transparent',
      '--icon-button-icon-color-active': 'var(--gray-200)',
      '--icon-button-icon-color-default': 'var(--gray-400)',
      '--icon-button-icon-color-focus': 'var(--gray-400)',
      '--icon-button-icon-color-hover': 'var(--gray-300)',
      '--icon-button-loader-color-active': 'var(--gray-200)',
      '--icon-button-loader-color-default': 'var(--gray-400)',
      '--icon-button-loader-color-focus': 'var(--gray-400)',
      '--icon-button-loader-color-hover': 'var(--gray-300)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'tertiary-color',
    component: 'iconButton',
  })

  // Destructive primary
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--icon-button-bg-color-active': 'var(--error-800)',
      '--icon-button-bg-color-default': 'var(--error-600)',
      '--icon-button-bg-color-disabled': 'var(--bg-disabled)',
      '--icon-button-bg-color-focus': 'var(--error-600)',
      '--icon-button-bg-color-hover': 'var(--error-700)',
      '--icon-button-border-color-active': 'var(--error-800)',
      '--icon-button-border-color-default': 'var(--error-600)',
      '--icon-button-border-color-disabled': 'var(--border-disabled-subtle)',
      '--icon-button-border-color-focus': 'var(--error-600)',
      '--icon-button-border-color-hover': 'var(--error-700)',
      '--icon-button-icon-color-active': 'var(--white)',
      '--icon-button-icon-color-default': 'var(--white)',
      '--icon-button-icon-color-disabled': 'var(--fg-disabled)',
      '--icon-button-icon-color-focus': 'var(--white)',
      '--icon-button-icon-color-hover': 'var(--white)',
      '--icon-button-loader-color-active': 'var(--white)',
      '--icon-button-loader-color-default': 'var(--white)',
      '--icon-button-loader-color-disabled': 'var(--fg-disabled)',
      '--icon-button-loader-color-focus': 'var(--white)',
      '--icon-button-loader-color-hover': 'var(--white)',
      '--icon-button-ring-color-focus': 'var(--error-500)',
    },
    theme: '*',
    variant: 'destructive-primary',
    component: 'iconButton',
  })

  // Destructive secondary
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--error-100)',
      '--icon-button-bg-color-default': 'transparent',
      '--icon-button-bg-color-disabled': 'transparent',
      '--icon-button-bg-color-focus': 'transparent',
      '--icon-button-bg-color-hover': 'var(--error-50)',
      '--icon-button-border-color-active': 'var(--error-300)',
      '--icon-button-border-color-default': 'var(--error-300)',
      '--icon-button-border-color-focus': 'var(--error-300)',
      '--icon-button-border-color-hover': 'var(--error-300)',
      '--icon-button-icon-color-active': 'var(--error-800)',
      '--icon-button-icon-color-default': 'var(--error-700)',
      '--icon-button-icon-color-focus': 'var(--error-700)',
      '--icon-button-icon-color-hover': 'var(--error-800)',
      '--icon-button-loader-color-active': 'var(--error-800)',
      '--icon-button-loader-color-default': 'var(--error-700)',
      '--icon-button-loader-color-focus': 'var(--error-700)',
      '--icon-button-loader-color-hover': 'var(--error-800)',
      '--icon-button-ring-color-focus': 'var(--error-500)',
      '--icon-button-shadow-active': 'var(--shadow-xs)',
      '--icon-button-shadow-default': 'var(--shadow-xs)',
      '--icon-button-shadow-disabled': 'var(--shadow-xs)',
      '--icon-button-shadow-focus': 'var(--shadow-xs)',
      '--icon-button-shadow-hover': 'var(--shadow-xs)',
    },
    theme: '*',
    variant: 'destructive-secondary',
    component: 'iconButton',
  })

  // Destructive secondary dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--error-800)',
      '--icon-button-bg-color-default': 'var(--error-950)',
      '--icon-button-bg-color-focus': 'var(--error-950)',
      '--icon-button-bg-color-hover': 'var(--error-900)',
      '--icon-button-border-color-active': 'var(--error-700)',
      '--icon-button-border-color-default': 'var(--error-800)',
      '--icon-button-border-color-focus': 'var(--error-800)',
      '--icon-button-border-color-hover': 'var(--error-700)',
      '--icon-button-icon-color-active': 'var(--error-100)',
      '--icon-button-icon-color-default': 'var(--error-200)',
      '--icon-button-icon-color-focus': 'var(--error-200)',
      '--icon-button-icon-color-hover': 'var(--error-100)',
      '--icon-button-loader-color-active': 'var(--error-100)',
      '--icon-button-loader-color-default': 'var(--error-200)',
      '--icon-button-loader-color-focus': 'var(--error-200)',
      '--icon-button-loader-color-hover': 'var(--error-100)',
      '--icon-button-ring-color-focus': 'var(--error-500)',
    },
    theme: '*',
    variant: 'destructive-secondary',
    component: 'iconButton',
  })

  // Destructive tertiary
  defineStyleConfig({
    colorScheme: 'light',
    config: {
      '--icon-button-bg-color-active': 'var(--error-100)',
      '--icon-button-bg-color-default': 'var(--bg-primary)',
      '--icon-button-bg-color-disabled': 'var(--bg-primary)',
      '--icon-button-bg-color-focus': 'var(--bg-primary)',
      '--icon-button-bg-color-hover': 'var(--error-50)',
      '--icon-button-border-color-active': 'var(--error-50)',
      '--icon-button-border-color-default': 'var(--bg-primary)',
      '--icon-button-border-color-disabled': 'var(--bg-primary)',
      '--icon-button-border-color-focus': 'var(--bg-primary)',
      '--icon-button-border-color-hover': 'var(--error-50)',
      '--icon-button-icon-color-active': 'var(--error-800)',
      '--icon-button-icon-color-default': 'var(--error-700)',
      '--icon-button-icon-color-focus': 'var(--error-700)',
      '--icon-button-icon-color-hover': 'var(--error-800)',
      '--icon-button-loader-color-active': 'var(--error-800)',
      '--icon-button-loader-color-default': 'var(--error-700)',
      '--icon-button-loader-color-focus': 'var(--error-700)',
      '--icon-button-loader-color-hover': 'var(--error-800)',
      '--icon-button-ring-color-focus': 'var(--error-500)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'destructive-tertiary',
    component: 'iconButton',
  })

  // Destructive tertiary dark
  defineStyleConfig({
    colorScheme: 'dark',
    config: {
      '--icon-button-bg-color-active': 'var(--error-800)',
      '--icon-button-bg-color-default': 'var(--bg-primary)',
      '--icon-button-bg-color-disabled': 'var(--bg-primary)',
      '--icon-button-bg-color-focus': 'var(--bg-primary)',
      '--icon-button-bg-color-hover': 'var(--error-900)',
      '--icon-button-border-color-active': 'var(--error-800)',
      '--icon-button-border-color-default': 'var(--bg-primary)',
      '--icon-button-border-color-disabled': 'var(--bg-primary)',
      '--icon-button-border-color-focus': 'var(--bg-primary)',
      '--icon-button-border-color-hover': 'var(--error-900)',
      '--icon-button-icon-color-active': 'var(--error-200)',
      '--icon-button-icon-color-default': 'var(--error-300)',
      '--icon-button-icon-color-focus': 'var(--error-300)',
      '--icon-button-icon-color-hover': 'var(--error-200)',
      '--icon-button-loader-color-active': 'var(--error-200)',
      '--icon-button-loader-color-default': 'var(--error-300)',
      '--icon-button-loader-color-focus': 'var(--error-300)',
      '--icon-button-loader-color-hover': 'var(--error-200)',
      '--icon-button-ring-color-focus': 'var(--error-500)',
      '--icon-button-shadow-disabled': '0 0 0 0 transparent',
    },
    theme: '*',
    variant: 'destructive-tertiary',
    component: 'iconButton',
  })

  // Size SM
  defineStyleConfig({
    colorScheme: '*',
    config: { '--icon-button-size-default': '2.25rem' },
    theme: '*',
    variant: 'sm',
    component: 'iconButton',
  })

  // Size LG
  defineStyleConfig({
    colorScheme: '*',
    config: { '--icon-button-size-default': '2.75rem' },
    theme: '*',
    variant: 'lg',
    component: 'iconButton',
  })

  // Size XL
  defineStyleConfig({
    colorScheme: '*',
    config: { '--icon-button-size-default': '3rem' },
    theme: '*',
    variant: 'xl',
    component: 'iconButton',
  })

  // Size 2XL
  defineStyleConfig({
    colorScheme: '*',
    config: { '--icon-button-size-default': '3.5rem' },
    theme: '*',
    variant: '2xl',
    component: 'iconButton',
  })
}
