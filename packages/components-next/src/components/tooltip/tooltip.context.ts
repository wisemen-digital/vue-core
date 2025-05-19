import type { ComputedRef } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import type { TooltipProps } from '@/components/tooltip/tooltip.props'
import type { CreateTooltipStyle } from '@/components/tooltip/tooltip.style'
import { useContext } from '@/composables/context/context.composable'
import type { PropsToComputed } from '@/utils/props.util'

interface TooltipContext extends PropsToComputed<TooltipProps> {
  isOpen: ComputedRef<boolean>
  customClassConfig: ComputedRef<ResolvedClassConfig<'tooltip'>>
  style: ComputedRef<CreateTooltipStyle>
  onAutoFocusOnClose: (event: Event) => void
  onContentEscapeKeyDown: (event: KeyboardEvent) => void
  onContentFocusOutside: (event: CustomEvent) => void
  onContentInteractOutside: (event: CustomEvent) => void
}

export const [
  useProvideTooltipContext,
  useInjectTooltipContext,
] = useContext<TooltipContext>('tooltipContext')
