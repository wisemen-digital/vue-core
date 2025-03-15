<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'
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
        <Motion
          :initial="{
            opacity: 0,
            scale: 0,
            filter: 'blur(4px)',
          }"
          :animate="{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }"
          :exit="{
            opacity: 0,
            scale: 0,
            filter: 'blur(4px)',
          }"
          :transition="{
            duration: 0.4,
            type: 'spring',
            bounce: 0.2,
          }"
          class="data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left"
        >
          <slot />
        </Motion>
      </RekaPopoverContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
