<script setup lang="ts">
import TooltipArrow from '@/packages/@next/tooltip/parts/TooltipArrow.vue'
import TooltipContent from '@/packages/@next/tooltip/parts/TooltipContent.vue'
import TooltipContentTransition from '@/packages/@next/tooltip/parts/TooltipContentTransition.vue'
import TooltipInnerContent from '@/packages/@next/tooltip/parts/TooltipInnerContent.vue'
import TooltipPortal from '@/packages/@next/tooltip/parts/TooltipPortal.vue'
import TooltipRoot from '@/packages/@next/tooltip/parts/TooltipRoot.vue'
import TooltipTrigger from '@/packages/@next/tooltip/parts/TooltipTrigger.vue'
import type { TooltipProps } from '@/packages/@next/tooltip/tooltip.props'

const props = defineProps<TooltipProps>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})
</script>

<template>
  <TooltipRoot
    v-bind="props"
    v-model="isOpen"
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
