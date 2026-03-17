<script setup lang="ts">
import { ChevronDownIcon } from '@wisemen/vue-core-icons'
import {
  DropdownMenuItem as RekaDropdownMenuItem,
  injectTabsRootContext,
} from 'reka-ui'
import type { Component } from 'vue'
import {
  computed,
  ref,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'

import { useInjectAdaptiveContentContext } from '@/ui/adaptive-content/adaptiveContent.context'
import { UIButton } from '@/ui/button/index'
import ColumnLayout from '@/ui/column-layout/ColumnLayout.vue'
import DropdownMenu from '@/ui/dropdown-menu/DropdownMenu.vue'
import { UINumberBadge } from '@/ui/number-badge/index'
import type { TabItemData } from '@/ui/tabs/tabs.context'
import { useInjectTabsContext } from '@/ui/tabs/tabs.context'
import { UIText } from '@/ui/text/index'

const props = defineProps<{
  hiddenTabsCount: number
  tabs: TabItemData[]
}>()

const i18n = useI18n()

const adaptiveDropdownRef = ref<InstanceType<typeof HTMLDivElement> | null>(null)

const hiddenTabs = computed<TabItemData[]>(
  () => [
    ...props.tabs,
  ].slice(-props.hiddenTabsCount),
)

const {
  activeTab,
  setAdaptiveDropdownRef,
  variant,
  variants,
} = useInjectTabsContext()

const {
  scheduleLayoutEvaluation,
} = useInjectAdaptiveContentContext()

const isActiveTabHidden = computed<boolean>(
  () => hiddenTabs.value.some((tab) => tab.value === activeTab.value?.value),
)

const labelText = computed<string>(() => {
  if (isActiveTabHidden.value) {
    return activeTab.value?.label ?? i18n.t('component.tabs.adaptive_dropdown.trigger.label')
  }

  return i18n.t('component.tabs.adaptive_dropdown.trigger.label')
})

const dropdownLeftIcon = computed<Component | undefined>(() => {
  return isActiveTabHidden.value ? activeTab.value?.icon : undefined
})

const activeButtonClasses = computed<Record<string, boolean>>(() => ({
  'text-brand-secondary!': isActiveTabHidden.value && (variant.value === 'underline' || variant.value === 'button-brand'),
  'text-secondary!': isActiveTabHidden.value && variant.value === 'button-border',
}))

const tabsRootContext = injectTabsRootContext()

function onSelectTab(value: string): void {
  tabsRootContext.changeModelValue(value)
}

watch(activeTab, () => {
  scheduleLayoutEvaluation()
})

watch(() => props.hiddenTabsCount, () => {
  if (props.hiddenTabsCount === 0) {
    setAdaptiveDropdownRef(null)

    return
  }

  setAdaptiveDropdownRef(adaptiveDropdownRef.value)
})
</script>

<template>
  <DropdownMenu
    v-if="props.hiddenTabsCount > 0"
    popover-align="end"
  >
    <template #trigger>
      <div
        ref="adaptiveDropdownRef"
        :class="variants.dropdownTrigger()"
      >
        <div
          v-if="false"
          :class="variants.dropdownIndicator()"
        />
        <UIButton
          :class="[
            activeButtonClasses,
            {
              'hover:bg-transparent!': variant === 'button-border',
            },
          ]"
          :icon-left="dropdownLeftIcon"
          :icon-right="ChevronDownIcon"
          :label="labelText"
          class="relative z-10"
          variant="tertiary"
        />
      </div>
    </template>
    <template #content>
      <ColumnLayout
        align="center"
        class="w-full p-md"
      >
        <RekaDropdownMenuItem
          v-for="item in hiddenTabs"
          :key="item.value"
          :disabled="item.isDisabled"
          :class="variants.item({
            variant: 'underline',
          })"
          class="w-full"
          @select="() => onSelectTab(item.value)"
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
          <UINumberBadge
            v-if="item.count != null"
            :value="item.count.toString()"
            size="md"
          />
        </RekaDropdownMenuItem>
      </ColumnLayout>
    </template>
  </DropdownMenu>
</template>
