<script setup lang="ts">
import { Motion } from 'motion-v'

import PopoverAnchor from '@/packages/@next/popover/parts/PopoverAnchor.vue'
import PopoverContent from '@/packages/@next/popover/parts/PopoverContent.vue'
import PopoverInnerContent from '@/packages/@next/popover/parts/PopoverInnerContent.vue'
import PopoverPortal from '@/packages/@next/popover/parts/PopoverPortal.vue'
import PopoverRoot from '@/packages/@next/popover/parts/PopoverRoot.vue'
import SelectPopoverTrigger from '@/packages/@next/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/packages/@next/select/select.context'

const {
  isArrowVisible,
  isDropdownVisible,
  popoverAlign,
  popoverCollisionPaddingInPx,
  popoverContainerElement,
  popoverOffsetInPx,
  popoverSide,
  popoverWidth,
  setIsDropdownVisible,
} = useInjectSelectContext()
</script>

<template>
  <PopoverRoot
    :is-open="isDropdownVisible"
    :is-arrow-hidden="!isArrowVisible"
    :align="popoverAlign"
    :popover-align="popoverAlign"
    :popover-collision-padding-in-px="popoverCollisionPaddingInPx"
    :popover-container-element="popoverContainerElement"
    :popover-offset-in-px="popoverOffsetInPx"
    :popover-side="popoverSide"
    :popover-width="popoverWidth"
    @update:is-open="setIsDropdownVisible"
  >
    <PopoverAnchor>
      <SelectPopoverTrigger>
        <button class="absolute inset-0 outline-none" />
      </SelectPopoverTrigger>
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
