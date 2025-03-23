import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import type { PopoverProps } from '@/packages/@next/popover/popover.props'
import type { CreatePopoverStyle } from '@/packages/@next/popover/style/popover.style'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface PopoverContext extends PropsToComputed<PopoverProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'popover'>>
  style: ComputedRef<CreatePopoverStyle>
}

export const [
  useProvidePopoverContext,
  useInjectPopoverContext,
] = useContext<PopoverContext>('popoverContext')
