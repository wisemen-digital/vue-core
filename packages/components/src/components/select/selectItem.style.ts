import { tv } from '@/libs/twVariants.lib'

export const selectItemStyle = tv({
  slots: {
    indicator: 'h-select-item-indicator-size-default w-select-item-indicator-size-default text-select-item-indicator-color-default',
    item: 'flex items-center justify-between rounded-select-item-border-radius-default bg-select-item-bg-color-default px-select-item-padding-x-default py-select-item-padding-y-default text-select-item-font-size-default font-select-item-font-weight-default text-select-item-text-color-default outline-none duration-200 hover:bg-select-item-bg-color-hover hover:text-select-item-text-color-hover data-[disabled]:cursor-not-allowed data-[disabled]:bg-select-item-bg-color-disabled data-[highlighted]:bg-select-item-bg-color-highlighted data-[state=checked]:bg-select-item-bg-color-selected data-[disabled]:text-select-item-text-color-disabled data-[state=checked]:text-select-item-text-color-selected',
  },
})
