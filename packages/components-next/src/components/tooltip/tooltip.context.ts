import type { ComputedRef } from 'vue'

import type { TooltipProps } from '@/components/tooltip/tooltip.props'
import type { CreateTooltipStyle } from '@/components/tooltip/tooltip.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
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
