<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import type { ButtonProps } from '@/components-v2/button/button.props'
import Button from '@/components-v2/button/Button.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

// const dialog = useDialog({
//   overlay: () => import('...'),
//   transition: () => import('...'),
//   component: () => import('...'),
// })

const isDisabled = ref(false)

function onDisabled(): void {
  isDisabled.value = !isDisabled.value

  setTimeout(() => {
    isDisabled.value = !isDisabled.value
  }, 2000)
}
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="flex flex-col items-center size-full h-screen justify-center gap-8 bg-primary">
        <div
          v-if="false"
          class="flex gap-8"
        >
          <Button
            v-for="size in ['sm', 'md', 'lg', 'xl', '2xl']"
            :key="size"
            :class-config="{
              // iconRight: 'enabled:group-hover/button:translate-x-0.5 group-focus-visible/button:translate-x-0.5',
              // base: '',
            }"
            :size="size"
            icon-right="arrowRight"
          >
            Content
          </Button>
        </div>

        <div class="flex gap-8">
          <Button
            v-for="variant of ['primary', 'secondary-gray', 'secondary-color', 'tertiary-gray', 'tertiary-color', 'destructive-primary', 'destructive-secondary', 'destructive-tertiary']"
            :key="variant"
            :is-loading="false"
            :variant="(variant as ButtonProps['variant'])"
            size="sm"
            icon-left="search"
          >
            Cancel
          </Button>
        </div>
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
