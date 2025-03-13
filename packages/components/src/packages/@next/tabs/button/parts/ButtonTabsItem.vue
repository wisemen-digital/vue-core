<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import InteractableElement from '@/packages/@next/shared/InteractableElement.vue'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import type { ButtonTabsItemProps } from '@/packages/@next/tabs/button/buttonTabs.props'
import { useInjectTabsContext } from '@/packages/@next/tabs/shared/tabs.context'

const props = withDefaults(defineProps<ButtonTabsItemProps>(), {
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
