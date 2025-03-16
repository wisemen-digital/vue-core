<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import { useDialog } from '@/packages/@next/dialog/dialog.composable'
import DialogContainer from '@/packages/@next/dialog/DialogContainer.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const dialog = useDialog({
  component: () => import('@/ExampleDialog.vue'),
})

const basicDialog = useDialog({
  component: () => import('@/ExampleDialogBasic.vue'),
})
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div
        :class="{
          'scale-98': dialog.isOpen(),
        }"
        class="h-screen flex items-center flex-col justify-center duration-300"
      >
        <Button
          @click="basicDialog.open()"
        >
          Open basic dialog
        </Button>

        <div class="size-40">
          <AnimatePresence>
            <Motion
              v-if="!dialog.isOpen()"
              :transition="{
                duration: 0.4,
                type: 'spring',
                bounce: 0.2,
              }"
              layout-id="test"
              class="inline-block"
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
      </div>

      <DialogContainer />
    </ThemeProvider>
  </ConfigProvider>
</template>
