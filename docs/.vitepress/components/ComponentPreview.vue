<script setup lang="ts">
import type { TabItem } from '@wisemen/vue-core'
import {
  AppCollapsable2,
  AppConfigProvider,
  AppSwitch,
  AppTabs,
  AppThemeProvider,
  useDarkMode,
} from '@wisemen/vue-core'
import { computed, ref } from 'vue'

const props = defineProps<{
  name: string
  files?: string
}>()

const darkMode = useDarkMode()

const showCode = ref<boolean>(false)
const parsedFiles = computed<string[]>(() => JSON.parse(decodeURIComponent(props.files ?? '')))

const isDark = computed<boolean>({
  get: () => darkMode.value.value === 'dark',
  set: (value) => {
    darkMode.value.value = value ? 'dark' : 'light'
  },
})

const tabItems = computed<TabItem[]>(() => {
  // Sort parsedFiles by first 'Demo.vue' and then by the file name
  const parsedFilesSorted = [
    ...parsedFiles.value,
  ].sort((a, b) => {
    if (a === 'Demo.vue') {
      return -1
    }

    if (b === 'Demo.vue') {
      return 1
    }

    return a.localeCompare(b)
  })

  return parsedFilesSorted.map((fileName) => ({
    label: fileName,
    value: fileName,
  }))
})

const selectedTab = ref<TabItem | null>(tabItems.value?.[0] ?? null)
</script>

<template>
  <AppThemeProvider :theme="darkMode.isEnabled.value ? 'dark' : 'light'">
    <div class="flex flex-col gap-2">
      <div class="vp-raw">
        <div class="flex justify-end gap-x-4">
          <AppSwitch
            v-model="isDark"
            label="Dark mode"
            value="dark"
          />

          <AppSwitch
            v-model="showCode"
            :style-config="{
              '--switch-label-font-size-default': '12px',
            }"
            label="Show code"
          />
        </div>
      </div>

      <div>
        <AppCollapsable2>
          <div v-if="!showCode">
            <div class="vp-raw flex items-center justify-center rounded-lg border border-solid border-gray-100 p-16 dark:border-black dark:bg-gray-950">
              <AppConfigProvider locale="en">
                <slot />
              </AppConfigProvider>
            </div>
          </div>

          <div v-else>
            <AppTabs
              v-if="selectedTab"
              v-model="selectedTab"
              :items="tabItems"
            >
              <template
                v-for="(fileName, index) in parsedFiles"
                :key="index"
              >
                <div
                  v-if="selectedTab.value === fileName"
                  :style="{
                    maxHeight: '500px',
                    overflowY: 'auto',
                  }"
                >
                  <slot :name="index" />
                </div>
              </template>
            </AppTabs>
          </div>
        </AppCollapsable2>
      </div>
    </div>
  </AppThemeProvider>
</template>
