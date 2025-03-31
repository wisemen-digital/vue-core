<script setup lang="ts">
import { computed } from 'vue'

import type { KeyboardKeyProps } from '@/components/keyboard-key/keyboardKey.props'
import {
  type CreatekeyboardKeyStyle,
  createkeyboardKeyStyle,
} from '@/components/keyboard-key/keyboardKey.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import type { KeyboardKey } from '@/types/keyboard.type'

const props = withDefaults(defineProps<KeyboardKeyProps>(), {
  classConfig: null,
  variant: null,
})

const isWindows = computed<boolean>(() => (
  /windows/i.test(navigator.userAgent)
))

const macKeyMap = new Map<KeyboardKey, string>([
  [
    'alt',
    '⌥',
  ],
  [
    'arrowdown',
    '↓',
  ],
  [
    'arrowleft',
    '←',
  ],
  [
    'arrowright',
    '→',
  ],
  [
    'arrowup',
    '↑',
  ],
  [
    'backspace',
    '⌫',
  ],
  [
    'ctrl',
    '⌃',
  ],
  [
    'enter',
    '↵',
  ],
  [
    'escape',
    'ESC',
  ],
  [
    'meta',
    '⌘',
  ], // Command key on Mac
  [
    'shift',
    '⇧',
  ],
])

const windowsKeyMap = new Map<KeyboardKey, string>([
  [
    'alt',
    'Alt',
  ],
  [
    'arrowdown',
    '↓',
  ],
  [
    'arrowleft',
    '←',
  ],
  [
    'arrowright',
    '→',
  ],
  [
    'arrowup',
    '↑',
  ],
  [
    'backspace',
    'Backspace',
  ],
  [
    'ctrl',
    'Ctrl',
  ],
  [
    'enter',
    'Enter',
  ],
  [
    'escape',
    'Esc',
  ],
  [
    'meta',
    'Win',
  ], // Windows key
  [
    'shift',
    'Shift',
  ],
])

const keyboardKeyStyle = computed<CreatekeyboardKeyStyle>(() => createkeyboardKeyStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = useComponentClassConfig('keyboardKey', {
  variant: props.variant ?? undefined,
})

const keyboardKey = computed<string>(() => {
  const map = isWindows.value ? windowsKeyMap : macKeyMap

  return map.get(props.keyboardKey) ?? props.keyboardKey
})
</script>

<template>
  <kbd
    :class="keyboardKeyStyle.key({
      class: mergeClasses(customClassConfig.key, props.classConfig?.key),
    })"
  >
    {{ keyboardKey }}
  </kbd>
</template>
