<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { TooltipContent as RekaTooltipContent } from 'reka-ui'

import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useInjectTooltipContext } from '@/components/tooltip/tooltip.context'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isOpen,
  classConfig,
  customClassConfig,
  popoverAlign,
  popoverCollisionPadding,
  popoverContainerElement,
  popoverOffset,
  popoverSide,
  popoverWidth,
  style,
} = useInjectTooltipContext()
</script>

<template>
  <AnimatePresence>
    <PrimitiveElement
      v-if="isOpen"
      :id="id"
      :test-id="testId"
    >
      <RekaTooltipContent
        :force-mount="true"
        :as-child="true"
        :data-content-width="popoverWidth"
        :align="popoverAlign"
        :align-offset="popoverOffset"
        :collision-padding="popoverCollisionPadding"
        :collision-boundary="popoverContainerElement"
        :side="popoverSide"
        :side-offset="popoverOffset"
        :class="style.content({
          class: mergeClasses(customClassConfig?.content, classConfig?.content),
        })"
        sticky="always"
      >
        <slot />
      </RekaTooltipContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
