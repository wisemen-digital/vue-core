<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'
import { addons } from 'storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import {
  onBeforeUnmount,
  ref,
} from 'vue'

const isDark = ref<boolean>(false)

const channel = addons.getChannel()

function onDarkModeChange(dark: boolean): void {
  isDark.value = dark
}

channel.on(DARK_MODE_EVENT_NAME, onDarkModeChange)

onBeforeUnmount(() => {
  channel.off(DARK_MODE_EVENT_NAME, onDarkModeChange)
})
</script>

<template>
  <!-- eslint-disable better-tailwindcss/no-unknown-classes -->
  <TooltipProvider>
    <div
      :class="[
        isDark ? 'dark' : 'light',
      ]"
      class="
        default flex items-center justify-center bg-primary p-4 text-primary
      "
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
