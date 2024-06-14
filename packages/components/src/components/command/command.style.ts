import type { VariantProps } from '@/libs/twVariants.lib'
import { tv } from '@/libs/twVariants.lib'

export const useCommandStyle = tv({
  slots: {
    container: 'rounded-lg bg-background shadow-popover-shadow',
    input: 'w-full truncate border-b border-solid border-border bg-transparent p-5 text-lg outline-none placeholder:text-input-placeholder',
    item: 'relative flex cursor-pointer items-center gap-x-3 rounded-lg p-3.5 text-muted-foreground outline-none duration-100 data-[highlighted]:bg-muted-background data-[highlighted]:text-foreground',
    itemIcon: 'text-muted-foreground',
    itemImg: 'size-5 rounded',
    itemText: 'text-muted-foreground',
  },
})

export type CommandStyleProps = VariantProps<typeof useCommandStyle>
