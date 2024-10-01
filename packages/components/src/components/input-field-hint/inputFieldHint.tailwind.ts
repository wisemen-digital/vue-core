import type { Config } from 'tailwindcss'

export const inputFieldHintTailwindConfig = {
  fontSize: {
    'input-field-hint-font-size-default': 'var(--input-field-hint-font-size-default)',
  },
  fontWeight: {
    'input-field-hint-font-weight-default': 'var(--input-field-hint-font-weight-default)',
  },
  margin: {
    'input-field-hint-spacing-default': 'var(--input-field-hint-spacing-default)',
  },
  textColor: {
    'input-field-hint-text-color-default': 'var(--input-field-hint-text-color-default)',
  },
} satisfies Config['theme']
