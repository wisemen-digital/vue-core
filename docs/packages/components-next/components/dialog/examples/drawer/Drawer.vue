<script setup lang="ts">
import {
  VcDialogContent,
  VcDialogDescription,
  VcDialogOverlay,
  VcDialogOverlayTransition,
  VcDialogRoot,
  VcDialogTitle,
} from '@wisemen/vue-core-components'

import DrawerTransition from './DrawerTransition.vue'

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <VcDialogRoot
    :class-config="{
      content: 'top-2 right-2 left-auto translate-x-0 translate-y-0 w-100 h-[calc(100vh-1rem)]',
    }"
    @close="emit('close')"
  >
    <VcDialogContent>
      <DrawerTransition>
        <div class="p-3xl">
          <VcDialogTitle>
            <h1 class="text-primary text-2xl font-semibold">
              Example drawer
            </h1>
          </VcDialogTitle>

          <VcDialogDescription>
            <p class="text-secondary mt-lg">
              This is an example drawer.
            </p>
          </VcDialogDescription>
        </div>
      </DrawerTransition>
    </VcDialogContent>

    <VcDialogOverlay>
      <VcDialogOverlayTransition />
    </VcDialogOverlay>
  </VcDialogRoot>
</template>
