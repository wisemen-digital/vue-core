<script setup lang="ts">
import { DialogContent as RekaDialogContent } from 'reka-ui'

import { useInjectDialogContext } from '@/components/v2/dialog/dialog.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
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
    :class="style.content({
      class: mergeClasses(customClassConfig.content, classConfig?.content),
    })"
    @escape-key-down="onEscapeKeyDown"
  >
    <slot />
  </RekaDialogContent>
</template>
