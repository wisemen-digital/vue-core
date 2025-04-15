import { useRefHistory } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import {
  computed,
  ref,
} from 'vue'

export interface SettingsHistory {
  activeViewId: ComputedRef<string>
  canGoBack: ComputedRef<boolean>
  canGoForward: ComputedRef<boolean>
  goBack: () => void
  goForward: () => void
  onChangeView: (viewId: string) => void
}

export function useSettingsHistory(defaultViewId: string): SettingsHistory {
  const activeViewId = ref<string>(defaultViewId)
  const history = useRefHistory<string>(activeViewId)

  function goBack(): void {
    history.undo()
  }

  function goForward(): void {
    history.redo()
  }

  function onChangeView(viewId: string): void {
    activeViewId.value = viewId
  }

  return {
    activeViewId: computed<string>(() => activeViewId.value),
    canGoBack: computed<boolean>(() => history.canUndo.value),
    canGoForward: computed<boolean>(() => history.canRedo.value),
    goBack,
    goForward,
    onChangeView,
  }
}
