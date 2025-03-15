<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { DialogOverlay as RekaDialogOverlay } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectDialogContext } from '@/packages/@next/dialog/dialog.context'

const {
  isOpen,
  classConfig,
  customClassConfig,
  hideOverlay,
  style,
} = useInjectDialogContext()
</script>

<template>
  <AnimatePresence>
    <RekaDialogOverlay
      v-if="isOpen && !hideOverlay"
      :as-child="true"
      :force-mount="true"
      :class="style.overlay({
        class: mergeClasses(customClassConfig.overlay, classConfig?.overlay),
      })"
    >
      <slot />
    </RekaDialogOverlay>
  </AnimatePresence>
</template>
