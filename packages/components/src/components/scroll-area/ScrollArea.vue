<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'reka-ui'
import {
  type Component,
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

  emit('scrollContainerRef', scrollContainerRef.value.$el)
})
</script>

<template>
  <ScrollAreaRoot type="hover">
    <ScrollAreaViewport
      ref="scrollContainerRef"
      :as="props.as"
      :class="[
        props.scrollAreaClass,
        {
          'overscroll-none': !props.isOverscrollEnabled,
        },
      ]"
      class="w-full h-full outline-hidden focus-visible:inset-ring-2 inset-ring-brand-primary-500 duration-200"
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
        class="select-none z-20 touch-none data-[orientation=vertical]:w-1 data-[orientation=horizontal]:h-1"
      >
        <ScrollAreaThumb class="bg-gray-400 rounded-full cursor-pointer" />
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
        class="select-none z-20 touch-none data-[orientation=vertical]:w-1 data-[orientation=horizontal]:h-1"
      >
        <ScrollAreaThumb class="bg-gray-400 rounded-full cursor-pointer !h-full" />
      </ScrollAreaScrollbar>
    </Transition>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
