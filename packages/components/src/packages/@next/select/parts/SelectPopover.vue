<script setup lang="ts">
import PopoverAnchor from '@/packages/@next/popover/parts/PopoverAnchor.vue'
import Popover from '@/packages/@next/popover/Popover.vue'
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
  <Popover
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
      <div class="absolute inset-0 pointer-events-none" />
    </PopoverAnchor>

    <slot name="trigger" />

    <template #content>
      <slot name="content" />
    </template>
  </Popover>
</template>
