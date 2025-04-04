import { h } from 'vue'

import { toast as toastState } from '@/components/toast/core/state'
import Toast from '@/components/toast/Toast.vue'
import type { Toast as ToastType } from '@/types/toast.type'

const DEFAULT_TOAST_DURATION = 10_000
const DEFAULT_ERROR_TOAST_DURATION = Infinity

interface ToastWithOptions extends ToastType {
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

function showErrorToast(toast: ToastWithOptions): void {
  toastState.custom(h(Toast, {
    toast,
    type: 'error',
  }), { duration: toast.durationInMs ?? DEFAULT_ERROR_TOAST_DURATION })
}

function showInfoToast(toast: ToastWithOptions): void {
  toastState.custom(h(Toast, {
    toast,
    type: 'info',
  }), { duration: toast.durationInMs ?? DEFAULT_TOAST_DURATION })
}

function showSuccessToast(toast: ToastWithOptions): void {
  toastState.custom(h(Toast, {
    toast,
    type: 'success',
  }), { duration: toast.durationInMs ?? DEFAULT_TOAST_DURATION })
}

export function useToast(): UseToastReturnType {
  return {
    error: showErrorToast,
    info: showInfoToast,
    success: showSuccessToast,
  }
}
