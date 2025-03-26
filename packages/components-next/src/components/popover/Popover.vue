<script setup lang="ts">
import PopoverAnchor from '@/components/popover/parts/PopoverAnchor.vue'
import PopoverArrow from '@/components/popover/parts/PopoverArrow.vue'
import PopoverContent from '@/components/popover/parts/PopoverContent.vue'
import PopoverContentTransition from '@/components/popover/parts/PopoverContentTransition.vue'
import PopoverInnerContent from '@/components/popover/parts/PopoverInnerContent.vue'
import PopoverPortal from '@/components/popover/parts/PopoverPortal.vue'
import PopoverRoot from '@/components/popover/parts/PopoverRoot.vue'
import PopoverTrigger from '@/components/popover/parts/PopoverTrigger.vue'
import type { PopoverProps } from '@/components/popover/popover.props'

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
