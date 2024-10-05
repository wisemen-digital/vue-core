import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldHintStyleConfig {
  '--input-field-hint-font-size-default': string
  '--input-field-hint-font-weight-default': string
  '--input-field-hint-spacing-default': string
  '--input-field-hint-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-hint-font-size-default': '12px',
    '--input-field-hint-font-weight-default': '400',
    '--input-field-hint-spacing-default': '6px',
    '--input-field-hint-text-color-default': '#3d4658',
  },
  selector: ':root',
  component: 'inputFieldHint',
})
