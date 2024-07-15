<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useTabsStyle } from '@/components/tabs/tabs.style'
import AppText from '@/components/text/AppText.vue'
import type { RouteTabItem } from '@/types/tabItem.type'

const props = defineProps<{
  tabs: RouteTabItem[]
}>()

const route = useRoute()
const router = useRouter()

const activeRouteName = computed<string>({
  get: () => route.name as string,
  set: (value: string) => {
    const tab = props.tabs.find((tab) => tab.to.name === value) ?? null

    if (tab === null) {
      throw new Error(`Tab with route name "${String(value)}" not found`)
    }

    void router.push(tab.to)
  },
})

function isTabActive(tab: RouteTabItem): boolean {
  return tab.to.name === activeRouteName.value
}

// TODO: tabs should render a RouterLink instead of a button

const tabsStyle = useTabsStyle()

const listClasses = computed<string>(() => tabsStyle.list())
const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const routeTriggerGroup = computed<string>(() => tabsStyle.routeTriggerGroup())
const routeTriggerTab = computed<string>(() => tabsStyle.routeTriggerTab())
</script>

<template>
  <TabsRoot v-model="activeRouteName">
    <TabsList :class="listClasses">
      <TabsIndicator :class="indicatorClasses" />

      <TabsTrigger
        v-for="tab of tabs"
        :key="tab.label"
        :value="(tab.to.name as string)"
        :class="routeTriggerGroup"
      >
        <div :class="routeTriggerTab">
          <AppText
            :class="tabsStyle.routeText({
              isActive: isTabActive(tab),
            })"
            as="span"
            variant="subtext"
          >
            {{ tab.label }}
          </AppText>
        </div>
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
