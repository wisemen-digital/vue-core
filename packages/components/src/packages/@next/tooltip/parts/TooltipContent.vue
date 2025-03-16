<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import {
  TooltipContent as RekaTooltipContent,
} from 'reka-ui'

import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { useInjectTooltipContext } from '@/packages/@next/tooltip/tooltip.context'

const {
  id,
  testId,
  isOpen,
  popoverAlign,
  popoverCollisionPaddingInPx,
  popoverContainerElement,
  popoverOffsetInPx,
  popoverSide,
  popoverWidth,
} = useInjectTooltipContext()
</script>

<template>
  <AnimatePresence :unwrap-element="true">
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
        :align-offset="popoverOffsetInPx"
        :collision-padding="popoverCollisionPaddingInPx"
        :collision-boundary="popoverContainerElement"
        :side="popoverSide"
        :side-offset="popoverOffsetInPx"
        class="data-[content-width=anchor-width]:w-(--reka-tooltip-trigger-width) data-[content-width=available-width]:w-(--reka-tooltip-content-available-width)"
        sticky="always"
      >
        <slot />
      </RekaTooltipContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
