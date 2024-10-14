<script setup lang="ts">
import type { TabItem } from '@wisemen/vue-core'
import {
  AppCollapsable,
  AppSwitch,
  AppTabs,
} from '@wisemen/vue-core'
import { computed, ref } from 'vue'

const props = defineProps<{
  name: string
  files?: string
}>()

const showCode = ref<boolean>(false)
const parsedFiles = computed<string[]>(() => JSON.parse(decodeURIComponent(props.files ?? '')))

const tabItems = computed<TabItem[]>(() => {
  return parsedFiles.value.map((fileName) => ({
    label: fileName,
    value: fileName,
  }))
})

const selectedTab = ref<TabItem | null>(tabItems.value?.[0] ?? null)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="vp-raw">
      <div class="flex justify-end">
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
      <AppCollapsable>
        <div v-if="!showCode">
          <slot />
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
              <div v-if="selectedTab.value === fileName">
                <slot :name="index" />
              </div>
            </template>
          </AppTabs>
        </div>
      </AppCollapsable>
    </div>
  </div>
</template>
