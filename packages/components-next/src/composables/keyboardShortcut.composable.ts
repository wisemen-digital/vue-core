import {
  getCurrentInstance,
  onBeforeUnmount,
} from 'vue'

import type {
  KeyboardKey,
  KeyboardShortcut,
} from '@/types/keyboard.type'

interface UseKeyboardShortcutOptions extends KeyboardShortcut {
  onTrigger: (event: KeyboardEvent) => void
}

interface UseKeyboardShortcutReturnType {
  unbind: () => void
}

const PREVIOUSLY_PRESSED_KEYS_LIFETIME = 1000

const keyMap = new Map<string, KeyboardKey>([
  [
    'Control',
    'ctrl',
  ],
])

export function useKeyboardShortcut(
  options: UseKeyboardShortcutOptions,
): UseKeyboardShortcutReturnType {
  const currentInstance = getCurrentInstance()

  const previouslyPressedKeys: KeyboardKey[] = []

  const {
    isDisabled,
    element = document,
    keys,
    onTrigger,
  } = options

  const shortcutMode = keys.some(isModifierKey)
    ? 'combination'
    : 'sequence'

  function isModifierKey(key: KeyboardKey): boolean {
    return key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta'
  }

  function getPressedKeys(e: KeyboardEvent): KeyboardKey[] {
    const pressedKeys: KeyboardKey[] = []

    if (e.shiftKey && e.key !== 'Shift') {
      pressedKeys.push('shift')
    }

    if (e.ctrlKey && e.key !== 'Control') {
      pressedKeys.push('ctrl')
    }

    if (e.altKey && e.key !== 'Alt') {
      pressedKeys.push('alt')
    }

    if (e.metaKey && e.key !== 'Meta') {
      pressedKeys.push('meta')
    }

    const key = keyMap.get(e.key) ?? e.key.toLowerCase()

    pressedKeys.push(key as KeyboardKey)

    return pressedKeys
  }

  function isInputFocused(): boolean {
    return document.activeElement instanceof HTMLInputElement
      || document.activeElement instanceof HTMLTextAreaElement
      || document.activeElement?.attributes.getNamedItem('contenteditable')?.value !== undefined
  }

  function isShortcutActive(pressedKeys: KeyboardKey[]): boolean {
    if (shortcutMode === 'combination') {
      return pressedKeys.every((key) => keys.includes(key)) && pressedKeys.length === keys.length
    }

    if (shortcutMode === 'sequence') {
      const allKeys = [
        ...previouslyPressedKeys,
        ...pressedKeys,
      ]

      const modifierIsPressed = pressedKeys.some(
        (key) => key === 'ctrl' || key === 'shift' || key === 'alt' || key === 'meta',
      )

      if (modifierIsPressed) {
        return false
      }

      const sequenceKeys = allKeys.slice(-keys.length)

      return sequenceKeys.every((key, index) => key === keys[index])
        && sequenceKeys.length === keys.length
    }

    return false
  }

  function handleKeyDown(event: Event): void {
    if (isDisabled?.value === true) {
      return
    }

    if (shortcutMode === 'sequence' && isInputFocused()) {
      return
    }

    const keyboardEvent = event as KeyboardEvent

    const pressedKeys = getPressedKeys(keyboardEvent)
    const isActive = isShortcutActive(pressedKeys)

    if (isActive) {
      onTrigger(keyboardEvent)
    }

    pressedKeys.forEach((key) => {
      previouslyPressedKeys.push(key)
    })

    setTimeout(() => {
      previouslyPressedKeys.splice(0, pressedKeys.length)
    }, PREVIOUSLY_PRESSED_KEYS_LIFETIME)
  }

  function unbind(): void {
    element.removeEventListener('keydown', handleKeyDown)
  }

  element.addEventListener('keydown', handleKeyDown)

  if (currentInstance !== null) {
    onBeforeUnmount(() => {
      unbind()
    })
  }

  return {
    unbind,
  }
}
