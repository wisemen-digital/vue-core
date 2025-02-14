import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface SwitchStyleConfig extends BaseStyleConfig {
  '--switch-bg-color-checked': string
  '--switch-bg-color-default': string
  '--switch-bg-color-disabled': string
  '--switch-bg-color-error': string
  '--switch-bg-color-focus': string
  '--switch-bg-color-hover': string

  '--switch-border-color-checked': string
  '--switch-border-color-default': string
  '--switch-border-color-disabled': string
  '--switch-border-color-error': string
  '--switch-border-color-focus': string
  '--switch-border-color-hover': string

  '--switch-border-radius-default': string

  '--switch-error-font-size': string
  '--switch-error-font-weight': string
  '--switch-error-spacing-default': string
  '--switch-error-text-color': string

  '--switch-hint-font-size': string
  '--switch-hint-font-weight': string
  '--switch-hint-spacing-default': string
  '--switch-hint-text-color-checked': string
  '--switch-hint-text-color-default': string
  '--switch-hint-text-color-disabled': string
  '--switch-hint-text-color-error': string
  '--switch-hint-text-color-focus': string
  '--switch-hint-text-color-hover': string

  '--switch-icon-color-checked': string
  '--switch-icon-color-default': string
  '--switch-icon-color-disabled': string
  '--switch-icon-color-error': string
  '--switch-icon-color-focus': string
  '--switch-icon-color-hover': string
  '--switch-icon-size-default': string

  '--switch-label-font-size-default': string
  '--switch-label-font-weight-default': string
  '--switch-label-spacing-default': string
  '--switch-label-text-color-checked': string
  '--switch-label-text-color-default': string
  '--switch-label-text-color-disabled': string
  '--switch-label-text-color-error': string
  '--switch-label-text-color-focus': string
  '--switch-label-text-color-hover': string

  '--switch-ring-color-error': string
  '--switch-ring-color-focus': string

  '--switch-thumb-bg-color': string
  '--switch-thumb-padding-default': string
  '--switch-thumb-shadow-default': string
  '--switch-thumb-size-default': string
}

export function setupDefaultSwitchStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--switch-bg-color-checked': 'var(--bg-brand-solid)',
      '--switch-bg-color-default': 'var(--bg-quaternary)',
      '--switch-bg-color-disabled': 'var(--bg-disabled)',
      '--switch-bg-color-error': 'var(--bg-error-primary)',
      '--switch-bg-color-focus': 'var(--bg-quaternary)',
      '--switch-bg-color-hover': 'var(--bg-quaternary)',

      '--switch-border-color-checked': 'var(--bg-brand-solid)',
      '--switch-border-color-default': 'var(--bg-tertiary)',
      '--switch-border-color-disabled': 'var(--bg-disabled)',
      '--switch-border-color-error': 'var(--border-error-subtle)',
      '--switch-border-color-focus': 'var(--bg-tertiary)',
      '--switch-border-color-hover': 'var(--bg-tertiary)',

      '--switch-border-radius-default': 'var(--radius-full)',

      '--switch-error-font-size-default': 'var(--text-sm)',
      '--switch-error-font-weight-default': 'var(--font-weight-medium)',
      '--switch-error-spacing-default': 'var(--spacing-none)',
      '--switch-error-text-color-default': 'var(--text-error-primary)',

      '--switch-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
      '--switch-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
      '--switch-hint-spacing-default': 'var(--spacing-none)',
      '--switch-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
      '--switch-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',

      '--switch-icon-color-checked': 'var(--switch-bg-color-checked)',
      '--switch-icon-color-default': 'var(--fg-tertiary)',
      '--switch-icon-color-disabled': 'var(--fg-tertiary)',
      '--switch-icon-color-error': 'var(--fg-error-secondary)',
      '--switch-icon-color-focus': 'var(--fg-tertiary)',
      '--switch-icon-color-hover': 'var(--fg-tertiary)',
      '--switch-icon-size-default': 'calc(var(--switch-thumb-size-default)/1.5)',

      '--switch-label-font-size-default': 'var(--text-sm)',
      '--switch-label-font-weight-default': 'var(--font-weight-medium)',
      '--switch-label-spacing-default': 'var(--spacing-lg)',
      '--switch-label-text-color-checked': 'var(--text-primary)',
      '--switch-label-text-color-default': 'var(--text-secondary)',
      '--switch-label-text-color-disabled': 'var(--text-disabled)',
      '--switch-label-text-color-error': 'var(--text-primary)',
      '--switch-label-text-color-focus': 'var(--text-primary)',
      '--switch-label-text-color-hover': 'var(--text-primary)',

      '--switch-ring-color-error': 'var(--error-500)',
      '--switch-ring-color-focus': 'var(--brand-500)',

      '--switch-thumb-bg-color-default': 'white',
      '--switch-thumb-padding-default': 'var(--spacing-xxs)',
      '--switch-thumb-shadow-default': 'var(--shadow-sm)',
      '--switch-thumb-size-default': '1.25rem',

    },
    theme: '*',
    variant: 'default',
    component: 'switch',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--switch-icon-color-default': 'var(--gray-900)',
      '--switch-icon-color-focus': 'var(--gray-900)',
      '--switch-icon-color-hover': 'var(--gray-900)',
      '--switch-indicator-bg-color-disabled': 'var(--gray-600)',
      '--switch-indicator-border-color-disabled': 'var(--gray-600)',
    },
    theme: 'dark',
    variant: 'default',
    component: 'switch',
  })

  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--switch-thumb-size-default': '1rem',
    },
    theme: '*',
    variant: 'sm',
    component: 'switch',
  })
}
