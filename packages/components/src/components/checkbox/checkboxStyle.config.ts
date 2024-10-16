import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface CheckboxStyleConfig extends BaseStyleConfig {
  // Background
  '--checkbox-bg-color-checked': string
  '--checkbox-bg-color-default': string
  '--checkbox-bg-color-disabled': string
  '--checkbox-bg-color-error': string
  '--checkbox-bg-color-focus': string
  '--checkbox-bg-color-hover': string
  '--checkbox-bg-color-indeterminate': string

  // Border
  '--checkbox-border-color-checked': string
  '--checkbox-border-color-default': string
  '--checkbox-border-color-disabled': string
  '--checkbox-border-color-error': string
  '--checkbox-border-color-focus': string
  '--checkbox-border-color-hover': string
  '--checkbox-border-color-indeterminate': string

  '--checkbox-border-radius-default': string
  '--checkbox-border-width-default': string

  '--checkbox-bottom-spacing-left-default': string
  // Error
  '--checkbox-error-font-size-default': string
  '--checkbox-error-font-weight-default': string
  '--checkbox-error-spacing-default': string

  '--checkbox-error-text-color-default': string
  // Hint
  '--checkbox-hint-font-size-default': string
  '--checkbox-hint-font-weight-default': string

  '--checkbox-hint-spacing-default': string

  '--checkbox-hint-text-color-default': string

  '--checkbox-hint-text-color-disabled': string

  '--checkbox-hint-text-color-error': string
  '--checkbox-hint-text-color-focus': string

  '--checkbox-hint-text-color-hover': string
  // Indicator
  '--checkbox-indicator-color-checked': string
  '--checkbox-indicator-color-default': string
  '--checkbox-indicator-color-disabled': string
  '--checkbox-indicator-color-error': string
  '--checkbox-indicator-color-focus': string

  '--checkbox-indicator-color-hover': string
  '--checkbox-indicator-color-indeterminate': string
  '--checkbox-indicator-size-default': string
  // Label
  '--checkbox-label-font-size-default': string

  '--checkbox-label-font-weight-default': string
  '--checkbox-label-spacing-default': string
  '--checkbox-label-text-color-checked': string
  '--checkbox-label-text-color-default': string
  '--checkbox-label-text-color-disabled': string
  '--checkbox-label-text-color-error': string
  '--checkbox-label-text-color-focus': string

  '--checkbox-label-text-color-hover': string
  '--checkbox-label-text-color-indeterminate': string
  // Ring
  '--checkbox-ring-color-checked': string
  '--checkbox-ring-color-default': string

  '--checkbox-ring-color-disabled': string

  '--checkbox-ring-color-error': string
  '--checkbox-ring-color-focus': string
  '--checkbox-ring-color-hover': string
  '--checkbox-ring-color-indeterminate': string

  // Shadow
  '--checkbox-shadow-checked': string
  '--checkbox-shadow-default': string
  '--checkbox-shadow-disabled': string
  '--checkbox-shadow-error': string
  '--checkbox-shadow-focus': string
  '--checkbox-shadow-hover': string

  '--checkbox-shadow-indeterminate': string

  // Size
  '--checkbox-size-default': string

}

defineStyleConfig({
  config: {
    '--checkbox-bg-color-checked': 'var(--bg-brand-solid)',
    '--checkbox-bg-color-default': 'var(--bg-primary)',
    '--checkbox-bg-color-disabled': 'var(--bg-disabled-subtle)',
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

    '--checkbox-border-radius-default': 'var(--spacing-sm)',
    '--checkbox-border-width-default': '1px',

    // Enable this to remove / define your own hint / error padding left
    // '--checkbox-bottom-spacing-left-default': '',

    '--checkbox-error-font-size-default': 'var(--input-field-error-font-size-default)',
    '--checkbox-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
    '--checkbox-error-spacing-default': '0px',

    '--checkbox-error-text-color-default': 'var(--input-field-error-text-color-default)',
    '--checkbox-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
    '--checkbox-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',

    '--checkbox-hint-spacing-default': '0px',
    '--checkbox-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
    '--checkbox-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
    '--checkbox-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
    '--checkbox-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
    '--checkbox-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
    '--checkbox-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',

    '--checkbox-hint-text-color-indeterminate': 'var(--input-field-hint-text-color-default)',
    '--checkbox-indicator-color-checked': 'var(--fg-white)',
    '--checkbox-indicator-color-default': 'var(--fg-white)',
    '--checkbox-indicator-color-disabled': 'var(--fg-disabled-subtle)',
    '--checkbox-indicator-color-error': 'var(--fg-error-secondary)',
    '--checkbox-indicator-color-focus': 'var(--fg-white)',
    '--checkbox-indicator-color-hover': 'var(--fg-white)',

    '--checkbox-indicator-color-indeterminate': 'var(--fg-white)',

    '--checkbox-indicator-size-default': '14px',
    '--checkbox-label-font-size-default': 'var(--input-field-label-font-size-default)',
    '--checkbox-label-font-weight-default': 'var(--input-field-label-font-weight-default)',

    '--checkbox-label-spacing-default': 'var(--spacing-md)',
    '--checkbox-label-text-color-checked': 'var(--input-field-label-text-color-default)',
    '--checkbox-label-text-color-default': 'var(--input-field-label-text-color-default)',
    '--checkbox-label-text-color-disabled': 'var(--input-field-label-text-color-default)',
    '--checkbox-label-text-color-error': 'var(--input-field-label-text-color-default)',
    '--checkbox-label-text-color-focus': 'var(--input-field-label-text-color-default)',
    '--checkbox-label-text-color-hover': 'var(--input-field-label-text-color-default)',

    '--checkbox-label-text-color-indeterminate': 'var(--input-field-label-text-color-default)',
    '--checkbox-ring-color-checked': 'var(--brand-primary-500)',
    '--checkbox-ring-color-default': 'var(--brand-primary-500)',
    '--checkbox-ring-color-disabled': 'var(--brand-primary-500)',
    '--checkbox-ring-color-error': 'var(--error-500)',
    '--checkbox-ring-color-focus': 'var(--brand-primary-500)',
    '--checkbox-ring-color-hover': 'var(--brand-primary-500)',

    '--checkbox-ring-color-indeterminate': 'var(--brand-primary-500)',
    '--checkbox-shadow-checked': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-default': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-disabled': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-error': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-focus': '0px 0px 0px 0px #000000',
    '--checkbox-shadow-hover': '0px 0px 0px 0px #000000',

    '--checkbox-shadow-indeterminate': '0px 0px 0px 0px #000000',

    '--checkbox-size-default': '20px',
  },
  selector: ':root',
  component: 'checkbox',
})
