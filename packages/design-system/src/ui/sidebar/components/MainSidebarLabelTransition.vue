<script setup lang="ts">
import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const {
  isSidebarOpen, variant,
} = useMainSidebar()
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="transition-opacity duration-150 ease-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    appear-active-class="transition-opacity duration-150 ease-in"
    appear-from-class="opacity-0"
    appear-to-class="opacity-100"
    appear
  >
    <slot v-if="variant !== 'icons-only' || isSidebarOpen" />
  </Transition>
</template>
