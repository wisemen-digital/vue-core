<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import type { CustomComponentVariant } from '@/class-variant/classVariant.type'
import { getCustomComponentVariant } from '@/class-variant/customClassVariants'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { useProvideTabsContext } from '@/components/tabs/shared/tabs.context'
import type { TabsProps } from '@/components/tabs/shared/tabs.props'
import type { CreateTabsStyle } from '@/components/tabs/shared/tabs.style'
import { createTabsStyle } from '@/components/tabs/shared/tabs.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TabsProps>(), {
  testId: null,
  isDisabled: false,
  classConfig: null,
  direction: 'horizontal',
  variant: 'underline',
})

const modelValue = defineModel<string>({ required: true })

const { theme } = injectThemeProviderContext()

const tabsStyle = computed<CreateTabsStyle>(() => createTabsStyle({ variant: props.variant }))

const customClassConfig = computed<CustomComponentVariant<'tabs'>>(
  () => getCustomComponentVariant('tabs', theme.value, { variant: props.variant }),
)

useProvideTabsContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: tabsStyle,
})
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <RekaTabsRoot
      v-model="modelValue"
      :orientation="props.orientation"
    >
      <slot />
    </RekaTabsRoot>
  </TestIdProvider>
</template>
