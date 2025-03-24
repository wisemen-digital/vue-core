<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { Motion } from 'motion-v'
import { onMounted, ref } from 'vue'

const contentRef = ref<HTMLDivElement | null>(null)
const isAnimationEnabled = ref<boolean>(false)
const { height, width } = useElementSize(contentRef)

onMounted(() => {
  isAnimationEnabled.value = true
})
</script>

<template>
  <Motion
    :animate="{
      width,
      height,
    }"
    :transition="isAnimationEnabled ? undefined : { duration: 0 }"
    class="flex items-center justify-center"
  >
    <div
      ref="contentRef"
      class="w-fit h-fit"
    >
      <slot />
    </div>
  </Motion>
</template>
