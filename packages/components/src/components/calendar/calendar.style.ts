import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useCalendarStyle = tv({
  slots: {
    cellTrigger: 'relative flex size-8 items-center justify-center whitespace-nowrap rounded-full text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:bg-primary/20 focus:shadow-[0_0_0_2px] focus:shadow-primary data-[unavailable]:pointer-events-none data-[highlighted]:bg-primary/20 data-[selected]:!bg-primary data-[disabled]:text-foreground/30 data-[selected]:text-background data-[unavailable]:text-foreground/30 data-[unavailable]:line-through data-[today]:before:block data-[selected]:data-[today]:before:bg-background/60 data-[today]:before:bg-primary/60',
    dataCell: 'relative text-center text-sm',
    dataGridRow: 'grid grid-cols-7',
    grid: 'w-full select-none space-y-1',
    gridContainer: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0',
    headCell: 'rounded-md text-xs text-primary',
    headGridRow: 'mb-1 grid w-full grid-cols-7',
    header: 'flex items-center justify-between',
    headerHeading: 'text-body font-medium text-foreground',
    headerPrevNext: 'inline-flex size-8 cursor-pointer items-center justify-center rounded-[9px] bg-transparent text-foreground hover:bg-primary/20 focus:shadow-[0_0_0_2px] focus:!shadow-primary focus:outline-none active:scale-[0.97] active:transition-all',
    root: 'rounded-xl bg-background p-4 shadow-md',
  },
})

export type CalendarStyleProps = VariantProps<typeof useCalendarStyle>
