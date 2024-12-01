import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface CheckboxStyleConfig extends BaseStyleConfig {
  '--checkbox-bg-color-checked': string
  '--checkbox-bg-color-default': string
  '--checkbox-bg-color-disabled': string
  '--checkbox-bg-color-error': string
  '--checkbox-bg-color-focus': string
  '--checkbox-bg-color-hover': string
  '--checkbox-bg-color-indeterminate': string

  '--checkbox-border-color-checked': string
  '--checkbox-border-color-default': string
  '--checkbox-border-color-disabled': string
  '--checkbox-border-color-error': string
  '--checkbox-border-color-focus': string
  '--checkbox-border-color-hover': string
  '--checkbox-border-color-indeterminate': string

  '--checkbox-border-radius-default': string

  '--checkbox-indicator-color-checked': string
  '--checkbox-indicator-color-disabled': string
  '--checkbox-indicator-color-error': string
  '--checkbox-indicator-color-focus': string
  '--checkbox-indicator-color-hover': string
  '--checkbox-indicator-color-indeterminate': string

  '--checkbox-indicator-size-default': string

  '--checkbox-size-default': string
}

export function setupDefaultCheckboxStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--checkbox-bg-color-checked': 'var(--bg-brand-solid)',
      '--checkbox-bg-color-default': 'var(--bg-primary)',
      '--checkbox-bg-color-disabled': 'var(--bg-disabled)',
      '--checkbox-bg-color-error': 'var(--bg-primary)',
      '--checkbox-bg-color-focus': 'var(--bg-primary)',
      '--checkbox-bg-color-hover': 'var(--bg-primary)',
      '--checkbox-bg-color-indeterminate': 'var(--bg-brand-solid)',

      '--checkbox-border-color-checked': 'var(--border-brand-alt)',
      '--checkbox-border-color-default': 'var(--border-primary)',
      '--checkbox-border-color-disabled': 'var(--border-disabled)',
      '--checkbox-border-color-error': 'var(--border-error-subtle)',
      '--checkbox-border-color-focus': 'var(--border-primary)',
      '--checkbox-border-color-hover': 'var(--border-primary)',
      '--checkbox-border-color-indeterminate': 'var(--border-brand-alt)',

      '--checkbox-border-radius-default': 'var(--radius-sm)',

      '--checkbox-indicator-color-checked': 'var(--fg-white)',
      '--checkbox-indicator-color-disabled': 'var(--fg-disabled)',
      '--checkbox-indicator-color-error': 'var(--fg-error-secondary)',
      '--checkbox-indicator-color-focus': 'var(--fg-white)',
      '--checkbox-indicator-color-hover': 'var(--fg-white)',
      '--checkbox-indicator-color-indeterminate': 'var(--fg-white)',

      '--checkbox-indicator-size-default': '0.875rem',

      '--checkbox-size-default': '1.25rem',
    },
    theme: '*',
    variant: 'default',
    component: 'checkbox',
  })
}
