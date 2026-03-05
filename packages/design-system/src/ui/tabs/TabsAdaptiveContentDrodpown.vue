<script setup lang="ts">
import { ChevronDownIcon } from '@wisemen/vue-core-icons'
import {
  DropdownMenuItem as RekaDropdownMenuItem,
  TabsTrigger as RekaTabsTrigger,
} from 'reka-ui'
import type { Component } from 'vue'
import {
  computed,
  watch,
} from 'vue'

import { useInjectAdaptiveContentContext } from '@/ui/adaptive-content/adaptiveContent.context'
import { UIButton } from '@/ui/button/index'
import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import { UINumberBadge } from '@/ui/number-badge/index'
import RowLayout from '@/ui/row-layout/RowLayout.vue'
import type { TabItemData } from '@/ui/tabs/tabs.context'
import { useInjectTabsContext } from '@/ui/tabs/tabs.context'
import { UIText } from '@/ui/text/index'

const props = defineProps<{
  hiddenTabsCount: number
  tabs: TabItemData[]
}>()

const hiddenTabs = computed<TabItemData[]>(
  () => [
    ...props.tabs,
  ].slice(-props.hiddenTabsCount),
)

const {
  activeTab, variants,
} = useInjectTabsContext()

const {
  scheduleLayoutEvaluation,
} = useInjectAdaptiveContentContext()

const labelText = computed<string>(() => {
  const isActiveTabHidden = hiddenTabs.value.some((tab) => tab.value === activeTab.value?.value)

  if (isActiveTabHidden) {
    return activeTab.value?.label ?? ''
  }

  return 'More'
})

const dropdownLeftIcon = computed<Component | undefined>(() => {
  const isActiveTabHidden = hiddenTabs.value.some((tab) => tab.value === activeTab.value?.value)

  return isActiveTabHidden ? activeTab.value?.icon : undefined
})

watch(activeTab, () => {
  scheduleLayoutEvaluation()
})
</script>

<template>
  <DropdownMenu
    v-if="props.hiddenTabsCount > 0"
  >
    <template #trigger>
      <RowLayout
        justify="center"
      >
        <UIButton
          :icon-left="dropdownLeftIcon"
          :icon-right="ChevronDownIcon"
          :label="labelText"
          variant="secondary"
        />
      </RowLayout>
    </template>
    <template #content>
      <ColumnLayout
        align="center"
        class="w-full p-md"
      >
        <RekaDropdownMenuItem
          v-for="item in hiddenTabs"
          :key="item.value"
          class="w-full"
        >
          <RekaTabsTrigger
            :value="item.value"
            :disabled="item.isDisabled"
            :class="variants.item()"
            class="w-full"
          >
            <component
              :is="item.icon"
              v-if="item.icon != null"
              class="size-4 shrink-0"
            />
            <UIText
              v-if="item.label != null"
              :text="item.label"
              class="text-xs"
            >
              {{ item.label }}
            </UIText>
            <slot v-else />
            <UINumberBadge
              v-if="item.count != null"
              :value="item.count.toString()"
              size="sm"
            />
          </RekaTabsTrigger>
        </RekaDropdownMenuItem>
      </ColumnLayout>
    </template>
  </DropdownMenu>
</template>
