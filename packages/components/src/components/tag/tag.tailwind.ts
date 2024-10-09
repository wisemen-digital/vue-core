import type { Config } from 'tailwindcss'

export const tagTailwindConfig = {
  backgroundColor: {
    'tag-bg-color-default': 'var(--tag-bg-color-default)',
    'tag-bg-color-disabled': 'var(--tag-bg-color-disabled)',
  },
  borderColor: {
    'tag-border-color-default': 'var(--tag-border-color-default)',
    'tag-border-color-disabled': 'var(--tag-border-color-disabled)',
  },
  borderRadius: {
    'tag-border-radius-default': 'var(--tag-border-radius-default)',
  },
  fontSize: {
    'tag-font-size-default': 'var(--tag-font-size-default)',
  },
  fontWeight: {
    'tag-font-weight-default': 'var(--tag-font-weight-default)',
  },
  padding: {
    'tag-padding-x-default': 'var(--tag-padding-x-default)',
    'tag-padding-y-default': 'var(--tag-padding-y-default)',
  },
  textColor: {
    'tag-text-color-default': 'var(--tag-text-color-default)',
    'tag-text-color-disabled': 'var(--tag-text-color-disabled)',
  },
} satisfies Config['theme']
