import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldErrorStyleConfig {
  '--input-field-error-font-size-default': string
  '--input-field-error-font-weight-default': string
  '--input-field-error-spacing-default': string
  '--input-field-error-text-color-default': string
}

export function setupDefaultInputFieldErrorStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--input-field-error-font-size-default': 'var(--text-sm)',
      '--input-field-error-font-weight-default': '400',
      '--input-field-error-spacing-default': 'var(--spacing-sm)',
      '--input-field-error-text-color-default': 'var(--text-error-primary)',
    },
    theme: '*',
    variant: 'default',
    component: 'inputFieldError',
  })
}
