import { h } from 'vue'
import type { ToastT } from 'vue-sonner'
import { toast as toastState } from 'vue-sonner'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import type { ToastProps } from '@/components/toast/toast.props'
import Toast from '@/components/toast/Toast.vue'

const PERMANENT_TOAST_DURATION = Infinity
const AUTO_CLOSE_TOAST_DURATION = 5000

export type ToastPosition = NonNullable<ToastT['position']>

interface ToastOptions extends Omit<ToastProps, 'type'> {}

interface UseToastReturnType {
  error: (toast: ToastOptions) => void
  info: (toast: ToastOptions) => void
  success: (toast: ToastOptions) => void
}

export function useToast(): UseToastReturnType {
  const {
    autoCloseToast, toastPosition,
  } = useInjectConfigContext()

  function showErrorToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'error',
    }), {
      duration: autoCloseToast ? AUTO_CLOSE_TOAST_DURATION : PERMANENT_TOAST_DURATION,
      position: toastPosition,
    })
  }

  function showInfoToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'info',
    }), {
      duration: autoCloseToast ? AUTO_CLOSE_TOAST_DURATION : PERMANENT_TOAST_DURATION,
      position: toastPosition,
    })
  }

  function showSuccessToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'success',
    }), {
      duration: autoCloseToast ? AUTO_CLOSE_TOAST_DURATION : PERMANENT_TOAST_DURATION,
      position: toastPosition,
    })
  }

  return {
    error: showErrorToast,
    info: showInfoToast,
    success: showSuccessToast,
  }
}
