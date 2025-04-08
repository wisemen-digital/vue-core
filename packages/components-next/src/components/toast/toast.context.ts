import type { ComputedRef } from 'vue'

import type { ToastProps } from '@/components/toast/toast.props'
import type { CreateToastStyle } from '@/components/toast/toast.style'
import { useContext } from '@/composables/context/context.composable'
import type { ClassConfig } from '@/customClassVariants'
import type { PropsToComputed } from '@/utils/props.util'

interface ToastContext extends PropsToComputed<ToastProps> {
  customClassConfig: ComputedRef<ClassConfig<'toast'>>
  style: ComputedRef<CreateToastStyle>
  onClose: () => void
}

export const [
  useProvideToastContext,
  useInjectToastContext,
] = useContext<ToastContext>('toastContext')
