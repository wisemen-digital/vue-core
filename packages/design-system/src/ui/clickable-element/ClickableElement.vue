<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { twMerge } from 'tailwind-merge'

const props = withDefaults(defineProps<{
  isDefaultCursor?: boolean
  class?: string
}>(), {
  isDefaultCursor: false,
  class: '',
})
</script>

<template>
  <Primitive
    :as-child="true"
    :class="twMerge(
      `
        rounded-sm outline-2 outline-transparent
        focus-visible:outline-fg-brand-primary
        disabled:cursor-not-allowed
      `,
      !props.isDefaultCursor && 'cursor-pointer',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
