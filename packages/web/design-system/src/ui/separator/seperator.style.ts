import { tv } from '@/styles/tailwindVariants.lib'

export const createSeperatorStyle = tv({
  slots: {
    separator: `bg-tertiary`,
  },
  variants: {
    orientation: {
      horizontal: {
        separator: 'h-px w-full',
      },
      vertical: {
        separator: 'h-full w-px',
      },
    },
  },
})

export type SeperatorStyle = ReturnType<typeof createSeperatorStyle>
