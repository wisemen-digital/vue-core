<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import {
  type CreateTabsStyle,
  createTabsStyle,
} from '@/components/@next/tabs/style/tabs.style'
import { useProvideTabsContext } from '@/components/@next/tabs/tabs.context'
import type { TabsProps } from '@/components/@next/tabs/tabs.props'
import type { TabsValue } from '@/components/@next/tabs/tabs.type'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import {
  type ClassConfig,
  getComponentClassConfig,
  mergeClasses,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TabsProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  variant: 'underline',
})

const model = defineModel<TabsValue>({
  required: true,
})

const delegatedModel = computed<string>({
  get: () => JSON.stringify(model.value),
  set: (value) => {
    model.value = JSON.parse(value)
  },
})

const themeContext = injectThemeProviderContext()

const tabsStyle = computed<CreateTabsStyle>(() => createTabsStyle({
  variant: props.variant,
}))

const customClassConfig = computed<ClassConfig<'tabs'>>(
  () => getComponentClassConfig('tabs', themeContext.theme.value, {
    variant: props.variant,
  }),
)

useProvideTabsContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: tabsStyle,
})
</script>

<template>
  <RekaTabsRoot
    v-model="delegatedModel"
    :class="tabsStyle.base({ class: mergeClasses(customClassConfig.base, classConfig?.base) })"
  >
    <slot />
  </RekaTabsRoot>
</template>
