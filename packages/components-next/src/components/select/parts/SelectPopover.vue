<script setup lang="ts">
import PopoverAnchor from '@/components/popover/parts/PopoverAnchor.vue'
import PopoverArrow from '@/components/popover/parts/PopoverArrow.vue'
import PopoverContent from '@/components/popover/parts/PopoverContent.vue'
import PopoverInnerContent from '@/components/popover/parts/PopoverInnerContent.vue'
import PopoverPortal from '@/components/popover/parts/PopoverPortal.vue'
import PopoverRoot from '@/components/popover/parts/PopoverRoot.vue'
import SelectPopoverContentTransition from '@/components/select/parts/SelectPopoverContentTransition.vue'
import SelectPopoverTrigger from '@/components/select/parts/SelectPopoverTrigger.vue'
import { useInjectSelectContext } from '@/components/select/select.context'

const {
  hasInlineSearchInput,
  isDropdownHidden,
  isDropdownVisible,
  isPopoverArrowVisible,
  classConfig,
  popoverAlign,
  popoverAnchorReferenceElement,
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
    :is-popover-arrow-hidden="!isPopoverArrowVisible"
    :popover-align="popoverAlign"
    :popover-collision-padding-in-px="popoverCollisionPaddingInPx"
    :popover-container-element="popoverContainerElement"
    :popover-offset-in-px="popoverOffsetInPx"
    :popover-side="popoverSide"
    :popover-width="popoverWidth"
    :popover-anchor-reference-element="popoverAnchorReferenceElement"
    :class-config="classConfig?.popover"
    @update:is-open="setIsDropdownVisible"
    @escape-key-down="onDropdownEscapeKeyDown"
    @interact-outside="onDropdownInteractOutside"
    @auto-focus-on-close="onAutoFocusOnClose"
  >
    <slot name="anchor">
      <PopoverAnchor>
        <SelectPopoverTrigger />
      </PopoverAnchor>
    </slot>

    <slot name="inline-content" />

    <PopoverPortal>
      <PopoverContent>
        <SelectPopoverContentTransition>
          <PopoverInnerContent>
            <slot name="content" />
          </PopoverInnerContent>

          <PopoverArrow />
        </SelectPopoverContentTransition>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
