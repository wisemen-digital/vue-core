<script setup lang="ts">
import { DialogOverlay as RekaDialogOverlay } from 'reka-ui'

import { useInjectDialogContext } from '@/components/v2/dialog/dialog.context'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<{
  asChild?: boolean
}>(), {
  asChild: false,
})

const {
  isOpen,
  classConfig,
  customClassConfig,
  mode,
  style,
} = useInjectDialogContext()
</script>

<template>
  <RekaDialogOverlay
    v-if="mode === 'overlay' && isOpen"
    :as-child="props.asChild"
    :force-mount="true"
    :class="style.overlay({
      class: mergeClasses(customClassConfig.overlay, classConfig?.overlay),
    })"
  >
    <slot />
  </RekaDialogOverlay>
</template>
