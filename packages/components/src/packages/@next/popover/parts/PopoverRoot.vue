<script setup lang="ts">
import { PopoverRoot as RekaPopoverRoot } from 'reka-ui'
import { computed } from 'vue'

import { useComponentClassConfig } from '@/customClassVariants'
import { useProvidePopoverContext } from '@/packages/@next/popover/popover.context'
import type { PopoverProps } from '@/packages/@next/popover/popover.props'
import {
  type CreatePopoverStyle,
  createPopoverStyle,
} from '@/packages/@next/popover/style/popover.style'
import { toComputedRefs } from '@/utils/props.util'

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

const popoverStyle = computed<CreatePopoverStyle>(() => createPopoverStyle({}))

const customClassConfig = useComponentClassConfig('popover', {})

useProvidePopoverContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: popoverStyle,
})
</script>

<template>
  <RekaPopoverRoot v-model:open="isOpen">
    <slot />
  </RekaPopoverRoot>
</template>
