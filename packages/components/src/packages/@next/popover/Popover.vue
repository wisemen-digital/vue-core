<script setup lang="ts">
import PopoverAnchor from '@/packages/@next/popover/parts/PopoverAnchor.vue'
import PopoverArrow from '@/packages/@next/popover/parts/PopoverArrow.vue'
import PopoverContent from '@/packages/@next/popover/parts/PopoverContent.vue'
import PopoverContentTransition from '@/packages/@next/popover/parts/PopoverContentTransition.vue'
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

const emit = defineEmits<{
  autoFocusOnClose: [event: Event]
  escapeKeyDown: [event: KeyboardEvent]
  focusOutside: [event: CustomEvent]
  interactOutside: [event: CustomEvent]
}>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})
</script>

<template>
  <PopoverRoot
    v-bind="props"
    v-model:is-open="isOpen"
    @escape-key-down="emit('escapeKeyDown', $event)"
    @focus-outside="emit('focusOutside', $event)"
    @interact-outside="emit('interactOutside', $event)"
    @auto-focus-on-close="emit('autoFocusOnClose', $event)"
  >
    <slot>
      <PopoverAnchor>
        <PopoverTrigger>
          <slot name="trigger" />
        </PopoverTrigger>
      </PopoverAnchor>
    </slot>

    <PopoverPortal>
      <PopoverContent>
        <PopoverContentTransition>
          <PopoverInnerContent>
            <slot name="content" />
          </PopoverInnerContent>

          <PopoverArrow />
        </PopoverContentTransition>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
