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

import type { RouteTabItem } from '@/types/tabItem.type'

import AppText from '../text/AppText.vue'

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
  const tab = props.tabs.find(tab => tab.to.name === activeRouteName) ?? null

  if (tab === null) {
    throw new Error(`Tab with route name "${String(activeRouteName)}" not found`)
  }

  void router.push(tab.to)
})

function isTabActive(tab: RouteTabItem): boolean {
  return tab.to.name === activeRouteName.value
}

// TODO: tabs should render a RouterLink instead of a button
</script>

<template>
  <TabsRoot v-model="computedModel">
    <TabsList class="relative flex border-b border-solid border-border">
      <TabsIndicator class="absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-t-full bg-primary px-8 duration-200" />

      <TabsTrigger
        v-for="tab of tabs"
        :key="tab.label"
        :value="(tab.to.name as string)"
        class="group py-2 outline-none"
      >
        <div class="rounded-button px-3 py-2 duration-200 group-hover:bg-muted-background group-focus-visible:bg-muted-background">
          <AppText
            :class="{
              'text-primary': isTabActive(tab),
              'text-muted-foreground': !isTabActive(tab),
            }"
            as="span"
            variant="subtext"
            class="duration-200"
          >
            {{ tab.label }}
          </AppText>
        </div>
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
