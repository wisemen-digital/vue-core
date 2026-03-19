import type { VariantProps } from 'tailwind-variants'

import { tv } from '@/styles/tailwindVariants.lib'

export const createDialogStyle = tv({
  slots: {
    body: 'flex-1 overflow-y-auto p-xl',
    content: `
      fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] w-full flex-col
      overflow-hidden bg-primary shadow-xl will-change-[transform,opacity]
      outline-none
      sm:inset-x-auto sm:top-1/2 sm:bottom-auto sm:left-1/2 sm:max-h-[85vh]
      sm:-translate-1/2
    `,
    footer: 'sticky bottom-0 bg-primary',
    header: 'sticky top-0 z-10 bg-primary',
    overlay: `
      fixed inset-0 z-50 bg-linear-to-t from-black/50 to-black/25
      will-change-[opacity]
    `,
  },
  variants: {
    size: {
      'full-screen': {
        content: 'h-full max-h-full max-w-full rounded-none',
      },
      'lg': {
        content: `
          rounded-t-2xl
          sm:max-w-160 sm:rounded-xl
        `,
      },
      'md': {
        content: `
          rounded-t-2xl
          sm:max-w-140 sm:rounded-xl
        `,
      },
      'sm': {
        content: `
          rounded-t-2xl
          sm:max-w-120 sm:rounded-xl
        `,
      },
      'xl': {
        content: `
          rounded-t-2xl
          sm:max-w-180 sm:rounded-xl
        `,
      },
      'xs': {
        content: `
          rounded-t-2xl
          sm:max-w-100 sm:rounded-xl
        `,
      },
      'xxs': {
        content: `
          rounded-t-2xl
          sm:max-w-90 sm:rounded-xl
        `,
      },
    },
  },
})

export type DialogStyle = VariantProps<typeof createDialogStyle>
export type CreateDialogStyle = ReturnType<typeof createDialogStyle>
