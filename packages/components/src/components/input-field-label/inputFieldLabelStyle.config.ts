import { defineStyleConfig } from '@/styling/defineStyleConfig'

export interface InputFieldLabelStyleConfig {
  '--input-field-label-font-size-default': string
  '--input-field-label-font-weight-default': string
  '--input-field-label-spacing-default': string
  '--input-field-label-text-color-default': string
}

defineStyleConfig({
  config: {
    '--input-field-label-font-size-default': '14px',
    '--input-field-label-font-weight-default': '400',
    '--input-field-label-spacing-default': '4px',
    '--input-field-label-text-color-default': '#3d4658',
  },
  selector: ':root',
  component: 'inputFieldLabel',
})
