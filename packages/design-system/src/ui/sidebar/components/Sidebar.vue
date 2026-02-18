<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
  useReducedMotion,
} from 'motion-v'
import {
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'

import SidebarContent from '@/ui/sidebar/components/SidebarContent.vue'
import SidebarTransition from '@/ui/sidebar/components/SidebarTransition.vue'
import { useSidebar } from '@/ui/sidebar/sidebar.composable'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'icons-only'
}>(), {
  variant: 'default',
})

const {
  isFloatingSidebar,
  isSidebarOpen,
  setVariant,
  sidebarWidth,
} = useSidebar()

const isReduceMotionEnabledOnDevice = useReducedMotion()

setVariant(props.variant)
</script>

<template>
  <DialogRoot
    v-if="isFloatingSidebar"
    v-model:open="isSidebarOpen"
  >
    <AnimatePresence :initial="false">
      <DialogContent
        v-if="isSidebarOpen"
        :as-child="true"
        :force-mount="true"
        @open-auto-focus.prevent
      >
        <SidebarTransition
          class="absolute z-6 h-full w-64 p-md outline-none"
        >
          <div
            class="
              size-full rounded-xl border border-secondary bg-secondary
              shadow-lg/5
            "
          >
            <DialogTitle
              as="h1"
              class="sr-only"
            >
              Sidebar
            </DialogTitle>

            <DialogDescription
              class="sr-only"
              as="p"
            >
              The sidebar contains navigation links and other important actions.
            </DialogDescription>

            <SidebarContent>
              <template #header>
                <slot name="header" />
              </template>
              <template #navigation>
                <slot name="navigation" />
              </template>
              <template #footer>
                <slot name="footer" />
              </template>
            </SidebarContent>
          </div>
        </SidebarTransition>
      </DialogContent>

      <DialogOverlay
        v-if="isSidebarOpen"
        :as-child="true"
      >
        <Motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :exit="{ opacity: 0 }"
          :transition="{
            duration: isReduceMotionEnabledOnDevice ? 0 : 0.3,
          }"
          class="absolute inset-0 z-5 bg-black/10"
        />
      </DialogOverlay>
    </AnimatePresence>
  </DialogRoot>
  <AnimatePresence
    v-else
    :initial="false"
  >
    <SidebarTransition
      v-if="isSidebarOpen"
      :style="{
        width: sidebarWidth,
      }"
      class="absolute h-full"
    >
      <SidebarContent>
        <template #header>
          <slot name="header" />
        </template>
        <template #navigation>
          <slot name="navigation" />
        </template>
        <template #footer>
          <slot name="footer" />
        </template>
      </SidebarContent>
    </SidebarTransition>
  </AnimatePresence>
</template>
