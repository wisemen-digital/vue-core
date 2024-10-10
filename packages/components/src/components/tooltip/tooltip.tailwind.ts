import type { Config } from 'tailwindcss'

export const tooltipTailwindConfig = {
  backgroundColor: {
    'tooltip-bg-color-default': 'var(--tooltip-bg-color-default)',
  },
  borderColor: {
    'tooltip-border-color-default': 'var(--tooltip-border-color-default)',
  },
  borderRadius: {
    'tooltip-border-radius-default': 'var(--tooltip-border-radius-default)',
  },
  boxShadow: {
    'tooltip-shadow-default': 'var(--tooltip-shadow-default)',
  },
  textColor: {
    'tooltip-text-color-default': 'var(--tooltip-text-color-default)',
  },
} satisfies Config['theme']
