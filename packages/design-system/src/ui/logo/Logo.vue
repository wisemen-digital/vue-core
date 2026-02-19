<script setup lang="ts">
const props = defineProps<{
  alt: string
  size: '3xs' | 'sm' | 'xs' | 'xxs'
  src: string
}>()
</script>

<template>
  <img
    :src="props.src"
    :alt="props.alt"
    :class="{
      'size-8 rounded-lg': props.size === 'sm',
      'size-6 rounded-md': props.size === 'xs',
      'size-5 rounded-sm': props.size === 'xxs',
      'size-3.5 rounded-xs': props.size === '3xs',
    }"
    class="
      shrink-0 overflow-hidden from-black/20 to-white/10 object-contain
      dark:bg-primary-solid dark:bg-linear-to-b
    "
  >
</template>
