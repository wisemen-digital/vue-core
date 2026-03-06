import type {
  ComputedRef,
  ShallowRef,
} from 'vue'
import {
  computed,
  shallowRef,
} from 'vue'

import type { TabItemData } from '@/ui/tabs/tabs.context'

interface UseAdaptiveTabs {
  activeTab: ComputedRef<TabItemData | null>
  nextPriority: () => number
  registerTab: (tab: TabItemData) => void
  tabs: ShallowRef<TabItemData[]>
  unregisterTab: (value: string) => void
}

export function useAdaptiveTabs(activeValue: ComputedRef<string | undefined>): UseAdaptiveTabs {
  let priorityCounter = 0

  function nextPriority(): number {
    return priorityCounter++
  }

  const tabs = shallowRef<TabItemData[]>([])

  const activeTab = computed<TabItemData | null>(() => {
    return tabs.value.find((tab) => tab.value === activeValue.value) ?? null
  })

  function registerTab(tab: TabItemData): void {
    tabs.value = [
      ...tabs.value,
      tab,
    ]
  }

  function unregisterTab(value: string): void {
    tabs.value = tabs.value.filter((tab) => tab.value !== value)
  }

  return {
    activeTab,
    nextPriority,
    registerTab,
    tabs,
    unregisterTab,
  }
}
