import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface SelectOptionStyleConfig {
  '--select-option-bg-color-default': string
  '--select-option-bg-color-disabled': string
  '--select-option-bg-color-highlighted': string
  '--select-option-bg-color-hover': string
  '--select-option-bg-color-selected': string
  '--select-option-border-radius-default': string
  '--select-option-font-size-default': string
  '--select-option-font-weight-default': string
  '--select-option-indicator-color-default': string
  '--select-option-indicator-size-default': string
  '--select-option-min-height-default': string
  '--select-option-padding-x-default': string
  '--select-option-padding-y-default': string
  '--select-option-text-color-default': string
  '--select-option-text-color-disabled': string
  '--select-option-text-color-highlighted': string
  '--select-option-text-color-hover': string
  '--select-option-text-color-selected': string
}

export interface SelectStyleConfig extends SelectOptionStyleConfig {
  '--select-bg-color-default': string
  '--select-bg-color-disabled': string
  '--select-bg-color-error': string
  '--select-bg-color-focus': string
  '--select-bg-color-hover': string
  '--select-border-bottom-color-default': string
  '--select-border-bottom-color-disabled': string
  '--select-border-bottom-color-error': string
  '--select-border-bottom-color-focus': string
  '--select-border-bottom-color-hover': string
  '--select-border-left-color-default': string
  '--select-border-left-color-disabled': string
  '--select-border-left-color-error': string
  '--select-border-left-color-focus': string
  '--select-border-left-color-hover': string
  '--select-border-radius-bottom-left-default': string
  '--select-border-radius-bottom-right-default': string
  '--select-border-radius-top-left-default': string
  '--select-border-radius-top-right-default': string
  '--select-border-right-color-default': string
  '--select-border-right-color-disabled': string
  '--select-border-right-color-error': string
  '--select-border-right-color-focus': string
  '--select-border-right-color-hover': string
  '--select-border-top-color-default': string
  '--select-border-top-color-disabled': string
  '--select-border-top-color-error': string
  '--select-border-top-color-focus': string
  '--select-border-top-color-hover': string
  '--select-dropdown-bg-color-default': string
  '--select-dropdown-border-color-default': string
  '--select-dropdown-border-radius-default': string
  '--select-dropdown-max-height-default': string
  '--select-dropdown-max-width-default': string
  '--select-dropdown-min-width-default': string
  '--select-dropdown-padding-x-default': string
  '--select-dropdown-padding-y-default': string
  '--select-dropdown-shadow-default': string
  '--select-font-size-default': string
  '--select-font-weight-default': string
  '--select-group-content-padding-x-default': string
  '--select-group-content-padding-y-default': string
  '--select-group-label-font-size-default': string
  '--select-group-label-font-weight-default': string
  '--select-group-label-spacing-bottom-default': string
  '--select-group-label-spacing-top-default': string
  '--select-group-label-spacing-x-default': string
  '--select-group-label-text-color-default': string
  '--select-icon-color-default': string
  '--select-icon-color-disabled': string
  '--select-icon-color-error': string
  '--select-icon-color-focus': string
  '--select-icon-color-hover': string
  '--select-icon-left-size-default': string
  '--select-icon-left-spacing-default': string
  '--select-icon-right-size-default': string
  '--select-icon-right-spacing-default': string
  '--select-loader-color-default': string
  '--select-loader-color-disabled': string
  '--select-loader-color-error': string
  '--select-loader-color-focus': string
  '--select-loader-color-hover': string
  '--select-loader-size-default': string
  '--select-min-height-default': string
  '--select-padding-left-default': string
  '--select-padding-right-default': string
  '--select-placeholder-color-default': string
  '--select-placeholder-color-disabled': string
  '--select-placeholder-color-error': string
  '--select-placeholder-color-focus': string
  '--select-placeholder-color-hover': string
  '--select-ring-color-error': string
  '--select-ring-color-focus': string
  '--select-separator-color-default': string
  '--select-separator-spacing-y-default': string
  '--select-shadow-default': string
  '--select-shadow-disabled': string
  '--select-shadow-error': string
  '--select-shadow-focus': string
  '--select-shadow-hover': string
  '--select-text-color-default': string
  '--select-text-color-disabled': string
  '--select-text-color-error': string
  '--select-text-color-focus': string
  '--select-text-color-hover': string
  '--select-with-icon-left-padding-left-default': string
  '--select-with-icon-right-padding-right-default': string
}

export function setupDefaultSelectStyles(): void {
// Default
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--select-bg-color-default': 'var(--bg-primary)',
      '--select-bg-color-disabled': 'var(--bg-disabled-subtle)',
      '--select-bg-color-error': 'var(--bg-primary)',
      '--select-bg-color-focus': 'var(--bg-primary)',
      '--select-bg-color-hover': 'var(--bg-primary)',
      '--select-border-bottom-color-default': 'var(--border-primary)',
      '--select-border-bottom-color-disabled': 'var(--border-disabled)',
      '--select-border-bottom-color-error': 'var(--border-error-subtle)',
      '--select-border-bottom-color-focus': 'var(--border-brand)',
      '--select-border-bottom-color-hover': 'var(--border-primary)',
      '--select-border-left-color-default': 'var(--border-primary)',
      '--select-border-left-color-disabled': 'var(--border-disabled)',
      '--select-border-left-color-error': 'var(--border-error-subtle)',
      '--select-border-left-color-focus': 'var(--border-brand)',
      '--select-border-left-color-hover': 'var(--border-primary)',
      '--select-border-radius-bottom-left-default': 'var(--radius-md)',
      '--select-border-radius-bottom-right-default': 'var(--radius-md)',
      '--select-border-radius-top-left-default': 'var(--radius-md)',
      '--select-border-radius-top-right-default': 'var(--radius-md)',
      '--select-border-right-color-default': 'var(--border-primary)',
      '--select-border-right-color-disabled': 'var(--border-disabled)',
      '--select-border-right-color-error': 'var(--border-error-subtle)',
      '--select-border-right-color-focus': 'var(--border-brand)',
      '--select-border-right-color-hover': 'var(--border-primary)',
      '--select-border-top-color-default': 'var(--border-primary)',
      '--select-border-top-color-disabled': 'var(--border-disabled)',
      '--select-border-top-color-error': 'var(--border-error-subtle)',
      '--select-border-top-color-focus': 'var(--border-brand)',
      '--select-border-top-color-hover': 'var(--border-primary)',
      '--select-dropdown-bg-color-default': 'var(--bg-primary)',
      '--select-dropdown-border-color-default': 'var(--border-primary)',
      '--select-dropdown-border-radius-default': 'var(--radius-md)',
      '--select-dropdown-max-height-default': '20rem',
      '--select-dropdown-max-width-default': 'auto',
      '--select-dropdown-min-width-default': 'auto',
      '--select-dropdown-padding-x-default': 'var(--spacing-sm)',
      '--select-dropdown-padding-y-default': 'var(--spacing-sm)',
      '--select-dropdown-shadow-default': 'var(--shadow-xl)',
      '--select-font-size-default': 'var(--text-sm)',
      '--select-font-weight-default': '400',
      '--select-group-content-padding-x-default': 'var(--spacing-none)',
      '--select-group-content-padding-y-default': 'var(--spacing-none)',
      '--select-group-label-font-size-default': 'var(--text-sm)',
      '--select-group-label-font-weight-default': '500',
      '--select-group-label-spacing-bottom-default': 'var(--spacing-md)',
      '--select-group-label-spacing-top-default': 'var(--spacing-md)',
      '--select-group-label-spacing-x-default': 'var(--spacing-md)',
      '--select-group-label-text-color-default': 'var(--text-tertiary)',
      '--select-icon-color-default': 'var(--fg-quaternary)',
      '--select-icon-color-disabled': 'var(--fg-quaternary)',
      '--select-icon-color-error': 'var(--fg-error-secondary)',
      '--select-icon-color-focus': 'var(--fg-quaternary)',
      '--select-icon-color-hover': 'var(--fg-quaternary)',
      '--select-icon-left-size-default': '1.125rem',
      '--select-icon-left-spacing-default': 'var(--spacing-lg)',
      '--select-icon-right-size-default': '1rem',
      '--select-icon-right-spacing-default': 'var(--spacing-lg)',
      '--select-loader-color-default': 'var(--fg-quaternary)',
      '--select-loader-color-disabled': 'var(--fg-quaternary)',
      '--select-loader-color-error': 'var(--fg-error-secondary)',
      '--select-loader-color-focus': 'var(--fg-quaternary)',
      '--select-loader-color-hover': 'var(--fg-quaternary)',
      '--select-loader-size-default': '0.875rem',
      '--select-min-height-default': '2.5rem',
      '--select-option-bg-color-default': 'var(--bg-primary)',
      '--select-option-bg-color-disabled': 'var(--bg-primary)',
      '--select-option-bg-color-highlighted': 'var(--bg-primary-hover)',
      '--select-option-bg-color-hover': 'var(--bg-primary-hover)',
      '--select-option-bg-color-selected': 'var(--bg-primary)',
      '--select-option-border-radius-default': 'var(--radius-md)',
      '--select-option-font-size-default': 'var(--text-sm)',
      '--select-option-font-weight-default': 'var(--text-sm)',
      '--select-option-indicator-color-default': 'var(--fg-tertiary)',
      '--select-option-indicator-size-default': '1rem',
      '--select-option-min-height-default': '2.25rem',
      '--select-option-padding-x-default': 'var(--spacing-md)',
      '--select-option-padding-y-default': 'var(--spacing-md)',
      '--select-option-text-color-default': 'var(--text-primary)',
      '--select-option-text-color-disabled': 'var(--text-disabled)',
      '--select-option-text-color-highlighted': 'var(--text-primary)',
      '--select-option-text-color-hover': 'var(--text-primary)',
      '--select-option-text-color-selected': 'var(--text-primary)',
      '--select-padding-left-default': 'var(--spacing-lg)',
      '--select-padding-right-default': 'var(--spacing-lg)',
      '--select-placeholder-color-default': 'var(--text-placeholder)',
      '--select-placeholder-color-disabled': 'var(--text-placeholder)',
      '--select-placeholder-color-error': 'var(--text-placeholder)',
      '--select-placeholder-color-focus': 'var(--text-placeholder)',
      '--select-placeholder-color-hover': 'var(--text-placeholder)',
      '--select-ring-color-error': 'var(--error-500)',
      '--select-ring-color-focus': 'var(--brand-500)',
      '--select-separator-color-default': 'var(--border-primary)',
      '--select-separator-spacing-y-default': 'var(--spacing-xs)',
      '--select-shadow-default': 'var(--shadow-xs)',
      '--select-shadow-disabled': 'var(--shadow-xs)',
      '--select-shadow-error': 'var(--shadow-xs)',
      '--select-shadow-focus': 'var(--shadow-xs)',
      '--select-shadow-hover': 'var(--shadow-xs)',
      '--select-text-color-default': 'var(--text-primary)',
      '--select-text-color-disabled': 'var(--text-disabled)',
      '--select-text-color-error': 'var(--text-primary)',
      '--select-text-color-focus': 'var(--text-primary)',
      '--select-text-color-hover': 'var(--text-primary)',
      '--select-with-icon-left-padding-left-default': 'var(--spacing-md)',
      '--select-with-icon-right-padding-right-default': 'var(--spacing-md)',
    },
    theme: '*',
    variant: 'default',
    component: 'select',
  })
}
