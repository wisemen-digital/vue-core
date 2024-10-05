import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldErrorStyleConfig {
  '--input-field-error-font-size-default': string
  '--input-field-error-font-weight-default': string
  '--input-field-error-spacing-default': string
  '--input-field-error-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-error-font-size-default': '14px',
    '--input-field-error-font-weight-default': '400',
    '--input-field-error-spacing-default': '4px',
    '--input-field-error-text-color-default': '#ff0202',
  },
  selector: ':root',
  component: 'inputFieldError',
})
