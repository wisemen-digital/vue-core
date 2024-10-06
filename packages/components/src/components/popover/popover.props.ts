import type { PopoverProps } from '@/types/popover.type'
import type { StyleConfig } from '@/types/style.type'

export interface AppPopoverProps extends PopoverProps {
  styleConfig?: StyleConfig<'popover'> | null
}

export const appPopoverPropsDefaultValues = {
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  offsetInPx: 10,
  popoverWidth: null,
  side: 'bottom',
  styleConfig: null,
} satisfies Partial<AppPopoverProps>
