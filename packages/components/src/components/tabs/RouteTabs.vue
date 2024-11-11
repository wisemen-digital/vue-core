<script setup lang="ts" generic="TMeta">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { tabsStyle } from '@/components/tabs/tabs.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'
import type { RouteTabItem } from '@/types/tabs.type'

const props = defineProps<{
  items: RouteTabItem<TMeta>[]
} & Stylable<'tabs'>>()

const themeProviderContext = injectThemeProviderContext()

const route = useRoute()
const router = useRouter()

const activeRouteName = computed<string>({
  get: () => route.name as string,
  set: (value: string) => {
    const tab = props.items.find((tab) => tab.to.name === value) ?? null

    if (tab === null) {
      throw new Error(`Tab with route name "${value}" not found`)
    }

    void router.push(tab.to)
  },
})

const style = tabsStyle()

const containerClasses = computed<string>(() => style.container())
const indicatorClasses = computed<string>(() => style.indicator())
const itemClasses = computed<string>(() => style.item())
const itemContentClasses = computed<string>(() => style.itemContent())
</script>

<template>
  <TabsRoot
    v-model="activeRouteName"
    :class="themeProviderContext.theme.value"
    class="tabs-variant-default"
  >
    <TabsList :class="containerClasses">
      <div class="relative">
        <TabsIndicator :class="indicatorClasses" />

        <TabsTrigger
          v-for="item of props.items"
          :key="item.label"
          :value="(item.to.name as string)"
          :data-test-id="item.testId"
          :class="itemClasses"
        >
          <div :class="itemContentClasses">
            <slot
              :item="item"
              name="item-left"
            />

            {{ item.label }}

            <slot
              :item="item"
              name="item-right"
            />
          </div>
        </TabsTrigger>
      </div>
    </TabsList>

    <slot />
  </TabsRoot>
</template>
