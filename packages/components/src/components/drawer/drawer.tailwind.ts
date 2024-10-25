import type { Config } from 'tailwindcss'

export const drawerTailwindConfig = {
  backgroundColor: {
    'drawer-bg-color-default': 'var(--drawer-bg-color-default)',
  },
  borderColor: {
    'drawer-border-color-default': 'var(--drawer-border-color-default)',
  },
  borderRadius: {
    'drawer-border-radius-default': 'var(--drawer-border-radius-default)',
  },
  boxShadow: {
    'drawer-shadow-default': 'var(--drawer-shadow-default)',
  },
  padding: {
    'drawer-padding-default': 'var(--drawer-padding-default)',
  },
  transitionTimingFunction: {
    'drawer-overlay': 'cubic-bezier(0.17, 0.67, 0.16, 0.99)',
  },
} satisfies Config['theme']
