import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface SwitchStyleConfig extends BaseStyleConfig {
  // Background
  '--switch-bg-color-checked': string
  '--switch-bg-color-default': string
  '--switch-bg-color-disabled': string
  '--switch-bg-color-error': string
  '--switch-bg-color-focus': string
  '--switch-bg-color-hover': string

  // Border
  '--switch-border-color-checked': string
  '--switch-border-color-default': string
  '--switch-border-color-disabled': string
  '--switch-border-color-error': string
  '--switch-border-color-focus': string
  '--switch-border-color-hover': string

  '--switch-border-radius-default': string
  '--switch-border-width-default': string

  '--switch-bottom-spacing-left-default': string
  // Error
  '--switch-error-font-size-default': string
  '--switch-error-font-weight-default': string
  '--switch-error-spacing-default': string

  '--switch-error-text-color-default': string
  // Hint
  '--switch-hint-font-size-default': string
  '--switch-hint-font-weight-default': string

  '--switch-hint-spacing-default': string

  '--switch-hint-text-color-default': string

  '--switch-hint-text-color-disabled': string

  '--switch-hint-text-color-error': string
  '--switch-hint-text-color-focus': string

  '--switch-hint-text-color-hover': string
  '--switch-indicator-border-color-checked': string
  '--switch-indicator-border-color-default': string
  '--switch-indicator-border-color-disabled': string
  '--switch-indicator-border-color-error': string
  '--switch-indicator-border-color-focus': string

  '--switch-indicator-border-color-hover': string
  '--switch-indicator-border-radius-default': string
  // Indicator
  '--switch-indicator-color-checked': string

  '--switch-indicator-color-default': string
  '--switch-indicator-color-disabled': string
  '--switch-indicator-color-error': string
  '--switch-indicator-color-focus': string
  '--switch-indicator-color-hover': string
  '--switch-indicator-size-default': string

  // Label
  '--switch-label-font-size-default': string
  '--switch-label-font-weight-default': string
  '--switch-label-spacing-default': string
  '--switch-label-text-color-checked': string

  '--switch-label-text-color-default': string

  '--switch-label-text-color-disabled': string
  '--switch-label-text-color-error': string
  '--switch-label-text-color-focus': string
  '--switch-label-text-color-hover': string

  // Ring
  '--switch-ring-color-checked': string
  '--switch-ring-color-default': string
  '--switch-ring-color-disabled': string
  '--switch-ring-color-error': string
  '--switch-ring-color-focus': string

  '--switch-ring-color-hover': string

  // Shadow
  '--switch-shadow-checked': string

  '--switch-shadow-default': string
  '--switch-shadow-disabled': string
  '--switch-shadow-error': string
  '--switch-shadow-focus': string
  '--switch-shadow-hover': string
  // Size
  '--switch-size-default': string

}

defineStyleConfig({
  config: {
    '--switch-bg-color-checked': 'var(--bg-brand-solid)',
    '--switch-bg-color-default': 'var(--bg-tertiary)',
    '--switch-bg-color-disabled': 'var(--bg-disabled)',
    '--switch-bg-color-error': 'var(--bg-tertiary)',
    '--switch-bg-color-focus': 'var(--bg-tertiary)',
    '--switch-bg-color-hover': 'var(--bg-brand-solid-hover)',

    '--switch-border-color-checked': 'var(--bg-brand-solid)',
    '--switch-border-color-default': 'var(--bg-tertiary)',
    '--switch-border-color-disabled': 'var(--bg-disabled)',
    '--switch-border-color-error': 'var(--border-error-subtle)',
    '--switch-border-color-focus': 'var(--bg-tertiary)',
    '--switch-border-color-hover': 'var(--bg-tertiary)',

    '--switch-border-radius-default': 'var(--radius-full)',
    '--switch-border-width-default': '1px',

    // Enable this to remove / define your own hint / error padding left
    // '--switch-bottom-spacing-left-default': '',

    '--switch-error-font-size-default': 'var(--input-field-error-font-size-default)',
    '--switch-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
    '--switch-error-spacing-default': 'var(--input-field-error-spacing-default)',
    '--switch-error-text-color-default': 'var(--input-field-error-text-color-default)',

    '--switch-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
    '--switch-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
    '--switch-hint-spacing-default': 'var(--input-field-hint-spacing-default)',

    '--switch-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
    '--switch-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
    '--switch-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
    '--switch-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
    '--switch-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
    '--switch-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',

    '--switch-indicator-bg-color-checked': 'var(--fg-white)',
    '--switch-indicator-bg-color-default': 'var(--fg-white)',
    '--switch-indicator-bg-color-disabled': 'var(--gray-50)',
    '--switch-indicator-bg-color-error': 'var(--fg-white)',
    '--switch-indicator-bg-color-focus': 'var(--fg-white)',
    '--switch-indicator-bg-color-hover': 'var(--fg-white)',

    '--switch-indicator-border-color-checked': 'var(--fg-white)',
    '--switch-indicator-border-color-default': 'var(--fg-white)',
    '--switch-indicator-border-color-disabled': 'var(--gray-50)',
    '--switch-indicator-border-color-error': 'var(--fg-white)',
    '--switch-indicator-border-color-focus': 'var(--fg-white)',
    '--switch-indicator-border-color-hover': 'var(--fg-white)',

    '--switch-indicator-border-radius-default': 'var(--radius-full)',
    '--switch-indicator-border-width-default': '1px',

    '--switch-indicator-shadow-checked': 'var(--shadow-sm)',
    '--switch-indicator-shadow-default': 'var(--shadow-sm)',
    '--switch-indicator-shadow-disabled': 'var(--shadow-sm)',
    '--switch-indicator-shadow-error': 'var(--shadow-sm)',
    '--switch-indicator-shadow-focus': 'var(--shadow-sm)',
    '--switch-indicator-shadow-hover': 'var(--shadow-sm)',

    '--switch-label-font-size-default': 'var(--input-field-label-font-size-default)',
    '--switch-label-font-weight-default': 'var(--input-field-label-font-weight-default)',
    '--switch-label-spacing-default': 'var(--spacing-md)',

    '--switch-label-text-color-checked': 'var(--input-field-label-text-color-default)',
    '--switch-label-text-color-default': 'var(--input-field-label-text-color-default)',
    '--switch-label-text-color-disabled': 'var(--input-field-label-text-color-default)',
    '--switch-label-text-color-error': 'var(--input-field-label-text-color-default)',
    '--switch-label-text-color-focus': 'var(--input-field-label-text-color-default)',

    '--switch-label-text-color-hover': 'var(--input-field-label-text-color-default)',

    '--switch-padding-x-default': 'var(--spacing-xxs)',

    '--switch-ring-color-checked': 'var(--brand-primary-500)',
    '--switch-ring-color-default': 'var(--brand-primary-500)',
    '--switch-ring-color-disabled': 'var(--brand-primary-500)',
    '--switch-ring-color-error': 'var(--error-500)',
    '--switch-ring-color-focus': 'var(--brand-primary-500)',
    '--switch-ring-color-hover': 'var(--brand-primary-500)',

    '--switch-shadow-checked': 'var(--shadow-none)',
    '--switch-shadow-default': 'var(--shadow-none)',
    '--switch-shadow-disabled': 'var(--shadow-none)',
    '--switch-shadow-error': 'var(--shadow-none)',
    '--switch-shadow-focus': 'var(--shadow-none)',
    '--switch-shadow-hover': 'var(--shadow-none)',
  },
  selector: ':root',
  component: 'switch',
})

defineStyleConfig({
  config: {
    '--switch-height-default': '1.5rem',
    '--switch-indicator-size-default': '1.25rem',
    '--switch-width-default': '2.75rem',
  },
  selector: '.switch-md',
  component: 'switch',
})

defineStyleConfig({
  config: {
    '--switch-height-default': '1.25rem',
    '--switch-indicator-size-default': '1.01rem',
    '--switch-width-default': '2.25rem',
  },
  selector: '.switch-sm',
  component: 'switch',
})

defineStyleConfig({
  config: {
    '--switch-indicator-bg-color-disabled': 'var(--gray-600)',
    '--switch-indicator-border-color-disabled': 'var(--gray-600)',
  },
  selector: '.dark',
  component: 'switch',
})
