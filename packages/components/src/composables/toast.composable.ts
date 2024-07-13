import { h, type VNode } from 'vue'

import { toast as vueSonnerToast } from '@/components/sonner/state'
import AppToast from '@/components/toast/AppToast.vue'

interface NamedToast {
  title: string
  description?: string
}

interface UseToastReturnType {
  custom: (toast: {
    duration?: number
    h: () => VNode
  }) => void
  error: (toast: NamedToast) => void
  success: (toast: NamedToast) => void
}

export function useToast(): UseToastReturnType {
  const DEFAULT_TOAST_DURATION = 10000

  function showErrorToast(toast: NamedToast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      description: toast.description ?? null,
      icon: 'alertCircle',
      type: 'error',
    }), {
      duration: DEFAULT_TOAST_DURATION,
    })
  }

  function showSuccessToast(toast: NamedToast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      description: toast.description ?? null,
      icon: 'checkmarkCircle',
      type: 'success',
    }), {
      duration: DEFAULT_TOAST_DURATION,
    })
  }

  function customToast(toast: {
    duration?: number
    h: () => VNode
  }): void {
    vueSonnerToast.custom(toast.h(), {
      duration: toast.duration ?? DEFAULT_TOAST_DURATION,
    })
  }

  return {
    custom: customToast,
    error: showErrorToast,
    success: showSuccessToast,
  }
}
