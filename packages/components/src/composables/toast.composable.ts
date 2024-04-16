import { h } from 'vue'

import { toast as vueSonnerToast } from '../components/sonner/state'
import AppToast from '../components/toast/AppToast.vue'
import type { Toast } from '../types/toast.type'

interface NamedToast {
  description?: string
  title: string
}

interface UseToastReturnType {
  custom: (toast: Toast) => void
  error: (toast: NamedToast) => void
  success: (toast: NamedToast) => void
}

export function useToast(): UseToastReturnType {
  const TOAST_DURATION = 10000

  function showToast(toast: Toast) {
    vueSonnerToast.custom(h(AppToast, {
      action: toast.action,
      description: toast.description ?? null,
      icon: toast.icon,
      title: toast.title,
      type: toast.type,
    }), {
      duration: toast.duration ?? TOAST_DURATION,
    })
  }

  function showErrorToast(toast: NamedToast) {
    vueSonnerToast.custom(h(AppToast, {
      description: toast.description ?? null,
      icon: 'alertCircle',
      title: toast.title,
      type: 'error',
    }), {
      duration: TOAST_DURATION,
    })
  }

  function showSuccessToast(toast: NamedToast) {
    vueSonnerToast.custom(h(AppToast, {
      description: toast.description ?? null,
      icon: 'checkmarkCircle',
      title: toast.title,
      type: 'success',
    }), {
      duration: TOAST_DURATION,
    })
  }

  return {
    custom: showToast,
    error: showErrorToast,
    success: showSuccessToast,
  }
}
