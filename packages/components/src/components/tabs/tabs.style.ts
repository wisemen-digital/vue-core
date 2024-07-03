import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useTabsStyle = tv({
  slots: {
    indicator: 'absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-t-full bg-primary px-8 duration-200',
    list: 'relative flex border-b border-solid border-border',
    routeText: 'duration-200',
    routeTriggerGroup: 'group py-2 outline-none',
    routeTriggerTab: 'rounded-button px-3 py-2 duration-200 group-hover:bg-muted-background group-focus-visible:bg-muted-background',
    trigger: 'rounded px-4 py-3 outline-none ring-offset-background duration-200 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring',
  },
  variants: {
    isActive: {
      false: {
        routeText: 'text-muted-foreground',
      },
      true: {
        routeText: 'text-primary',
      },
    },
  },
})

export type TabsStyleProps = VariantProps<typeof useTabsStyle>
