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
          :initial="{
            // Settings the initial state to `initial: false` breaks Motion animations inside the dialog
            width: isExpanded ? '97dvw' : '60rem',
            height: isExpanded ? '95dvh' : '40rem',
          }"
          :animate="{
            width: isExpanded ? '97dvw' : '60rem',
            height: isExpanded ? '95dvh' : '40rem',
          }"
          :transition="{
            duration: 0.4,
            type: 'spring',
            bounce: 0,
          }"
          class="
            max-h-[calc(100dvh-2rem)] min-h-[calc(100dvh-2rem)]
            max-w-[calc(100dvw-2rem)] min-w-[calc(100dvw-2rem)]
            md:min-h-full md:min-w-full
          "
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
