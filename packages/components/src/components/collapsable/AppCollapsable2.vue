<script setup lang="ts">
import { useMounted } from '@vueuse/core'
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  durationInMs?: number
}>(), {
  durationInMs: 250,
})

const containerRef = ref<HTMLElement | null>(null)

// TODO: find out why this is required. When we remove the mounted check
// an error occurs because containerRef is null
const isMounted = useMounted()

function getContainerRef(): HTMLElement {
  const containerEl = containerRef.value

  if (containerEl === null) {
    throw new Error('Container ref is null')
  }

  return containerEl
}

function onBeforeLeave(el: Element): void {
  const element = el as HTMLElement

  getContainerRef().style.height = `${element.clientHeight}px`
}

function onEnter(el: Element): void {
  const element = el as HTMLElement

  getContainerRef().style.height = `${element.clientHeight}px`
}

function onAfterEnter(): void {
  getContainerRef().style.height = ''
}
</script>

<template>
  <div
    id="container"
    ref="containerRef"
    class="overflow-hidden duration-500"
  >
    <Transition
      v-if="isMounted"
      id="transition"
      :style="{
        transitionDuration: `${props.durationInMs}ms`,
      }"
      leave-active-class="absolute w-full h-full"
      enter-from-class="opacity-0 scale-[0.98]"
      enter-active-class="z-10 delay-[150ms]"
      leave-to-class="opacity-0 scale-[0.98]"
      @before-leave="onBeforeLeave"
      @enter="onEnter"
      @after-enter="onAfterEnter"
    >
      <slot />
    </Transition>
  </div>
</template>

<style scoped>
#container {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
