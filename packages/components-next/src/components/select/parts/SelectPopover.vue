<script setup lang="ts">
import { Motion } from 'motion-v'

import PopoverAnchor from '@/components/popover/parts/PopoverAnchor.vue'
import PopoverContent from '@/components/popover/parts/PopoverContent.vue'
import PopoverInnerContent from '@/components/popover/parts/PopoverInnerContent.vue'
import PopoverPortal from '@/components/popover/parts/PopoverPortal.vue'
import PopoverRoot from '@/components/popover/parts/PopoverRoot.vue'
import SelectPopoverTrigger from '@/components/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/components/select/select.context'

const {
  hasInlineSearchInput,
  isArrowVisible,
  isDropdownHidden,
  isDropdownVisible,
  popoverAlign,
  popoverCollisionPaddingInPx,
  popoverContainerElement,
  popoverOffsetInPx,
  popoverSide,
  popoverWidth,
  setIsDropdownVisible,
  onDropdownEscapeKeyDown,
  onDropdownInteractOutside,
} = useInjectSelectContext()

function onAutoFocusOnClose(event: Event): void {
  if (hasInlineSearchInput.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <PopoverRoot
    :is-open="isDropdownVisible && !isDropdownHidden"
    :is-arrow-hidden="!isArrowVisible"
    :align="popoverAlign"
    :popover-align="popoverAlign"
    :popover-collision-padding-in-px="popoverCollisionPaddingInPx"
    :popover-container-element="popoverContainerElement"
    :popover-offset-in-px="popoverOffsetInPx"
    :popover-side="popoverSide"
    :popover-width="popoverWidth"
    @update:is-open="setIsDropdownVisible"
    @escape-key-down="onDropdownEscapeKeyDown"
    @interact-outside="onDropdownInteractOutside"
    @auto-focus-on-close="onAutoFocusOnClose"
  >
    <PopoverAnchor>
      <SelectPopoverTrigger />
    </PopoverAnchor>

    <slot name="trigger" />

    <PopoverPortal>
      <PopoverContent>
        <Motion
          :initial="{
            opacity: 0,
            scale: 0.95,
          }"
          :animate="{
            opacity: 1,
            scale: 1,
          }"
          :exit="{
            opacity: 0,
            scale: 0.95,
          }"
          :transition="{
            duration: 0.4,
            type: 'spring',
            bounce: 0.2,
          }"
          class="data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left"
        >
          <PopoverInnerContent>
            <slot name="content" />
          </PopoverInnerContent>
        </Motion>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
