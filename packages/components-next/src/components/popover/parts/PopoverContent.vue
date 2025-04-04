<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import { PopoverContent as RekaPopoverContent } from 'reka-ui'

import { useInjectPopoverContext } from '@/components/popover/popover.context'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isOpen,
  classConfig,
  customClassConfig,
  popoverAlign,
  popoverAlignOffset,
  popoverCollisionPadding,
  popoverContainerElement,
  popoverSide,
  popoverSideOffset,
  popoverWidth,
  style,
  onAutoFocusOnClose,
  onContentEscapeKeyDown,
  onContentFocusOutside,
  onContentInteractOutside,
} = useInjectPopoverContext()
</script>

<template>
  <AnimatePresence>
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
        :collision-padding="popoverCollisionPadding"
        :collision-boundary="popoverContainerElement"
        :align-offset="popoverAlignOffset"
        :side="popoverSide"
        :side-offset="popoverSideOffset"
        :class="style.content({
          class: mergeClasses(customClassConfig.content, classConfig?.content),
        })"
        sticky="always"
        @escape-key-down="onContentEscapeKeyDown"
        @focus-outside="onContentFocusOutside"
        @interact-outside="onContentInteractOutside"
        @close-auto-focus="onAutoFocusOnClose"
      >
        <slot />
      </RekaPopoverContent>
    </PrimitiveElement>
  </AnimatePresence>
</template>
