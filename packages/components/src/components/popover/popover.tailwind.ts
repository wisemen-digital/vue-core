import type { Config } from 'tailwindcss'

export const popoverTailwindConfig = {
  backgroundColor: {
    'popover-bg-color-default': 'var(--popover-bg-color-default)',
  },
  borderColor: {
    'popover-border-color-default': 'var(--popover-border-color-default)',
  },
  borderRadius: {
    'popover-border-radius-default': 'var(--popover-border-radius-default)',
  },
  boxShadow: {
    'popover-shadow-default': 'var(--popover-shadow-default)',
  },
  maxWidth: {
    'popover-max-width-default': 'var(--popover-max-width-default)',
  },
} satisfies Config['theme']
