<script setup lang="ts">
import { DialogContent as RekaDialogContent } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectDialogContext } from '@/packages/@next/dialog/dialog.context'

const props = withDefaults(defineProps<{
  asChild?: boolean
}>(), {
  asChild: false,
})

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
  <RekaDialogContent
    v-if="isOpen"
    :as-child="props.asChild"
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
</template>
