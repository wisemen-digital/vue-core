<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import DialogContent from '@/components/@next/dialog/parts/DialogContent.vue'
import DialogRoot from '@/components/@next/dialog/parts/DialogRoot.vue'

const emit = defineEmits<{
  closeDialog: []
}>()
</script>

<template>
  <DialogRoot>
    <AnimatePresence>
      <DialogContent :as-child="true">
        <Motion
          :transition="{
            duration: 0.4,
            type: 'spring',
            bounce: 0.2,
          }"
          layout-id="test"
        >
          <div class="w-80 h-40 p-xl">
            <Motion
              :transition="{
                duration: 0.4,
                type: 'spring',
                bounce: 0.2,
              }"
              layout-id="title"
              class="inline-block"
            >
              <h1 class="text-2xl font-bold">
                Hello world
              </h1>
            </Motion>
          </div>
        </Motion>
      </DialogContent>
    </AnimatePresence>
  </DialogRoot>
</template>
