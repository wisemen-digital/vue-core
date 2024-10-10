import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldLabelStyleConfig {
  '--input-field-label-font-size-default': string
  '--input-field-label-font-weight-default': string
  '--input-field-label-spacing-default': string
  '--input-field-label-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-label-font-size-default': 'var(--text-subtext)',
    '--input-field-label-font-weight-default': '500',
    '--input-field-label-spacing-default': 'var(--spacing-sm)',
    '--input-field-label-text-color-default': 'var(--text-secondary)',
  },
  selector: ':root',
  component: 'inputFieldLabel',
})
