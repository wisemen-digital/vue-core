import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface TextareaStyleConfig {
  '--textarea-bg-color-default': string
  '--textarea-bg-color-disabled': string
  '--textarea-bg-color-error': string
  '--textarea-bg-color-focus': string
  '--textarea-bg-color-hover': string
  '--textarea-border-bottom-color-default': string
  '--textarea-border-bottom-color-disabled': string
  '--textarea-border-bottom-color-error': string
  '--textarea-border-bottom-color-focus': string
  '--textarea-border-bottom-color-hover': string
  '--textarea-border-left-color-default': string
  '--textarea-border-left-color-disabled': string
  '--textarea-border-left-color-error': string
  '--textarea-border-left-color-focus': string
  '--textarea-border-left-color-hover': string
  '--textarea-border-radius-bottom-left-default': string
  '--textarea-border-radius-bottom-right-default': string
  '--textarea-border-radius-top-left-default': string
  '--textarea-border-radius-top-right-default': string
  '--textarea-border-right-color-default': string
  '--textarea-border-right-color-disabled': string
  '--textarea-border-right-color-error': string
  '--textarea-border-right-color-focus': string
  '--textarea-border-right-color-hover': string
  '--textarea-border-top-color-default': string
  '--textarea-border-top-color-disabled': string
  '--textarea-border-top-color-error': string
  '--textarea-border-top-color-focus': string
  '--textarea-border-top-color-hover': string
  '--textarea-font-size-default': string
  '--textarea-font-weight-default': string
  '--textarea-line-height-default': string
  '--textarea-max-height-default': string
  '--textarea-min-height-default': string
  '--textarea-padding-x-default': string
  '--textarea-padding-y-default': string
  '--textarea-placeholder-color-default': string
  '--textarea-placeholder-color-disabled': string
  '--textarea-placeholder-color-error': string
  '--textarea-placeholder-color-focus': string
  '--textarea-placeholder-color-hover': string
  '--textarea-ring-color-error': string
  '--textarea-ring-color-focus': string
  '--textarea-ring-offset-color-focus': string
  '--textarea-shadow-default': string
  '--textarea-shadow-disabled': string
  '--textarea-shadow-error': string
  '--textarea-shadow-focus': string
  '--textarea-shadow-hover': string
  '--textarea-text-color-default': string
  '--textarea-text-color-disabled': string
  '--textarea-text-color-error': string
  '--textarea-text-color-focus': string
  '--textarea-text-color-hover': string
}

export function setupDefaultTextareaStyles(): void {
// Default
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--textarea-bg-color-default': 'var(--bg-primary)',
      '--textarea-bg-color-disabled': 'var(--bg-disabled-subtle)',
      '--textarea-bg-color-error': 'var(--bg-primary)',
      '--textarea-bg-color-focus': 'var(--bg-primary)',
      '--textarea-bg-color-hover': 'var(--bg-primary)',
      '--textarea-border-bottom-color-default': 'var(--border-primary)',
      '--textarea-border-bottom-color-disabled': 'var(--border-disabled)',
      '--textarea-border-bottom-color-error': 'var(--border-error-subtle)',
      '--textarea-border-bottom-color-focus': 'var(--border-brand)',
      '--textarea-border-bottom-color-hover': 'var(--border-primary)',
      '--textarea-border-left-color-default': 'var(--border-primary)',
      '--textarea-border-left-color-disabled': 'var(--border-disabled)',
      '--textarea-border-left-color-error': 'var(--border-error-subtle)',
      '--textarea-border-left-color-focus': 'var(--border-brand)',
      '--textarea-border-left-color-hover': 'var(--border-primary)',
      '--textarea-border-radius-bottom-left-default': 'var(--radius-md)',
      '--textarea-border-radius-bottom-right-default': 'var(--radius-md)',
      '--textarea-border-radius-top-left-default': 'var(--radius-md)',
      '--textarea-border-radius-top-right-default': 'var(--radius-md)',
      '--textarea-border-right-color-default': 'var(--border-primary)',
      '--textarea-border-right-color-disabled': 'var(--border-disabled)',
      '--textarea-border-right-color-error': 'var(--border-error-subtle)',
      '--textarea-border-right-color-focus': 'var(--border-brand)',
      '--textarea-border-right-color-hover': 'var(--border-primary)',
      '--textarea-border-top-color-default': 'var(--border-primary)',
      '--textarea-border-top-color-disabled': 'var(--border-disabled)',
      '--textarea-border-top-color-error': 'var(--border-error-subtle)',
      '--textarea-border-top-color-focus': 'var(--border-brand)',
      '--textarea-border-top-color-hover': 'var(--border-primary)',
      '--textarea-font-size-default': 'var(--text-sm)',
      '--textarea-font-weight-default': '400',
      '--textarea-line-height-default': 'var(--line-height-text-sm)',
      '--textarea-max-height-default': '12.5rem',
      '--textarea-min-height-default': '6.25rem',
      '--textarea-padding-x-default': 'var(--spacing-md)',
      '--textarea-padding-y-default': 'var(--spacing-md)',
      '--textarea-placeholder-color-default': 'var(--text-placeholder)',
      '--textarea-placeholder-color-disabled': 'var(--text-placeholder)',
      '--textarea-placeholder-color-error': 'var(--text-placeholder)',
      '--textarea-placeholder-color-focus': 'var(--text-placeholder)',
      '--textarea-placeholder-color-hover': 'var(--text-placeholder)',
      '--textarea-ring-color-error': 'var(--error-500)',
      '--textarea-ring-color-focus': 'var(--brand-500)',
      '--textarea-ring-offset-color-focus': 'var(--bg-primary)',
      '--textarea-shadow-default': 'var(--shadow-xs)',
      '--textarea-shadow-disabled': 'var(--shadow-xs)',
      '--textarea-shadow-error': 'var(--shadow-xs)',
      '--textarea-shadow-focus': 'var(--shadow-xs)',
      '--textarea-shadow-hover': 'var(--shadow-xs)',
      '--textarea-text-color-default': 'var(--text-primary)',
      '--textarea-text-color-disabled': 'var(--text-disabled)',
      '--textarea-text-color-error': 'var(--text-primary)',
      '--textarea-text-color-focus': 'var(--text-primary)',
      '--textarea-text-color-hover': 'var(--text-primary)',
    },
    theme: '*',
    variant: 'default',
    component: 'textarea',
  })
}
