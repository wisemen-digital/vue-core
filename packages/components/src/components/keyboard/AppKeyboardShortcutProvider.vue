<script setup lang="ts">
import { ref } from 'vue'

import { useKeyboardShortcut } from '@/composables/keyboardShortcut.composable'
import type { KeyboardShortcutConfig } from '@/types/keyboardShortcut.type'
import type { KeyboardKey } from '@/types/keyboard.type'

const props = defineProps<{
  /**
   * The keyboard shortcut configuration
   */
  config: KeyboardShortcutConfig
}>()

defineSlots<{
  /** The keyboard shortcut content */
  default: (props: {
    keys: KeyboardKey[]
  }) => any
}>()

const wrapperRef = ref<HTMLElement | null>(null)

useKeyboardShortcut({
  keys: props.config.keys,
  onTrigger: (event) => {
    const firstElement = wrapperRef.value?.firstElementChild ?? null

    if (props.config.preventDefault ?? false) {
      event.preventDefault()
    }

    if (props.config.stopPropagation ?? false) {
      event.stopPropagation()
    }

    if (firstElement instanceof HTMLElement) {
      firstElement.click()
    }
  },
})
</script>

<template>
  <div ref="wrapperRef">
    <slot :keys="props.config.keys" />
  </div>
</template>
