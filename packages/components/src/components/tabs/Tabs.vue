<script setup lang="ts" generic="TMeta">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import { useTabsStyle } from '@/components/tabs/tabs.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { Stylable } from '@/types/stylable.type'
import type { TabItem } from '@/types/tabs.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = defineProps<{
  /**
   * All the tab items to render.
   */
  items: TabItem<TMeta>[]
} & Stylable<'tabs'>>()

defineSlots<{
  /**
   * Tabs content to display.
   * Wrap each content with VcTabsContent and set the value prop to the tab value for accessibility.
   */
  'default': () => void
  /**
   * Use this to add content to the left of the tab label.
   */
  'item-left': ({
    item,
  }: { item: TabItem<TMeta> }) => void
  /**
   * Use this to add content to the right of the tab label.
   */
  'item-right': ({
    item,
  }: { item: TabItem<TMeta> }) => void
}>()

const model = defineModel<TabItem<TMeta>>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const modelAsString = computed<string>({
  get: () => model.value.value,
  set: (value) => {
    model.value = props.items.find((tab) => tab.value === value)!
  },
})

const tabsStyle = useTabsStyle()

const containerClasses = computed<string>(() => tabsStyle.container())
const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const itemClasses = computed<string>(() => tabsStyle.item())
const itemContentClasses = computed<string>(() => tabsStyle.itemContent())
</script>

<template>
  <TabsRoot
    v-model="modelAsString"
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
          :value="item.value"
          :data-test-id="item.testId"
          :class="itemClasses"
          :disabled="item.isDisabled"
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
