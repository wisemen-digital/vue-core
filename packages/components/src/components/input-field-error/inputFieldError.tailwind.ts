import type { Config } from 'tailwindcss'

export const inputFieldErrorTailwindConfig = {
  fontSize: {
    'input-field-error-font-size-default': 'var(--input-field-error-font-size-default)',
  },
  fontWeight: {
    'input-field-error-font-weight-default': 'var(--input-field-error-font-weight-default)',
  },
  margin: {
    'input-field-error-spacing-default': 'var(--input-field-error-spacing-default)',
  },
  textColor: {
    'input-field-error-text-color-default': 'var(--input-field-error-text-color-default)',
  },
} satisfies Config['theme']
