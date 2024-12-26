import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface RadioGroupItemStyleConfig extends BaseStyleConfig {
  '--radio-group-item-bg-color-checked': string
  '--radio-group-item-bg-color-default': string
  '--radio-group-item-bg-color-disabled': string
  '--radio-group-item-bg-color-error': string
  '--radio-group-item-bg-color-focus': string
  '--radio-group-item-bg-color-hover': string

  '--radio-group-item-border-color-checked': string
  '--radio-group-item-border-color-default': string
  '--radio-group-item-border-color-disabled': string
  '--radio-group-item-border-color-error': string
  '--radio-group-item-border-color-focus': string
  '--radio-group-item-border-color-hover': string

  '--radio-group-item-border-radius-default': string

  '--radio-group-item-error-font-size': string
  '--radio-group-item-error-font-weight': string
  '--radio-group-item-error-spacing-default': string
  '--radio-group-item-error-text-color': string

  '--radio-group-item-hint-font-size': string
  '--radio-group-item-hint-font-weight': string
  '--radio-group-item-hint-spacing-default': string
  '--radio-group-item-hint-text-color-checked': string
  '--radio-group-item-hint-text-color-default': string
  '--radio-group-item-hint-text-color-disabled': string
  '--radio-group-item-hint-text-color-error': string
  '--radio-group-item-hint-text-color-focus': string
  '--radio-group-item-hint-text-color-hover': string

  '--radio-group-item-indicator-bg-color-checked': string
  '--radio-group-item-indicator-bg-color-disabled': string
  '--radio-group-item-indicator-bg-color-error': string
  '--radio-group-item-indicator-bg-color-focus': string
  '--radio-group-item-indicator-bg-color-hover': string
  '--radio-group-item-indicator-border-radius-default': string
  '--radio-group-item-indicator-size-default': string
  '--radio-group-item-label-font-size-default': string
  '--radio-group-item-label-font-weight-default': string

  '--radio-group-item-label-spacing-default': string
  '--radio-group-item-label-text-color-checked': string
  '--radio-group-item-label-text-color-default': string
  '--radio-group-item-label-text-color-disabled': string
  '--radio-group-item-label-text-color-error': string
  '--radio-group-item-label-text-color-focus': string

  '--radio-group-item-label-text-color-hover': string

  '--radio-group-item-ring-color-error': string
  '--radio-group-item-ring-color-focus': string

  '--radio-group-item-size-default': string
}

export function setupDefaultRadioGroupItemStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--radio-group-item-bg-color-checked': 'var(--bg-brand-solid)',
      '--radio-group-item-bg-color-default': 'var(--bg-primary)',
      '--radio-group-item-bg-color-disabled': 'var(--bg-disabled)',
      '--radio-group-item-bg-color-error': 'var(--bg-primary)',
      '--radio-group-item-bg-color-focus': 'var(--bg-primary)',
      '--radio-group-item-bg-color-hover': 'var(--bg-primary)',

      '--radio-group-item-border-color-checked': 'var(--border-brand-alt)',
      '--radio-group-item-border-color-default': 'var(--border-primary)',
      '--radio-group-item-border-color-disabled': 'var(--border-disabled)',
      '--radio-group-item-border-color-error': 'var(--border-error-subtle)',

      '--radio-group-item-border-color-focus': 'var(--border-primary)',
      '--radio-group-item-border-color-hover': 'var(--border-primary)',
      '--radio-group-item-border-radius-default': 'var(--radius-full)',
      '--radio-group-item-error-font-size-default': 'var(--text-sm)',
      '--radio-group-item-error-font-weight-default': 'var(--font-weight-medium)',
      '--radio-group-item-error-spacing-default': 'var(--spacing-none)',
      '--radio-group-item-error-text-color-default': 'var(--text-error-primary)',
      '--radio-group-item-hint-font-size-default': 'var(--input-field-hint-font-size-default)',

      '--radio-group-item-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
      '--radio-group-item-hint-spacing-default': 'var(--spacing-none)',
      '--radio-group-item-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
      '--radio-group-item-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
      '--radio-group-item-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
      '--radio-group-item-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
      '--radio-group-item-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
      '--radio-group-item-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',

      '--radio-group-item-indicator-bg-color-checked': 'var(--fg-white)',
      '--radio-group-item-indicator-bg-color-disabled': 'var(--fg-disabled)',
      '--radio-group-item-indicator-bg-color-error': 'var(--fg-error-secondary)',
      '--radio-group-item-indicator-bg-color-focus': 'var(--fg-white)',
      '--radio-group-item-indicator-bg-color-hover': 'var(--fg-white)',
      '--radio-group-item-indicator-border-radius-default': 'var(--radius-full)',
      '--radio-group-item-indicator-size-default': '0.5rem',
      '--radio-group-item-label-font-size-default': 'var(--text-sm)',

      '--radio-group-item-label-font-weight-default': 'var(--font-weight-medium)',

      '--radio-group-item-label-spacing-default': 'var(--spacing-lg)',
      '--radio-group-item-label-text-color-checked': 'var(--text-primary)',
      '--radio-group-item-label-text-color-default': 'var(--text-secondary)',
      '--radio-group-item-label-text-color-disabled': 'var(--text-disabled)',
      '--radio-group-item-label-text-color-error': 'var(--text-primary)',
      '--radio-group-item-label-text-color-focus': 'var(--text-primary)',

      '--radio-group-item-label-text-color-hover': 'var(--text-primary)',

      '--radio-group-item-ring-color-error': 'var(--error-500)',
      '--radio-group-item-ring-color-focus': 'var(--brand-primary-500)',

      '--radio-group-item-size-default': '1.25rem',
    },
    theme: '*',
    variant: 'default',
    component: 'radioGroupItem',
  })
}
