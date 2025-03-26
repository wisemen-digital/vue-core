<script setup lang="ts">
import { computed } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { useDarkMode } from '@/composables/darkMode.composable'

const appearance = useDarkMode()

const isDark = computed<boolean>({
  get: () => appearance.value === 'dark',
  set: (value) => appearance.value = value ? 'dark' : 'light',
})
</script>

<template>
  <div>
    <ConfigProvider
      locale="en-NL"
      teleport-target-selector="#teleport-target"
    >
      <ThemeProvider :appearance="appearance">
        <div class="h-screen flex items-center justify-center gap-lg bg-primary">
          <div class="absolute top-4 right-4">
            <input
              v-model="isDark"
              type="checkbox"
            >
          </div>

          <slot />
        </div>

        <div id="teleport-target" />
      </ThemeProvider>
    </ConfigProvider>
  </div>
</template>
