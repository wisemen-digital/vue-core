<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'

import InteractableElement from '@/components/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/components/@next/tabs/tabs.context'
import type { TabItemProps } from '@/components/@next/tabs/tabs.props'
import { mergeClasses } from '@/customClassVariants'

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
