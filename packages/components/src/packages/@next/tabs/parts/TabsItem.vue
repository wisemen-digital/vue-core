<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/packages/@next/tabs/tabs.context'
import type { TabItemProps } from '@/packages/@next/tabs/tabs.props'

const props = withDefaults(defineProps<TabItemProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
})

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <PrimitiveElement
    :id="props.id"
    :test-id="props.testId"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaTabsTrigger
        :value="JSON.stringify(props.value)"
        :class="style.item({
          class: mergeClasses(customClassConfig.item, classConfig?.item),
        })"
      >
        <slot />
      </RekaTabsTrigger>
    </InteractableElement>
  </PrimitiveElement>
</template>
