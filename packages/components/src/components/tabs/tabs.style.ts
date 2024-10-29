import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useTabsStyle = tv({
  slots: {
    indicator: 'absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-t-full bg-primary px-8 duration-200',
    list: 'relative flex border-b border-solid border-border',
    text: 'duration-200',
    triggerGroup: 'group py-2 outline-none',
    triggerTab: 'flex flex-row items-center gap-2 text-nowrap rounded-button px-3 py-2 duration-200 group-hover:bg-muted-background group-focus-visible:bg-muted-background',
  },
  variants: {
    isFullWidth: {
      false: {
        list: 'justify-start',
      },
      true: {
        list: 'justify-between',
        triggerGroup: 'flex-1',
        triggerTab: 'justify-center',
      },
    },
    isActive: {
      false: {
        text: 'text-muted-foreground',
      },
      true: {
        text: 'text-primary',
      },
    },
  },
})

export type TabsStyleProps = VariantProps<typeof useTabsStyle>
