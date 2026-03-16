<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  align?: 'center' | 'end' | 'start'
  as?: string
  gap?: '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl' | '10xl' | '11xl' | 'lg' | 'md' | 'none' | 'sm' | 'xl' | 'xs' | 'xxs'
  justify?: 'between' | 'center' | 'end' | 'start'
}>(), {
  align: 'center',
  as: 'div',
  gap: 'md',
  justify: 'start',
})

const alignClass = computed<string>(() => {
  switch (props.align) {
    case 'center': return 'items-center'
    case 'end': return 'items-end'
    case 'start': return 'items-start'
    default: return 'items-center'
  }
})

const justifyClass = computed<string>(() => {
  switch (props.justify) {
    case 'between': return 'justify-between'
    case 'center': return 'justify-center'
    case 'end': return 'justify-end'
    case 'start': return 'justify-start'
    default: return 'justify-start'
  }
})

const gapClass = computed<string>(() => {
  switch (props.gap) {
    case '2xl': return 'gap-2xl'
    case '3xl': return 'gap-3xl'
    case '4xl': return 'gap-4xl'
    case '5xl': return 'gap-5xl'
    case '6xl': return 'gap-6xl'
    case '7xl': return 'gap-7xl'
    case '8xl': return 'gap-8xl'
    case '9xl': return 'gap-9xl'
    case '10xl': return 'gap-10xl'
    case '11xl': return 'gap-11xl'
    case 'lg': return 'gap-lg'
    case 'md': return 'gap-md'
    case 'none': return 'gap-none'
    case 'sm': return 'gap-sm'
    case 'xl': return 'gap-xl'
    case 'xs': return 'gap-xs'
    case 'xxs': return 'gap-xxs'
    default: return 'gap-none'
  }
})
</script>

<template>
  <Component
    :is="props.as"
    :class="[alignClass, justifyClass, gapClass]"
    class="flex flex-row"
  >
    <slot />
  </Component>
</template>
