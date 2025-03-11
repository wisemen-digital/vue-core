<script setup lang="ts">
import { DialogContent as RekaDialogContent } from 'reka-ui'
import { computed } from 'vue'

import { useInjectDialogContext } from '@/components/v2/dialog/dialog.context'
import { mergeClasses } from '@/customClassVariants'

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
  mode,
  preventEsc,
  style,
  onUnmounted,
} = useInjectDialogContext()

const shouldTrapFocus = computed<boolean>(() => mode.value === 'overlay')

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
    :trap-focus="shouldTrapFocus"
    @escape-key-down="onEscapeKeyDown"
    @vue:unmounted="onUnmounted"
  >
    <slot />
  </RekaDialogContent>
</template>
