<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import {
  computed,
  ref,
  watch,
} from 'vue'
import type { RouteRecordName } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

import AppBadge from '@/components/badge/AppBadge.vue'
import { useTabsStyle } from '@/components/tabs/tabs.style'
import AppText from '@/components/text/AppText.vue'
import type { RouteTabItem } from '@/types/tabItem.type'

const props = defineProps<{
  tabs: RouteTabItem[]
}>()

const route = useRoute()
const router = useRouter()
const activeRouteName = ref<RouteRecordName>(route.name as RouteRecordName)

const computedModel = computed<string>({
  get: () => activeRouteName.value as string,
  set: (value) => {
    activeRouteName.value = value as RouteRecordName
  },
})

watch(() => route.name, (routeName) => {
  if (routeName !== null && routeName !== undefined) {
    activeRouteName.value = routeName
  }
}, {
  immediate: true,
})

watch(activeRouteName, (activeRouteName) => {
  const tab = props.tabs.find((tab) => tab.to.name === activeRouteName) ?? null

  if (tab === null) {
    throw new Error(`Tab with route name "${String(activeRouteName)}" not found`)
  }

  void router.push(tab.to)
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
  <TabsRoot v-model="computedModel">
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
