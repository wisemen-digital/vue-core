import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useSidebarNavStyle = tv({
  slots: {
    container: 'sticky left-0 top-0 flex h-screen flex-col justify-between gap-6 border border-solid border-muted bg-background px-3 py-6 transition-all duration-100',
    containerClosed: 'min-w-20 max-w-20 items-center',
    containerOpen: 'min-w-64 max-w-64 items-start',
    groupContainer: 'flex w-full flex-1 flex-col items-center gap-y-2 pb-4',
    groupTitle: 'w-full uppercase text-neutral-400',
    item: 'w-full',
    itemsList: 'flex flex-1 flex-col items-center gap-y-2',
    nav: 'size-full pt-12',
    toggleButton: 'absolute -right-3 top-14 flex h-12 w-6 items-center justify-center rounded-full border border-solid border-muted bg-background',
    toggleButtonIcon: 'text-muted-foreground',
  },
})

export type SidebarNavStyleProps = VariantProps<typeof useSidebarNavStyle>
