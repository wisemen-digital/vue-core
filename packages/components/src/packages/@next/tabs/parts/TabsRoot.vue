<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import {
  type CreateTabsStyle,
  createTabsStyle,
} from '@/packages/@next/tabs/style/tabs.style'
import { useProvideTabsContext } from '@/packages/@next/tabs/tabs.context'
import type { TabsProps } from '@/packages/@next/tabs/tabs.props'
import type { TabsValue } from '@/packages/@next/tabs/tabs.type'
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

const tabsStyle = computed<CreateTabsStyle>(() => createTabsStyle({
  variant: props.variant,
}))

const customClassConfig = useComponentClassConfig('tabs', {
  variant: props.variant,
})

useProvideTabsContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: tabsStyle,
})
</script>

<template>
  <RekaTabsRoot
    v-model="delegatedModel"
    :class="tabsStyle.root({ class: mergeClasses(customClassConfig.root, classConfig?.root) })"
  >
    <slot />
  </RekaTabsRoot>
</template>
