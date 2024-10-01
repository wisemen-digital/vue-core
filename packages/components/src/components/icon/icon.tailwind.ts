import type { Config } from 'tailwindcss'

export const iconTailwindConfig = {
  height: {
    'icon-size': 'var(--icon-size)',
  },
  textColor: {
    icon: 'var(--icon-color)',
  },
  width: {
    'icon-size': 'var(--icon-size)',
  },
} satisfies Config['theme']
