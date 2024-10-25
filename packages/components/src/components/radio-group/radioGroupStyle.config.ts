import { defineStyleConfig } from '@/styling/defineStyleConfig'
import type { BaseStyleConfig } from '@/types/style.type'

export interface RadioGroupStyleConfig extends BaseStyleConfig {
  // Error
  '--radio-group-error-font-size-default': string
  '--radio-group-error-font-weight-default': string
  '--radio-group-error-spacing-default': string
  '--radio-group-error-text-color-default': string
  // Hint
  '--radio-group-hint-font-size-default': string
  '--radio-group-hint-font-weight-default': string
  '--radio-group-hint-spacing-default': string
  '--radio-group-hint-text-color-default': string
  '--radio-group-hint-text-color-disabled': string
  '--radio-group-hint-text-color-error': string
  '--radio-group-hint-text-color-focus': string
  '--radio-group-hint-text-color-hover': string
  // Background
  '--radio-group-item-bg-color-checked': string
  '--radio-group-item-bg-color-default': string
  '--radio-group-item-bg-color-disabled': string
  '--radio-group-item-bg-color-error': string
  '--radio-group-item-bg-color-focus': string
  '--radio-group-item-bg-color-hover': string
  // Border
  '--radio-group-item-border-color-checked': string
  '--radio-group-item-border-color-default': string
  '--radio-group-item-border-color-disabled': string
  '--radio-group-item-border-color-error': string
  '--radio-group-item-border-color-focus': string
  '--radio-group-item-border-color-hover': string
  '--radio-group-item-border-radius-default': string
  '--radio-group-item-border-width-default': string
  '--radio-group-item-bottom-spacing-left-default': string
  // Item hint
  '--radio-group-item-hint-font-size-default': string
  '--radio-group-item-hint-font-weight-default': string
  '--radio-group-item-hint-spacing-default': string
  '--radio-group-item-hint-text-color-default': string
  '--radio-group-item-hint-text-color-disabled': string
  '--radio-group-item-hint-text-color-error': string
  '--radio-group-item-hint-text-color-focus': string
  '--radio-group-item-hint-text-color-hover': string
  // Indicator
  '--radio-group-item-indicator-bg-color-checked': string
  '--radio-group-item-indicator-bg-color-default': string
  '--radio-group-item-indicator-bg-color-disabled': string
  '--radio-group-item-indicator-bg-color-error': string
  '--radio-group-item-indicator-bg-color-focus': string
  '--radio-group-item-indicator-bg-color-hover': string
  '--radio-group-item-indicator-border-color-checked': string
  '--radio-group-item-indicator-border-color-default': string
  '--radio-group-item-indicator-border-color-disabled': string
  '--radio-group-item-indicator-border-color-error': string
  '--radio-group-item-indicator-border-color-focus': string
  '--radio-group-item-indicator-border-color-hover': string
  '--radio-group-item-indicator-border-radius-default': string
  '--radio-group-item-indicator-size-default': string
  // Item Label
  '--radio-group-item-label-font-size-default': string
  '--radio-group-item-label-font-weight-default': string
  '--radio-group-item-label-spacing-default': string
  '--radio-group-item-label-text-color-checked': string
  '--radio-group-item-label-text-color-default': string
  '--radio-group-item-label-text-color-disabled': string
  '--radio-group-item-label-text-color-error': string
  '--radio-group-item-label-text-color-focus': string
  '--radio-group-item-label-text-color-hover': string
  // Ring
  '--radio-group-item-ring-color-checked': string
  '--radio-group-item-ring-color-default': string
  '--radio-group-item-ring-color-disabled': string
  '--radio-group-item-ring-color-error': string
  '--radio-group-item-ring-color-focus': string
  '--radio-group-item-ring-color-hover': string
  // Shadow
  '--radio-group-item-shadow-checked': string
  '--radio-group-item-shadow-default': string
  '--radio-group-item-shadow-disabled': string
  '--radio-group-item-shadow-error': string
  '--radio-group-item-shadow-focus': string
  '--radio-group-item-shadow-hover': string
  // Size
  '--radio-group-item-size-default': string
  '--radio-group-label-font-size-default': string
  '--radio-group-label-font-weight-default': string
  // Label
  '--radio-group-label-spacing-default': string
  '--radio-group-label-text-color-checked': string
  '--radio-group-label-text-color-default': string
  '--radio-group-label-text-color-disabled': string
  '--radio-group-label-text-color-error': string
  '--radio-group-label-text-color-focus': string

  '--radio-group-label-text-color-hover': string

}

defineStyleConfig({
  config: {
    // Error
    '--radio-group-error-font-size-default': 'var(--input-field-error-font-size-default)',
    '--radio-group-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
    '--radio-group-error-spacing-default': 'var(--input-field-error-spacing-default)',
    '--radio-group-error-text-color-default': 'var(--input-field-error-text-color-default)',
    // Hint
    '--radio-group-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
    '--radio-group-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
    '--radio-group-hint-spacing-default': 'var(--input-field-hint-spacing-default)',
    '--radio-group-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
    '--radio-group-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
    '--radio-group-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
    '--radio-group-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
    '--radio-group-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
    '--radio-group-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',
    // Item background
    // Enable this to remove / define your own hint / error padding left
    // '--radio-group-item-bottom-spacing-left-default': '',
    '--radio-group-item-bg-color-checked': 'var(--bg-brand-solid)',
    '--radio-group-item-bg-color-default': 'var(--bg-primary)',
    '--radio-group-item-bg-color-disabled': 'var(--bg-disabled-subtle)',
    '--radio-group-item-bg-color-error': 'var(--bg-primary)',
    '--radio-group-item-bg-color-focus': 'var(--bg-primary)',
    '--radio-group-item-bg-color-hover': 'var(--bg-primary-hover)',
    // Item border
    '--radio-group-item-border-color-checked': 'var(--border-brand-alt)',
    '--radio-group-item-border-color-default': 'var(--border-primary)',
    '--radio-group-item-border-color-disabled': 'var(--border-disabled)',
    '--radio-group-item-border-color-error': 'var(--border-error-subtle)',
    '--radio-group-item-border-color-focus': 'var(--border-primary)',
    '--radio-group-item-border-color-hover': 'var(--border-primary)',
    '--radio-group-item-border-radius-default': 'var(--radius-full)',
    '--radio-group-item-border-width-default': '1px',
    // Item hint
    '--radio-group-item-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
    '--radio-group-item-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
    '--radio-group-item-hint-spacing-default': '0px',
    '--radio-group-item-hint-text-color-checked': 'var(--input-field-hint-text-color-default)',
    '--radio-group-item-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
    '--radio-group-item-hint-text-color-disabled': 'var(--input-field-hint-text-color-default)',
    '--radio-group-item-hint-text-color-error': 'var(--input-field-hint-text-color-default)',
    '--radio-group-item-hint-text-color-focus': 'var(--input-field-hint-text-color-default)',
    '--radio-group-item-hint-text-color-hover': 'var(--input-field-hint-text-color-default)',
    // Item indicator
    '--radio-group-item-indicator-bg-color-checked': 'var(--fg-white)',
    '--radio-group-item-indicator-bg-color-default': 'var(--fg-white)',
    '--radio-group-item-indicator-bg-color-disabled': 'var(--fg-disabled-subtle)',
    '--radio-group-item-indicator-bg-color-error': 'var(--fg-error-secondary)',
    '--radio-group-item-indicator-bg-color-focus': 'var(--fg-white)',
    '--radio-group-item-indicator-bg-color-hover': 'var(--fg-white)',
    '--radio-group-item-indicator-border-radius-default': 'var(--radius-full)',
    '--radio-group-item-indicator-size-checked': '6px',
    '--radio-group-item-indicator-size-default': '0px',
    '--radio-group-item-indicator-size-disabled': '0px',
    '--radio-group-item-indicator-size-error': '0px',
    '--radio-group-item-indicator-size-focus': '0px',
    '--radio-group-item-indicator-size-hover': '0px',
    // Item label
    '--radio-group-item-label-font-size-default': 'var(--input-field-label-font-size-default)',
    '--radio-group-item-label-font-weight-default': 'var(--input-field-label-font-weight-default)',
    '--radio-group-item-label-spacing-default': 'var(--spacing-md)',
    '--radio-group-item-label-text-color-checked': 'var(--input-field-label-text-color-default)',
    '--radio-group-item-label-text-color-default': 'var(--input-field-label-text-color-default)',
    '--radio-group-item-label-text-color-disabled': 'var(--input-field-label-text-color-default)',
    '--radio-group-item-label-text-color-error': 'var(--input-field-label-text-color-default)',
    '--radio-group-item-label-text-color-focus': 'var(--input-field-label-text-color-default)',
    '--radio-group-item-label-text-color-hover': 'var(--input-field-label-text-color-default)',
    // Ring
    '--radio-group-item-ring-color-checked': 'var(--brand-primary-500)',
    '--radio-group-item-ring-color-default': 'var(--brand-primary-500)',
    '--radio-group-item-ring-color-disabled': 'var(--brand-primary-500)',
    '--radio-group-item-ring-color-error': 'var(--error-500)',
    '--radio-group-item-ring-color-focus': 'var(--brand-primary-500)',
    '--radio-group-item-ring-color-hover': 'var(--brand-primary-500)',
    // Item shadow
    '--radio-group-item-shadow-checked': '0px 0px 0px 0px #000000',
    '--radio-group-item-shadow-default': '0px 0px 0px 0px #000000',
    '--radio-group-item-shadow-disabled': '0px 0px 0px 0px #000000',
    '--radio-group-item-shadow-error': '0px 0px 0px 0px #000000',
    '--radio-group-item-shadow-focus': '0px 0px 0px 0px #000000',
    '--radio-group-item-shadow-hover': '0px 0px 0px 0px #000000',
    '--radio-group-item-size-default': '16px',
    // Label
    '--radio-group-label-font-size-default': 'var(--input-field-label-font-size-default)',
    '--radio-group-label-font-weight-default': 'var(--input-field-label-font-weight-default)',
    '--radio-group-label-spacing-default': 'var(--spacing-md)',
    '--radio-group-label-text-color-checked': 'var(--input-field-label-text-color-default)',
    '--radio-group-label-text-color-default': 'var(--input-field-label-text-color-default)',
    '--radio-group-label-text-color-disabled': 'var(--input-field-label-text-color-default)',
    '--radio-group-label-text-color-error': 'var(--input-field-label-text-color-default)',
    '--radio-group-label-text-color-focus': 'var(--input-field-label-text-color-default)',
    '--radio-group-label-text-color-hover': 'var(--input-field-label-text-color-default)',
  },
  selector: '.radio-group-variant-default',
  component: 'radioGroup',
})
