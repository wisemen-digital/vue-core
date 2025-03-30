import type {
  KeyboardKey,
} from '@/types/keyboard.type'

export interface KeyboardShortcutProviderProps {
  isDisabled?: boolean
  keys: KeyboardKey[]
  preventDefault?: boolean
  stopPropagation?: boolean
}
