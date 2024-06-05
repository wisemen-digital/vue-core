import type { Ref } from 'vue'

import type { KeyboardKey } from '@/types/keyboard.type'

export interface KeyboardShortcut {
  /**
   * Whether the keyboard shortcut is disabled
   * @default false
   */
  isDisabled?: Ref<boolean>
  /**
   * The element to bind the keyboard shortcut to
   * @default document
   */
  element?: HTMLElement
  /**
   * The keys to trigger the shortcut
   * @example ['ctrl', 'shift', 'a'] will trigger on ctrl + shift + a in combination mode
   * @example ['a', 'b', 'c'] will trigger in sequence mode
   */
  keys: KeyboardKey[]
}

export interface KeyboardShortcutConfig {
  isDisabled?: Ref<boolean>
  keys: KeyboardKey[]
  preventDefault?: boolean
  stopPropagation?: boolean
}
