<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import type { ButtonTabsValue } from '@/components/tabs/button/buttonTabs.props'
import { useProvideTabsContext } from '@/components/tabs/shared/tabs.context'
import type { TabsProps } from '@/components/tabs/shared/tabs.props'
import type { CreateTabsStyle } from '@/components/tabs/shared/tabs.style'
import { createTabsStyle } from '@/components/tabs/shared/tabs.style'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TabsProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  classConfig: null,
  direction: 'horizontal',
  variant: 'underline',
})

const model = defineModel<ButtonTabsValue>({
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
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <RekaTabsRoot
      v-model="delegatedModel"
      :orientation="props.orientation"
    >
      <slot />
    </RekaTabsRoot>
  </PrimitiveElement>
</template>
