import type { ComputedRef } from 'vue'

import type { ToastPosition } from '@/components/toast/toast.composable'
import { useContext } from '@/composables/context/context.composable'

interface ConfigContext {
  areKeyboardShortcutHintsHidden: ComputedRef<boolean>
  autoCloseToast: ComputedRef<boolean>
  googleMapsApiKey: string | null
  locale: ComputedRef<string>
  pagination?: {
    limit?: number
  }
  teleportTargetSelector: string
  toastPosition?: ToastPosition
}

export const [
  useProvideConfigContext,
  useInjectConfigContext,
] = useContext<ConfigContext>('configContext')
