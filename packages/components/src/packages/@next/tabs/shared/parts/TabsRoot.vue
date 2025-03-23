<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import { computed } from 'vue'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import type { ButtonTabsValue } from '@/packages/@next/tabs/button/buttonTabs.props'
import {
  type CreateTabsStyle,
  createTabsStyle,
} from '@/packages/@next/tabs/shared/style/tabs.style'
import { useProvideTabsContext } from '@/packages/@next/tabs/shared/tabs.context'
import type { TabsProps } from '@/packages/@next/tabs/shared/tabs.props'
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
      :class="tabsStyle.root({ class: mergeClasses(customClassConfig.root, classConfig?.root) })"
    >
      <slot />
    </RekaTabsRoot>
  </PrimitiveElement>
</template>
