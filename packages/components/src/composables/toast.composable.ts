import { h } from 'vue'
import { toast as vueSonnerToast } from 'vue-sonner'

import AppToast from '@/components/toast/AppToast.vue'

import type { Icon } from '../icons/icons'

interface Toast {
  description?: string
  icon: Icon
  title: string
}

interface UseToastReturnType {
  showErrorToast: (toast: Omit<Toast, 'icon'>) => void
  showSuccessToast: (toast: Omit<Toast, 'icon'>) => void
  showToast: (toast: Toast) => void
}

export function useToast(): UseToastReturnType {
  const TOAST_DURATION = 10000

  function showToast(toast: Toast) {
    vueSonnerToast.custom(h(AppToast, {
      description: toast.description,
      icon: toast.icon,
      title: toast.title,
    }), {
      duration: TOAST_DURATION,
    })
  }

  function showErrorToast(toast: Omit<Toast, 'icon'>) {
    vueSonnerToast.custom(h(AppToast, {
      description: toast.description,
      icon: 'close',
      title: toast.title,
    }), {
      duration: TOAST_DURATION,
    })
  }

  function showSuccessToast(toast: Omit<Toast, 'icon'>) {
    vueSonnerToast.custom(h(AppToast, {
      description: toast.description,
      icon: 'checkmark',
      title: toast.title,
    }), {
      duration: TOAST_DURATION,
    })
  }

  return {
    showErrorToast,
    showSuccessToast,
    showToast,
  }
}
