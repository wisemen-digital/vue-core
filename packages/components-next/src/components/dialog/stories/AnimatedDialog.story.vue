<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import Button from '@/components/button/default-button/Button.vue'
import ButtonIconLeft from '@/components/button/default-button/parts/ButtonIconLeft.vue'
import { useDialog } from '@/components/dialog/dialog.composable'

const dialog = useDialog({ component: () => import('@/components/dialog/stories/AnimatedDialog.vue') })
</script>

<template>
  <Story title="Dialog/Animated">
    <AnimatePresence>
      <Motion
        v-if="!dialog.isOpen()"
        v-bind="dialog.getTriggerProps()"
        :transition="{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }"
        layout-id="dialog-content"
      >
        <Button
          icon-left="search"
          @click="dialog.open"
        >
          <template #icon-left>
            <ButtonIconLeft />
          </template>

          <Motion
            :transition="{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }"
            layout-id="dialog-title"
          >
            Open dialog
          </Motion>
        </Button>
      </Motion>
    </AnimatePresence>
  </Story>
</template>
