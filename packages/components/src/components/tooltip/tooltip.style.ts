import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useTooltipStyle = tv({
  slots: {
    arrow: 'absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow',
    arrowContainer: 'relative z-10 -mb-4 h-4 w-10 overflow-hidden',
    content: 'custom-popover-content z-popover rounded-popover border bg-popover shadow-popover-shadow',
    contentText: 'max-w-xs px-3 py-1.5 text-center text-sm text-popover-foreground',
  },
  variants: {},
})

export type TooltipStyleProps = VariantProps<typeof useTooltipStyle>
