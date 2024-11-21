import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldLabelStyleConfig {
  '--input-field-label-font-size-default': string
  '--input-field-label-font-weight-default': string
  '--input-field-label-spacing-default': string
  '--input-field-label-text-color-default': string
}

export function setupDefaultInputFieldLabelStyles(): void {
  defineStyleConfig({
    colorScheme: '*',
    config: {
      '--input-field-label-font-size-default': 'var(--text-sm)',
      '--input-field-label-font-weight-default': '500',
      '--input-field-label-spacing-default': 'var(--spacing-sm)',
      '--input-field-label-text-color-default': 'var(--text-secondary)',
    },
    theme: '*',
    variant: 'default',
    component: 'inputFieldLabel',
  })
}
