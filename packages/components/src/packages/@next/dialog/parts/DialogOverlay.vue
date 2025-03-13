<script setup lang="ts">
import { DialogOverlay as RekaDialogOverlay } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectDialogContext } from '@/packages/@next/dialog/dialog.context'

const props = withDefaults(defineProps<{
  asChild?: boolean
}>(), {
  asChild: false,
})

const {
  isOpen,
  classConfig,
  customClassConfig,
  hideOverlay,
  style,
} = useInjectDialogContext()
</script>

<template>
  <RekaDialogOverlay
    v-if="isOpen && !hideOverlay"
    :as-child="props.asChild"
    :force-mount="true"
    :class="style.overlay({
      class: mergeClasses(customClassConfig.overlay, classConfig?.overlay),
    })"
  >
    <slot />
  </RekaDialogOverlay>
</template>
