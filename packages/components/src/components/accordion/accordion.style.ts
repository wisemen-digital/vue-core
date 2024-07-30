import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useAccordionStyle = tv({
  slots: {
    title: 'flex flex-col items-start',
    content: 'overflow-hidden bg-background text-foreground data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
    contentDiv: 'px-3 py-2 text-subtext',
    icon: 'text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180',
    item: 'overflow-hidden first:mt-0 first:rounded-t-popover last:rounded-b-popover',
    root: 'rounded-popover shadow-popover-shadow',
    trigger: 'group flex flex-1 cursor-pointer items-center justify-between gap-10 border-t border-solid border-primary/10 bg-background px-3 py-2 text-foreground outline-none hover:bg-muted-background',
  },
})

export type AccordionStyleProps = VariantProps<typeof useAccordionStyle>
