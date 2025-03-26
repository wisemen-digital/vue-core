<script setup lang="ts">
import { PopoverRoot as RekaPopoverRoot } from 'reka-ui'
import { computed } from 'vue'

import { useProvidePopoverContext } from '@/components/popover/popover.context'
import type { PopoverProps } from '@/components/popover/popover.props'
import {
  type CreatePopoverStyle,
  createPopoverStyle,
} from '@/components/popover/style/popover.style'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<PopoverProps>(), {
  id: null,
  testId: null,
  isArrowHidden: false,
  isCloseButtonHidden: false,
  anchorReferenceElement: null,
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

const popoverStyle = computed<CreatePopoverStyle>(() => createPopoverStyle({}))

const customClassConfig = useComponentClassConfig('popover', {})

function onContentEscapeKeyDown(event: KeyboardEvent): void {
  emit('escapeKeyDown', event)
}

function onContentFocusOutside(event: CustomEvent): void {
  emit('focusOutside', event)
}

function onContentInteractOutside(event: CustomEvent): void {
  emit('interactOutside', event)
}

function onAutoFocusOnClose(event: Event): void {
  emit('autoFocusOnClose', event)
}

useProvidePopoverContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: popoverStyle,
  onAutoFocusOnClose,
  onContentEscapeKeyDown,
  onContentFocusOutside,
  onContentInteractOutside,
})
</script>

<template>
  <RekaPopoverRoot v-model:open="isOpen">
    <slot />
  </RekaPopoverRoot>
</template>
