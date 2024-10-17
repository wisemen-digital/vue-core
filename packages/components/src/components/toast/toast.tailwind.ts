import type { Config } from 'tailwindcss'

export const toastTailwindConfig = {
  width: {
    'toast-width-default': '600px',
  },
  zIndex: {
    toast: '50',
  },
} satisfies Config['theme']
