<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import { computed } from 'vue'

import AppBadge from '@/components/badge/AppBadge.vue'
import { useTabsStyle } from '@/components/tabs/tabs.style'
import AppText from '@/components/text/AppText.vue'
import type { TabItem } from '@/types/tabItem.type'

const props = withDefaults(
  defineProps<{
  /**
   * Whether the tabs should take up the full width of the container.
   */
    isFullWidth?: boolean
    /**
     * All the tabs to be rendered.
     */
    items: TabItem[]
  }>(),
  {
    isFullWidth: false,
  },
)

const activeTabModel = defineModel<TabItem>('tab', {
  required: true,
})

const computedModel = computed<string>({
  get: () => activeTabModel.value.id,
  set: (value) => {
    activeTabModel.value = props.items.find((tab) => tab.id === value)!
  },
})

function isTabActive(tab: TabItem): boolean {
  return tab.id === computedModel.value
}

const tabsStyle = useTabsStyle()

const listClasses = computed<string>(() => tabsStyle.list())
const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const routeTriggerGroup = computed<string>(() => tabsStyle.triggerGroup())
const routeTriggerTab = computed<string>(() => tabsStyle.triggerTab())
</script>

<template>
  <TabsRoot v-model="computedModel">
    <TabsList
      :class="tabsStyle.list({
        isFullWidth: props.isFullWidth,
      })"
    >
      <TabsIndicator :class="indicatorClasses" />

      <TabsTrigger
        v-for="tab of items"
        :key="tab.label"
        :data-test-id="tab.testId"
        :value="tab.id"
        :class="tabsStyle.triggerGroup({
          isFullWidth: props.isFullWidth,
        })"
      >
        <div
          :class="tabsStyle.triggerTab({
            isFullWidth: props.isFullWidth,
          })"
        >
          <AppText
            :class="tabsStyle.text({
              isActive: isTabActive(tab),
            })"
            as="span"
            variant="subtext"
          >
            {{ tab.label }}
          </AppText>
          <AppBadge
            v-if="tab.badge"
            :class="tab.badge.class"
          >
            {{ tab.badge.label }}
          </AppBadge>
        </div>
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
