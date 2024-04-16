<script setup lang="ts">
import { computed } from 'vue'

import type { KeyboardKey } from '../../types/keyboard.type'

const props = withDefaults(defineProps<{
  hasBorder?: boolean
  keyboardKey: KeyboardKey
}>(), {
  hasBorder: false,
})

const keyMap = new Map<KeyboardKey, string>([
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
  ],
  [
    'shift',
    '⇧',
  ],
])

const keyboardKey = computed<string>(() => keyMap.get(props.keyboardKey) ?? props.keyboardKey)
</script>

<template>
  <kbd
    :class="{
      'border border-solid border-border shadow-keyboard-key-shadow': props.hasBorder,
    }"
    class="flex h-[1.1rem] min-w-[1.1rem] items-center justify-center rounded bg-muted-background p-1 text-center text-[11px] capitalize text-secondary-foreground"
  >
    {{ keyboardKey }}
  </kbd>
</template>
