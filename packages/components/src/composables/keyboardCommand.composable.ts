import { useEventListener } from '@vueuse/core'
import {
  computed,
  type ComputedRef,
  type Ref,
} from 'vue'

import type { KeyboardCommand, KeyboardKey } from '../types/keyboard.type'

interface BaseKeyboardCommand {
  command: KeyboardCommand
}

interface ControlledKeyboardCommand extends BaseKeyboardCommand {
  isActive: ComputedRef<boolean> | Ref<boolean>
  scope: 'controlled'
}

interface GlobalKeyboardCommand extends BaseKeyboardCommand {
  scope: 'global'
}

type UseKeyboardCommandOptions = ControlledKeyboardCommand | GlobalKeyboardCommand

export function useKeyboardCommand(options: UseKeyboardCommandOptions): void {
  const previouslyPressedKeys: KeyboardKey[] = []
  const PREVIOUSLY_PRESSED_KEYS_LIFETIME = 1000

  const canFireEvent = computed<boolean>(() => {
    if (options.scope === 'global') {
      return true
    }

    return options.isActive.value
  })

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

    const keyMap = new Map<string, KeyboardKey>([
      [
        'Control',
        'ctrl',
      ],
    ])

    const key = keyMap.get(e.key) ?? e.key.toLowerCase()

    pressedKeys.push(key as KeyboardKey)

    return pressedKeys
  }

  function isCommandActive(command: KeyboardCommand, pressedKeys: KeyboardKey[]): boolean {
    if (command.type === 'sequence') {
      const previousKeysAndPressedKeys = [
        ...previouslyPressedKeys,
        ...pressedKeys,
      ]

      return command.keys.every(
        (key, index) => previousKeysAndPressedKeys[index] === key,
      )
    }

    if (command.type === 'combination') {
      return command.keys.every(key => pressedKeys.includes(key))
    }

    return false
  }

  function isInputFocused(): boolean {
    return document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement
  }

  useEventListener('keydown', (e) => {
    if (!canFireEvent.value) {
      return
    }

    const pressedKeys = getPressedKeys(e)

    const isModifierKey = pressedKeys[0] === 'ctrl' || pressedKeys[0] === 'alt' || pressedKeys[0] === 'meta'

    if (!isModifierKey && isInputFocused()) {
      return
    }

    const isActive = isCommandActive(options.command, pressedKeys)

    if (isActive) {
      options.command.onPressed()
    }

    pressedKeys.forEach((key) => {
      previouslyPressedKeys.push(key)
    })

    setTimeout(() => {
      previouslyPressedKeys.splice(0, pressedKeys.length)
    }, PREVIOUSLY_PRESSED_KEYS_LIFETIME)
  })
}
