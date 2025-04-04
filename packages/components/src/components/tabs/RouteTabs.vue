<script setup lang="ts" generic="TMeta">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { computed } from 'vue'
import {
  RouterLink,
  useRoute,
} from 'vue-router'

import { useTabsStyle } from '@/components/tabs/tabs.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'
import type { RouteTabItem } from '@/types/tabs.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  items: RouteTabItem<TMeta>[]
} & Stylable<'tabs'>>()

const themeProviderContext = injectThemeProviderContext()

const route = useRoute()

const activeRouteName = computed<string>(() => route.name as string)

const tabsStyle = useTabsStyle()

const containerClasses = computed<string>(() => tabsStyle.container())
const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const itemClasses = computed<string>(() => tabsStyle.item())
const itemContentClasses = computed<string>(() => tabsStyle.itemContent())
</script>

<template>
  <TabsRoot
    :model-value="activeRouteName"
    :style="props.styleConfig"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value)"
    class="tabs-default"
  >
    <TabsList :class="containerClasses">
      <div class="relative flex">
        <TabsIndicator :class="indicatorClasses" />

        <TabsTrigger
          v-for="item of props.items"
          :key="item.label"
          :as-child="true"
          :value="(item.to.name as string)"
          :data-test-id="item.testId"
        >
          <RouterLink
            :to="item.to"
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
          </RouterLink>
        </TabsTrigger>
      </div>
    </TabsList>

    <slot />
  </TabsRoot>
</template>
