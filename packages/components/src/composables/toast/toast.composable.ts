import { h } from 'vue'

import AppToast from '@/components/toast/AppToast.vue'
import { toast as toastState } from '@/components/toast/core/state'
import type { Toast } from '@/types/toast.type'

const DEFAULT_TOAST_DURATION = 10_000
const DEFAULT_ERROR_TOAST_DURATION = Infinity

interface ToastWithOptions extends Toast {
  /**
   * The duration of the toast in milliseconds
   */
  durationInMs?: number
}

interface UseToastReturnType {
  error: (toast: ToastWithOptions) => void
  info: (toast: ToastWithOptions) => void
  success: (toast: ToastWithOptions) => void
}

export function useToast(): UseToastReturnType {
  function showErrorToast(toast: ToastWithOptions): void {
    toastState.custom(h(AppToast, {
      toast,
      type: 'error',
    }), {
      duration: toast.durationInMs ?? DEFAULT_ERROR_TOAST_DURATION,
    })
  }

  function showInfoToast(toast: ToastWithOptions): void {
    toastState.custom(h(AppToast, {
      toast,
      type: 'info',
    }), {
      duration: toast.durationInMs ?? DEFAULT_TOAST_DURATION,
    })
  }

  function showSuccessToast(toast: ToastWithOptions): void {
    toastState.custom(h(AppToast, {
      toast,
      type: 'success',
    }), {
      duration: toast.durationInMs ?? DEFAULT_TOAST_DURATION,
    })
  }

  return {
    error: showErrorToast,
    info: showInfoToast,
    success: showSuccessToast,
  }
}
