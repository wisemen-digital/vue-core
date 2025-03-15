<script setup lang="ts">
import PopoverAnchor from '@/packages/@next/popover/parts/PopoverAnchor.vue'
import PopoverArrow from '@/packages/@next/popover/parts/PopoverArrow.vue'
import PopoverCloseButton from '@/packages/@next/popover/parts/PopoverCloseButton.vue'
import PopoverContent from '@/packages/@next/popover/parts/PopoverContent.vue'
import PopoverInnerContent from '@/packages/@next/popover/parts/PopoverInnerContent.vue'
import PopoverPortal from '@/packages/@next/popover/parts/PopoverPortal.vue'
import PopoverRoot from '@/packages/@next/popover/parts/PopoverRoot.vue'
import PopoverTrigger from '@/packages/@next/popover/parts/PopoverTrigger.vue'
import type { PopoverProps } from '@/packages/@next/popover/popover.props'

const props = withDefaults(defineProps<PopoverProps>(), {
  id: null,
  testId: null,
  isArrowHidden: false,
  isCloseButtonHidden: false,
  classConfig: null,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 10,
  popoverSide: 'bottom',
  popoverWidth: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})
</script>

<template>
  <PopoverRoot
    v-bind="props"
    v-model="isOpen"
  >
    <PopoverAnchor>
      <PopoverTrigger>
        <slot name="trigger" />
      </PopoverTrigger>
    </PopoverAnchor>

    <PopoverPortal>
      <PopoverContent>
        <PopoverInnerContent>
          <slot name="content" />
          <PopoverCloseButton />
        </PopoverInnerContent>

        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
