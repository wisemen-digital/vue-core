import { useRefHistory } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import {
  computed,
  ref,
} from 'vue'

export interface SettingsHistory {
  activeViewOrSectionId: ComputedRef<string>
  canGoBack: ComputedRef<boolean>
  canGoForward: ComputedRef<boolean>
  goBack: () => void
  goForward: () => void
  onSelectViewOrSection: (viewOrSectionId: string) => void
}

export function useSettingsHistory(defaultViewId: string): SettingsHistory {
  const activeViewOrSectionId = ref<string>(defaultViewId)
  const history = useRefHistory<string>(activeViewOrSectionId)

  function goBack(): void {
    history.undo()
  }

  function goForward(): void {
    history.redo()
  }

  function onSelectViewOrSection(viewOrSectionId: string): void {
    activeViewOrSectionId.value = viewOrSectionId
  }

  return {
    activeViewOrSectionId: computed<string>(() => activeViewOrSectionId.value),
    canGoBack: computed<boolean>(() => history.canUndo.value),
    canGoForward: computed<boolean>(() => history.canRedo.value),
    goBack,
    goForward,
    onSelectViewOrSection,
  }
}
