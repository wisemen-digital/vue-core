import { h } from 'vue'
import type { ToastT } from 'vue-sonner'
import { toast as toastState } from 'vue-sonner'

import { useInjectConfigContext } from '@/components/config-provider/config.context'
import type { ToastProps } from '@/components/toast/toast.props'
import Toast from '@/components/toast/Toast.vue'

const PERMANENT_TOAST_DURATION = Infinity
const AUTO_CLOSE_TOAST_DURATION = 5000

export type ToastPosition = NonNullable<ToastT['position']>

interface ToastOptions extends Omit<ToastProps, 'type'> {
  /**
   * The time in milliseconds after which the toast will automatically close.
   * If no timeout is provided, the toast will not automatically close unless `autoCloseToast` is set to `true`
   * in the config provider component.
   */
  durationMs?: number | null
}

interface UseToastReturnType {
  error: (toast: ToastOptions) => void
  info: (toast: ToastOptions) => void
  success: (toast: ToastOptions) => void
}

export function useToast(): UseToastReturnType {
  const {
    autoCloseToast, toastPosition,
  } = useInjectConfigContext()

  function getToastDuration(toast: ToastOptions, isErrorToast: boolean): number {
    if (toast.durationMs !== undefined && toast.durationMs !== null) {
      return toast.durationMs
    }

    if (autoCloseToast.value && !isErrorToast) {
      return AUTO_CLOSE_TOAST_DURATION
    }

    return PERMANENT_TOAST_DURATION
  }

  function showErrorToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'error',
    }), {
      duration: getToastDuration(toast, true),
      position: toastPosition,
    })
  }

  function showInfoToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'info',
    }), {
      duration: getToastDuration(toast, false),
      position: toastPosition,
    })
  }

  function showSuccessToast(toast: ToastOptions): void {
    toastState.custom(h(Toast, {
      ...toast,
      type: 'success',
    }), {
      duration: getToastDuration(toast, false),
      position: toastPosition,
    })
  }

  return {
    error: showErrorToast,
    info: showInfoToast,
    success: showSuccessToast,
  }
}
