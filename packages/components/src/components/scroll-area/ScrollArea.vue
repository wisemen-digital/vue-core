<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'reka-ui'
import type { Component } from 'vue'
import {
  onMounted,
  ref,
} from 'vue'

const props = withDefaults(defineProps<{
  /**
   * Whether the scroll area should be overscrolled
   * @default false
   */
  isOverscrollEnabled?: boolean
  /**
   * The component to render the scroll area as
   * @default 'div'
   */
  as?: string | Component
  /**
   * The class to apply to the scroll area
   * @default null
   */
  scrollAreaClass?: string | null
}>(), {
  isOverscrollEnabled: false,
  as: 'div',
  scrollAreaClass: null,
})

const emit = defineEmits<{
  scroll: [event: Event]
  scrollContainerRef: [element: HTMLElement]
}>()

const scrollContainerRef = ref<InstanceType<typeof ScrollAreaViewport> | null>(null)

onMounted(() => {
  if (scrollContainerRef.value === null) {
    throw new Error('[ScrollArea] No scroll container ref found')
  }

  emit('scrollContainerRef', scrollContainerRef.value.$el.firstChild.nextElementSibling)
})
</script>

<template>
  <ScrollAreaRoot
    ref="scrollContainerRef"
    type="hover"
  >
    <ScrollAreaViewport
      :as="props.as"
      :class="[
        props.scrollAreaClass,
        {
          'overscroll-none': !props.isOverscrollEnabled,
        },
      ]"
      class="
        inset-ring-brand-primary-500 h-full w-full outline-hidden duration-200
        focus-visible:inset-ring-2
      "
      @scroll="emit('scroll', $event)"
    >
      <slot />
    </ScrollAreaViewport>

    <Transition
      enter-active-class="duration-300"
      enter-from-class="opacity-0"
      leave-active-class="duration-300"
      leave-to-class="opacity-0"
    >
      <ScrollAreaScrollbar
        orientation="vertical"
        class="
          z-20 touch-none select-none
          data-[orientation=horizontal]:h-1
          data-[orientation=vertical]:w-1
        "
      >
        <ScrollAreaThumb class="cursor-pointer rounded-full bg-gray-400" />
      </ScrollAreaScrollbar>
    </Transition>

    <Transition
      enter-active-class="duration-300"
      enter-from-class="opacity-0"
      leave-active-class="duration-300"
      leave-to-class="opacity-0"
    >
      <ScrollAreaScrollbar
        orientation="horizontal"
        class="
          z-20 touch-none select-none
          data-[orientation=horizontal]:h-1
          data-[orientation=vertical]:w-1
        "
      >
        <ScrollAreaThumb class="!h-full cursor-pointer rounded-full bg-gray-400" />
      </ScrollAreaScrollbar>
    </Transition>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
