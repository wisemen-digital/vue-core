import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

// eslint-disable-next-line tailwindcss/no-custom-classname
export const useTabsStyle = tv({
  slots: {
    gradient: 'absolute top-0 z-10 h-full w-10 bg-gradient-to-l from-white to-transparent',
    indicator: 'absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-t-full bg-primary px-8 duration-200',
    list: 'hide-scroll relative flex overflow-x-auto border-b border-solid border-border',
    scrollButton: 'absolute top-1/2 z-20 w-fit -translate-y-1/2 rounded-full border border-border bg-white p-1',
    text: 'duration-200',
    triggerGroup: 'group py-2 outline-none',
    triggerTab: 'flex flex-row items-center gap-2 text-nowrap rounded-button px-3 py-2 duration-200 group-hover:bg-muted-background group-focus-visible:bg-muted-background',
  },
  variants: {
    direction: {
      'to-left': {
        gradient: 'right-0 bg-gradient-to-l',
        scrollButton: 'left-0 ml-2',
      },
      'to-right': {
        gradient: 'left-0 bg-gradient-to-r',
        scrollButton: 'right-0 mr-2',
      },
    },
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
