import { tv } from '@/styles/tailwindVariants.lib'

export const createTooltipStyle = tv({
  slots: {
    content: `
      relative size-full overflow-hidden rounded-sm border border-secondary
      bg-primary shadow-lg
    `,
    contentWrapper: `z-40 will-change-[transform,filter,opacity]`,
  },
})

export type TooltipStyle = ReturnType<typeof createTooltipStyle>
