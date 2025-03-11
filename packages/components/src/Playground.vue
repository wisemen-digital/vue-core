<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import Button from '@/components/@next/button/Button.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { useDialog } from '@/components/v2/dialog/dialog.composable'
import DialogContainer from '@/components/v2/dialog/DialogContainer.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const dialog = useDialog({
  component: () => import('@/ExampleDialog.vue'),
})
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="h-screen flex items-center justify-center">
        <AnimatePresence>
          <Motion
            v-if="!dialog.isOpen()"
            :transition="{
              duration: 0.4,
              type: 'spring',
              bounce: 0.2,
            }"
            layout-id="test"
          >
            <Button
              variant="secondary-gray"
              @click="dialog.open()"
            >
              <Motion
                :transition="{
                  duration: 0.4,
                  type: 'spring',
                  bounce: 0.2,
                }"
                layout-id="title"
              >
                Open
              </Motion>
            </Button>
          </Motion>
        </AnimatePresence>
      </div>

      <DialogContainer />
    </ThemeProvider>
  </ConfigProvider>
</template>
