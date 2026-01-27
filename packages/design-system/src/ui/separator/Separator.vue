<script setup lang="ts">
import { Separator } from 'reka-ui'
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'

import type { SeperatorStyle } from '@/ui/separator/seperator.style'
import { createSeperatorStyle } from '@/ui/separator/seperator.style'

const props = withDefaults(defineProps<{
  class?: string
  /**
   * The orientation of the separator.
   */
  orientation?: 'horizontal' | 'vertical'
}>(), {
  orientation: 'horizontal',
})

const seperatorStyle = computed<SeperatorStyle>(() => createSeperatorStyle({
  orientation: props.orientation,
}))
</script>

<template>
  <Separator
    :class="twMerge(
      seperatorStyle.separator(),
      props.class,
    )"
    :orientation="props.orientation"
    role="presentation"
  />
</template>
