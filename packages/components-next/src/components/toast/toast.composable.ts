import { h } from 'vue'
import type { ToastT } from 'vue-sonner'
import { toast as toastState } from 'vue-sonner'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import type { ToastProps } from '@/components/toast/toast.props'
import Toast from '@/components/toast/Toast.vue'

const TOAST_DURATION = Infinity

export type ToastPosition = NonNullable<ToastT['position']>

interface ToastOptions extends Omit<ToastProps, 'type'> {}

interface UseToastReturnType {
  error: (toast: ToastOptions) => void
  info: (toast: ToastOptions) => void
  success: (toast: ToastOptions) => void
}

export function useToast(): UseToastReturnType {
  const {
    toastPosition,
  } = useInjectConfigContext()

  function showErrorToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'error',
    }), {
      duration: TOAST_DURATION,
      position: toastPosition,
    })
  }

  function showInfoToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'info',
    }), {
      duration: TOAST_DURATION,
      position: toastPosition,
    })
  }

  function showSuccessToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'success',
    }), {
      duration: TOAST_DURATION,
      position: toastPosition,
    })
  }

  return {
    error: showErrorToast,
    info: showInfoToast,
    success: showSuccessToast,
  }
}
