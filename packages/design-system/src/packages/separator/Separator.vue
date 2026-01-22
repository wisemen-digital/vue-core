<script setup lang="ts">
import { Separator } from 'reka-ui'
import { twMerge } from 'tailwind-merge'

const props = withDefaults(defineProps<{
  class?: string
  /**
   * The orientation of the separator.
   */
  orientation?: 'horizontal' | 'vertical'
}>(), {
  orientation: 'horizontal',
})
</script>

<template>
  <Separator
    :class="twMerge(
      'bg-tertiary',
      props.orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
      props.class,
    )"
    :orientation="props.orientation"
    role="presentation"
  />
</template>
