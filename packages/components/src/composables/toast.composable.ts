import { h, type VNode } from 'vue'

import { toast as vueSonnerToast } from '@/components/sonner/state'
import AppToast from '@/components/toast/AppToast.vue'
import type { Toast } from '@/types/toast.type'

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
  show: (toast: Toast) => void
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

  function showToast(toast: Toast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      action: toast.action,
      description: toast.description ?? null,
      icon: toast.icon,
      type: toast.type,
    }), {
      duration: toast.duration ?? DEFAULT_TOAST_DURATION,
    })
  }

  function customToast(toast: {
    duration?: number
    h: () => VNode
  }): void {
    vueSonnerToast.custom(toast.h(), {
      duration: toast.duration,
    })
  }

  return {
    custom: customToast,
    error: showErrorToast,
    show: showToast,
    success: showSuccessToast,
  }
}
