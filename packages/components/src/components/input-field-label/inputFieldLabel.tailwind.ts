import type { Config } from 'tailwindcss'

export const inputFieldLabelTailwindConfig = {
  fontSize: {
    'input-field-label-font-size-default': 'var(--input-field-label-font-size-default)',
  },
  fontWeight: {
    'input-field-label-font-weight-default': 'var(--input-field-label-font-weight-default)',
  },
  margin: {
    'input-field-label-spacing-default': 'var(--input-field-label-spacing-default)',
  },
  textColor: {
    'input-field-label-text-color-default': 'var(--input-field-label-text-color-default)',
  },
} satisfies Config['theme']
