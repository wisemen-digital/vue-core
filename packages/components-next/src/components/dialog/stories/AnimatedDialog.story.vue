<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import Button from '@/components/button/default-button/Button.vue'
import { useDialog } from '@/components/dialog/dialog.composable'
import DialogContainer from '@/components/dialog/DialogContainer.vue'

const dialog = useDialog({
  component: () => import('@/components/dialog/stories/AnimatedDialog.vue'),
})
</script>

<template>
  <Story title="Animated Dialog">
    <AnimatePresence>
      <Motion
        v-if="!dialog.isOpen()"
        v-bind="dialog.getTriggerProps()"
        :transition="{
          type: 'spring',
          bounce: 0.2,
          duration: 0.4,
        }"
        layout-id="dialog-content"
      >
        <Button
          label="Open dialog"
          @click="dialog.open"
        />
      </Motion>
    </AnimatePresence>

    <DialogContainer />
  </Story>
</template>
