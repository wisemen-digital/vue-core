<script setup lang="ts">
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'reka-ui'
</script>

<template>
  <ScrollAreaRoot>
    <ScrollAreaViewport class="w-full h-full outline-hidden focus-visible:inset-ring-2 inset-ring-brand-primary-500 duration-200">
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
        class="select-none touch-none data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:h-1.5"
      >
        <ScrollAreaThumb class="bg-gray-500 rounded-full cursor-pointer" />
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
        class="select-none touch-none data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:h-1.5"
      >
        <ScrollAreaThumb class="bg-gray-500 rounded-full cursor-pointer !h-full" />
      </ScrollAreaScrollbar>
    </Transition>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
