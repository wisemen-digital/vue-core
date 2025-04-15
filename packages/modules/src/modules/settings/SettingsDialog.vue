<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import {
  VcDialogContent,
  VcDialogDescription,
  VcDialogOverlay,
  VcDialogOverlayTransition,
  VcDialogRoot,
  VcDialogTitle,
} from '@wisemen/vue-core-components'
import { Motion } from 'motion-v'

import { useProvideSettingsDialogContext } from '@/modules/settings/settingsDialog.context'
import LayoutStackItem from '@/modules/stacked-layout/parts/LayoutStackItem.vue'

const isExpanded = useLocalStorage<boolean>('is-dialog-expanded', false)

useProvideSettingsDialogContext({ isExpanded })
</script>

<template>
  <VcDialogRoot>
    <VcDialogContent>
      <LayoutStackItem>
        <Motion
          :data-is-expanded="isExpanded"
          :initial="false"
          :animate="{
            width: isExpanded ? '98vw' : '60rem',
            height: isExpanded ? '98vh' : '40rem',
          }"
          :transition="{
            duration: 0.4,
            type: 'spring',
            bounce: 0,
          }"
          class="max-h-[98vh] max-w-[98vw]"
        >
          <VcDialogTitle class="sr-only">
            <h1>
              Settings
            </h1>
          </VcDialogTitle>

          <VcDialogDescription class="sr-only">
            <h1>
              Manage your application settings, preferences and more.
            </h1>
          </VcDialogDescription>

          <slot />
        </Motion>
      </LayoutStackItem>
    </VcDialogContent>

    <VcDialogOverlay>
      <VcDialogOverlayTransition />
    </VcDialogOverlay>
  </VcDialogRoot>
</template>
