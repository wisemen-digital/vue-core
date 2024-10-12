<script setup lang="ts">
import { DialogContent } from 'reka-ui'
import { computed } from 'vue'

import { dialogStyle } from '@/components/dialog/dialog.style.js'

const props = defineProps<{
  shouldPreventClickOutside: boolean
}>()

const style = dialogStyle()
const contentClasses = computed<string>(() => style.content())

function onInteractOutside(e: CustomEvent): void {
  if (props.shouldPreventClickOutside) {
    e.preventDefault()

    return
  }

  const target = e.target as HTMLElement
  const isOverlay = target.classList.contains('custom-dialog-overlay')

  if (!isOverlay) {
    e.preventDefault()
  }
}

function onOpenAutoFocus(e: Event): void {
  e.preventDefault()
}
</script>

<template>
  <DialogContent
    :force-mount="true"
    :class="contentClasses"
    :disable-outside-pointer-events="false"
    @interact-outside="onInteractOutside"
    @open-auto-focus="onOpenAutoFocus"
  >
    <div>
      <slot />
    </div>
  </DialogContent>
</template>
