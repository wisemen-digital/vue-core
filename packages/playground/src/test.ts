import { createContext } from 'radix-vue'
import type { Ref } from 'vue'

import type { Direction, Orientation } from './rovingFocus.util'

interface RovingContext {
  currentTabStopId: Ref<null | string | undefined>
  dir: Ref<Direction>
  loop: Ref<boolean>
  onFocusableItemAdd: () => void
  onFocusableItemRemove: () => void
  onItemFocus: (tabStopId: string) => void
  onItemShiftTab: () => void
  orientation: Ref<Orientation | undefined>
}

export const [
  injectRovingFocusGroupContext,
  provideRovingFocusGroupContext,
] = createContext<RovingContext>('RovingFocusGroup')
