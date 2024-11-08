import { createContext } from 'radix-vue'
import type { Ref } from 'vue'

import type { Direction, Orientation } from '@/components/roving-focus/rovingFocus.util'

interface RovingContext {
  currentTabStopId: Ref<string | null | undefined>
  dir: Ref<Direction>
  loop: Ref<boolean>
  orientation: Ref<Orientation | undefined>
  onFocusableItemAdd: () => void
  onFocusableItemRemove: () => void
  onItemFocus: (tabStopId: string) => void
  onItemShiftTab: () => void
}

export const [
  injectRovingFocusGroupContext,
  provideRovingFocusGroupContext,
] = createContext<RovingContext>('RovingFocusGroup')
