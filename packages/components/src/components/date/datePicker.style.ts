import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useDatePickerStyle = tv({
  slots: {
    calendarPickerGrid: 'w-full border-collapse select-none space-y-1',
    calendarPickerGridBodyRow: 'flex w-full',
    calendarPickerGridCellTrigger: 'relative flex size-8 items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary',
    calendarPickerGridContainer: 'flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0',
    calendarPickerGridHeadCell: 'w-8 rounded-md text-xs text-muted-foreground',
    calendarPickerGridHeadRow: 'mb-1 flex w-full justify-between',
    monthPickerContentCellTrigger: 'relative flex h-8 w-full items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent px-4 text-center text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary',
    monthPickerContentGridBody: 'grid grid-cols-2',
    picker: 'flex w-full flex-col gap-2',
    pickerContent: 'rounded-popover bg-popover p-3 shadow-popover-shadow will-change-[transform,opacity]',
    pickerContentArrow: 'fill-white',
    pickerField: 'relative flex h-10 w-full items-center rounded-input border border-solid border-input-border bg-input pl-3 pr-1 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-ring',
    pickerFieldInput: 'w-full bg-input outline-none',
    pickerHeader: 'flex items-center justify-between',
    pickerHeaderHeading: 'font-medium text-foreground',
    pickerHeaderHeadingButton: 'flex items-center',
    yearPickerContentCellTrigger: 'relative flex h-8 items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent px-4 text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary',
    yearPickerContentGrid: 'grid grid-cols-2 gap-4',
  },
  variants: {
    isInvalid: {
      true: {
        pickerField: 'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive',
      },
    },
    isDisabled: {
      true: {
        pickerField: 'cursor-not-allowed opacity-50',
      },
    },
  },
})

export type DatePickerStyleProps = VariantProps<typeof useDatePickerStyle>
