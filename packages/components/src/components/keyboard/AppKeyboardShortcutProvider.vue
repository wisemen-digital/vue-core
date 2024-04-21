<script setup lang="ts">
import { ref } from 'vue'

import type { KeyboardShortcutConfig } from '@/types/keyboardShortcut.type'

import { useKeyboardShortcut } from '../../composables/keyboardShortcut.composable'

const props = defineProps<{
  config: KeyboardShortcutConfig
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
