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

  '--checkbox-error-font-size': string
  '--checkbox-error-font-weight': string
  '--checkbox-error-spacing-default': string
  '--checkbox-error-text-color': string

  '--checkbox-hint-font-size': string
  '--checkbox-hint-font-weight': string
  '--checkbox-hint-spacing-default': string
  '--checkbox-hint-text-color-checked': string
  '--checkbox-hint-text-color-default': string
  '--checkbox-hint-text-color-disabled': string
  '--checkbox-hint-text-color-error': string
  '--checkbox-hint-text-color-focus': string
  '--checkbox-hint-text-color-hover': string

  '--checkbox-indicator-color-checked': string
  '--checkbox-indicator-color-disabled': string
  '--checkbox-indicator-color-error': string
  '--checkbox-indicator-color-focus': string
  '--checkbox-indicator-color-hover': string
  '--checkbox-indicator-color-indeterminate': string
  '--checkbox-indicator-size-default': string
  '--checkbox-label-font-size-default': string
  '--checkbox-label-font-weight-default': string

  '--checkbox-label-spacing-default': string
  '--checkbox-label-text-color-checked': string
  '--checkbox-label-text-color-default': string
  '--checkbox-label-text-color-disabled': string
  '--checkbox-label-text-color-error': string
  '--checkbox-label-text-color-focus': string

  '--checkbox-label-text-color-hover': string

  '--checkbox-ring-color-error': string
  '--checkbox-ring-color-focus': string

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
      '--checkbox-error-font-size-default': 'var(--text-sm)',
      '--checkbox-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
      '--checkbox-error-spacing-default': 'var(--spacing-none)',
      '--checkbox-error-text-color-default': 'var(--text-error-primary)',
      '--checkbox-hint-font-size-default': 'var(--input-field-hint-font-size-default)',

      '--checkbox-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
      '--checkbox-hint-spacing-default': 'var(--spacing-none)',
      '--checkbox-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
      '--checkbox-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
      '--checkbox-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
      '--checkbox-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
      '--checkbox-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
      '--checkbox-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',
      '--checkbox-indicator-color-checked': 'var(--fg-white)',

      '--checkbox-indicator-color-disabled': 'var(--fg-disabled)',
      '--checkbox-indicator-color-error': 'var(--fg-error-secondary)',
      '--checkbox-indicator-color-focus': 'var(--fg-white)',
      '--checkbox-indicator-color-hover': 'var(--fg-white)',
      '--checkbox-indicator-color-indeterminate': 'var(--fg-white)',
      '--checkbox-indicator-size-default': '0.875rem',
      '--checkbox-label-font-size-default': 'var(--text-sm)',

      '--checkbox-label-font-weight-default': 'var(--font-weight-medium)',

      '--checkbox-label-spacing-default': 'var(--spacing-lg)',
      '--checkbox-label-text-color-checked': 'var(--text-primary)',
      '--checkbox-label-text-color-default': 'var(--text-secondary)',
      '--checkbox-label-text-color-disabled': 'var(--text-disabled)',
      '--checkbox-label-text-color-error': 'var(--text-primary)',
      '--checkbox-label-text-color-focus': 'var(--text-primary)',

      '--checkbox-label-text-color-hover': 'var(--text-primary)',

      '--checkbox-ring-color-error': 'var(--error-500)',
      '--checkbox-ring-color-focus': 'var(--brand-500)',

      '--checkbox-size-default': '1.25rem',
    },
    theme: '*',
    variant: 'default',
    component: 'checkbox',
  })
}
