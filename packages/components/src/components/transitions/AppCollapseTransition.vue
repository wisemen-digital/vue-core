<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * The duration of the transition in seconds.
   */
  duration?: number
}>(), {
  duration: 0.5,
})

const durationString = computed<string>(() => `${props.duration}s`)

function enter(element: Element): void {
  const htmlElement: HTMLElement = element as HTMLElement
  const width = getComputedStyle(htmlElement).width

  htmlElement.style.width = width
  htmlElement.style.position = 'absolute'
  htmlElement.style.visibility = 'hidden'
  htmlElement.style.height = 'auto'

  const height = getComputedStyle(htmlElement).height

  htmlElement.style.width = ''
  htmlElement.style.position = ''
  htmlElement.style.visibility = ''
  htmlElement.style.height = ''

  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = height
  })
}

function afterEnter(element: Element): void {
  const htmlElement: HTMLElement = element as HTMLElement
  htmlElement.style.height = 'auto'
}

function leave(element: Element): void {
  const htmlElement: HTMLElement = element as HTMLElement
  const height = getComputedStyle(htmlElement).height

  htmlElement.style.height = height
  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = '0'
  })
}
</script>

<template>
  <Transition
    name="expand"
    @after-enter="afterEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </Transition>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition:
    height v-bind(durationString) cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity v-bind(durationString);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
