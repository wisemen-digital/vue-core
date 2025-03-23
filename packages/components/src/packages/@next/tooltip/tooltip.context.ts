import type {
  ComputedRef,
} from 'vue'

import type { ClassConfig } from '@/customClassVariants'
import { useContext } from '@/packages/@next/shared/context.composable'
import type { CreateTooltipStyle } from '@/packages/@next/tooltip/style/tooltip.style'
import type { TooltipProps } from '@/packages/@next/tooltip/tooltip.props'
import type { PropsToComputed } from '@/utils/props.util'

interface TooltipContext extends PropsToComputed<TooltipProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ClassConfig<'tooltip'>>
  style: ComputedRef<CreateTooltipStyle>
}

export const [
  useProvideTooltipContext,
  useInjectTooltipContext,
] = useContext<TooltipContext>('tooltipContext')
