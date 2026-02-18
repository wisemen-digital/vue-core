<script setup lang="ts">
import { AnimatePresence } from 'motion-v'

import SidebarTransition from '@/ui/sidebar/components/SidebarTransition.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'icons-only'
}>(), {
  variant: 'default',
})

const {
  isSidebarOpen,
  setVariant,
  sidebarWidth,
} = useSidebar()

setVariant(props.variant)
</script>

<template>
  <AnimatePresence
    :initial="false"
  >
    <SidebarTransition
      v-if="isSidebarOpen"
      :style="{
        width: sidebarWidth,
      }"
      class="absolute h-dvh"
    >
      <div
        class="
          flex h-full flex-col justify-between overflow-hidden text-primary
        "
      >
        <div class="px-lg py-lg">
          <slot name="header" />
        </div>
        <nav
          class="flex h-full flex-col justify-between overflow-y-auto p-md"
        >
          <slot name="navigation" />
        </nav>
        <div
          class="flex flex-col gap-sm px-md py-md"
        >
          <slot name="footer" />
        </div>
      </div>
    </SidebarTransition>
  </AnimatePresence>
</template>
