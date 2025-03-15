<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { DialogContent as RekaDialogContent } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectDialogContext } from '@/packages/@next/dialog/dialog.context'

defineSlots<{
  /**
   * Slot for the main content of the dialog.
   */
  default: () => void
}>()

const {
  isOpen,
  classConfig,
  customClassConfig,
  hideOverlay,
  preventClickOutside,
  preventEsc,
  style,
} = useInjectDialogContext()

function onEscapeKeyDown(event: KeyboardEvent): void {
  if (preventEsc.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <AnimatePresence>
    <RekaDialogContent
      v-if="isOpen"
      :as-child="true"
      :force-mount="true"
      :class="style.content({
        class: mergeClasses(customClassConfig.content, classConfig?.content),
      })"
      :trap-focus="!hideOverlay"
      :disable-outside-pointer-events="preventClickOutside"
      @escape-key-down="onEscapeKeyDown"
    >
      <slot />
    </RekaDialogContent>
  </AnimatePresence>
</template>
