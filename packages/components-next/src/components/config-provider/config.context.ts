import type {
  ComputedRef,
} from 'vue'

import { useContext } from '@/composables/context/context.composable'

interface ConfigContext {
  areKeyboardShortcutHintsHidden: ComputedRef<boolean>
  googleMapsApiKey: string | null
  locale: ComputedRef<string>
  pagination?: {
    limit?: number
  }
  teleportTargetSelector: string
}

export const [
  useProvideConfigContext,
  useInjectConfigContext,
] = useContext<ConfigContext>('configContext')
