import type { Config } from 'tailwindcss'

export const iconButtonTailwindConfig = {
  height: {
    'icon-button-icon-size-default': 'var(--icon-button-icon-size-default)',
    'icon-button-size-default': 'var(--icon-button-size-default)',
  },
  width: {
    'icon-button-icon-size-default': 'var(--icon-button-icon-size-default)',
    'icon-button-size-default': 'var(--icon-button-size-default)',
  },
} satisfies Config['theme']
