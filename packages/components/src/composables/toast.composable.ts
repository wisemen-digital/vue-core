import { h, type VNode } from 'vue'

import { toast as vueSonnerToast } from '@/components/sonner/state'
import AppToast from '@/components/toast/AppToast.vue'
import type { Toast } from '@/types/toast.type'

interface NamedToast {
  title: string
  description?: string
}

interface UseToastReturnType {
  custom: (toast: Toast) => void
  error: (toast: NamedToast) => void
  h: (h: () => VNode) => void
  success: (toast: NamedToast) => void
}

export function useToast(): UseToastReturnType {
  const TOAST_DURATION = 10000

  function showToast(toast: Toast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      action: toast.action,
      description: toast.description ?? null,
      icon: toast.icon,
      type: toast.type,
    }), {
      duration: toast.duration ?? TOAST_DURATION,
    })
  }

  function showErrorToast(toast: NamedToast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      description: toast.description ?? null,
      icon: 'alertCircle',
      type: 'error',
    }), {
      duration: TOAST_DURATION,
    })
  }

  function showSuccessToast(toast: NamedToast): void {
    vueSonnerToast.custom(h(AppToast, {
      title: toast.title,
      description: toast.description ?? null,
      icon: 'checkmarkCircle',
      type: 'success',
    }), {
      duration: TOAST_DURATION,
    })
  }

  function customToast(h: () => VNode): void {
    vueSonnerToast.custom(h(), {
      duration: TOAST_DURATION,
    })
  }

  return {
    custom: showToast,
    error: showErrorToast,
    h: customToast,
    success: showSuccessToast,
  }
}
