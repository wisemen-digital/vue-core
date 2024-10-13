import type { Config } from 'tailwindcss'

export const tableTailwindConfig = {
  backgroundColor: {
    'table-header-bg-color-default': 'var(--table-header-bg-color-default)',
  },
  borderColor: {
    'table-border-color-default': 'var(--table-border-color-default)',
  },
  borderRadius: {
    'table-border-radius-default': 'var(--table-border-radius-default)',
  },
  fontSize: {
    'table-header-label-font-size-default': 'var(--table-header-label-font-size-default)',
  },
  fontWeight: {
    'table-header-label-font-weight-default': 'var(--table-header-label-font-weight-default)',
  },
  textColor: {
    'table-header-label-text-color-default': 'var(--table-header-label-text-color-default)',
  },
} satisfies Config['theme']
