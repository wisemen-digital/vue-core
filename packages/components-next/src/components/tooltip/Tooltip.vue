<script setup lang="ts">
import TooltipArrow from '@/components/tooltip/parts/TooltipArrow.vue'
import TooltipContent from '@/components/tooltip/parts/TooltipContent.vue'
import TooltipContentTransition from '@/components/tooltip/parts/TooltipContentTransition.vue'
import TooltipInnerContent from '@/components/tooltip/parts/TooltipInnerContent.vue'
import TooltipPortal from '@/components/tooltip/parts/TooltipPortal.vue'
import TooltipRoot from '@/components/tooltip/parts/TooltipRoot.vue'
import TooltipTrigger from '@/components/tooltip/parts/TooltipTrigger.vue'
import type { TooltipProps } from '@/components/tooltip/tooltip.props'

const props = defineProps<TooltipProps>()

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
  <TooltipRoot
    v-bind="props"
    v-model="isOpen"
    @escape-key-down="emit('escapeKeyDown', $event)"
    @focus-outside="emit('focusOutside', $event)"
    @interact-outside="emit('interactOutside', $event)"
    @auto-focus-on-close="emit('autoFocusOnClose', $event)"
  >
    <TooltipTrigger>
      <slot name="trigger" />
    </TooltipTrigger>

    <TooltipPortal>
      <TooltipContent>
        <TooltipContentTransition>
          <TooltipInnerContent>
            <slot name="content" />
          </TooltipInnerContent>

          <TooltipArrow />
        </TooltipContentTransition>
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
