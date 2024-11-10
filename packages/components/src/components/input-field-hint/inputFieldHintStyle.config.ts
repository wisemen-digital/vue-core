import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldHintStyleConfig {
  '--input-field-hint-font-size-default': string
  '--input-field-hint-font-weight-default': string
  '--input-field-hint-spacing-default': string
  '--input-field-hint-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-hint-font-size-default': 'var(--text-sm)',
    '--input-field-hint-font-weight-default': '400',
    '--input-field-hint-spacing-default': 'var(--spacing-sm)',
    '--input-field-hint-text-color-default': 'var(--text-tertiary)',
  },
  selector: '.input-field-hint-variant-default',
  component: 'inputFieldHint',
})
