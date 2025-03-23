<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { Motion } from 'motion-v'
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  layout?: 'both' | 'height' | 'width'
}>(), {
  layout: 'both',
})

const contentRef = ref<HTMLDivElement | null>(null)
const { height, width } = useElementSize(contentRef)
</script>

<template>
  <Motion
    :animate="{
      width: props.layout === 'width' || props.layout === 'both' ? width : undefined,
      height: props.layout === 'height' || props.layout === 'both' ? height : undefined,
    }"
    :class="{
      'w-full': props.layout === 'height',
      'h-full': props.layout === 'width',
    }"
    class="overflow-hidden flex items-center justify-center"
  >
    <div
      ref="contentRef"
      class="w-fit h-fit"
    >
      <slot />
    </div>
  </Motion>
</template>
