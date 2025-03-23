<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import {
  PopoverContent as RekaPopoverContent,
} from 'reka-ui'

import { useInjectPopoverContext } from '@/packages/@next/popover/popover.context'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'

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
} = useInjectPopoverContext()
</script>

<template>
  <AnimatePresence :unwrap-element="true">
    <PrimitiveElement
      v-if="isOpen"
      :id="id"
      :test-id="testId"
    >
      <RekaPopoverContent
        :force-mount="true"
        :as-child="true"
        :data-content-width="popoverWidth"
        :align="popoverAlign"
        :align-offset="popoverOffsetInPx"
        :collision-padding="popoverCollisionPaddingInPx"
        :collision-boundary="popoverContainerElement"
        :side="popoverSide"
        :side-offset="popoverOffsetInPx"
        class="data-[content-width=anchor-width]:w-(--reka-popover-trigger-width) data-[content-width=available-width]:w-(--reka-popover-content-available-width)"
        sticky="always"
      >
        <slot />
      </RekaPopoverContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
