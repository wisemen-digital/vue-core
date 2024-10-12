import type { Config } from 'tailwindcss'

export const dialogTailwindConfig = {
  backgroundColor: {
    'dialog-bg-color-default': 'var(--dialog-bg-color-default)',
  },
  borderColor: {
    'dialog-border-color-default': 'var(--dialog-border-color-default)',
  },
  borderRadius: {
    'dialog-border-radius-default': 'var(--dialog-border-radius-default)',
  },
  boxShadow: {
    'dialog-shadow-default': 'var(--dialog-shadow-default)',
  },
} satisfies Config['theme']
