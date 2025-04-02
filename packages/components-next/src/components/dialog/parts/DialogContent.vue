<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { useAttrs } from 'vue'

import { useInjectDialogContext } from '@/components/dialog/dialog.context'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { mergeClasses } from '@/customClassVariants'

defineOptions({ inheritAttrs: false })

defineSlots<{
  /**
   * Slot for the main content of the dialog.
   */
  default: () => void
}>()

const {
  id,
  testId,
  isOpen,
  classConfig,
  customClassConfig,
  hideOverlay,
  preventClickOutside,
  preventEsc,
  style,
} = useInjectDialogContext()

const attrs = useAttrs()

function onEscapeKeyDown(event: KeyboardEvent): void {
  if (preventEsc.value) {
    event.preventDefault()
  }
}

function onInteractOutside(event: CustomEvent): void {
  if (preventClickOutside.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <AnimatePresence>
    <PrimitiveElement
      v-if="isOpen"
      :id="id"
      :test-id="testId"
    >
      <RekaDialogContent
        :as-child="true"
        :force-mount="true"
        :class="style.content({
          class: mergeClasses(customClassConfig.content, classConfig?.content),
        })"
        :trap-focus="!hideOverlay"
        v-bind="attrs"
        @escape-key-down="onEscapeKeyDown"
        @interact-outside="onInteractOutside"
      >
        <slot />
      </RekaDialogContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
