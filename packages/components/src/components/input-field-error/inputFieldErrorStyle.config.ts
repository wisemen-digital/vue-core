import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldErrorStyleConfig {
  '--input-field-error-font-size-default': string
  '--input-field-error-font-weight-default': string
  '--input-field-error-spacing-default': string
  '--input-field-error-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-error-font-size-default': 'var(--text-subtext)',
    '--input-field-error-font-weight-default': '400',
    '--input-field-error-spacing-default': 'var(--spacing-sm)',
    '--input-field-error-text-color-default': 'var(--text-error-primary)',
  },
  selector: ':root',
  component: 'inputFieldError',
})
