<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { useProvideTabsContext } from '@/components/tabs/shared/tabs.context'
import type { TabsProps } from '@/components/tabs/shared/tabs.props'
import type { CreateTabsStyle } from '@/components/tabs/shared/tabs.style'
import { createTabsStyle } from '@/components/tabs/shared/tabs.style'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TabsProps>(), {
  testId: null,
  isDisabled: false,
  classConfig: null,
  direction: 'horizontal',
  variant: 'underline',
})

const modelValue = defineModel<string>({ required: true })

const tabsStyle = computed<CreateTabsStyle>(() => createTabsStyle({ variant: props.variant }))

const customClassConfig = useComponentClassConfig('tabs', { variant: props.variant })

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
