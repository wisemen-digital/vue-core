<script setup lang="ts" generic="TMeta">
import { TabsTrigger as RekaTabsTrigger } from 'reka-ui'

import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import type { ButtonTabsItemProps } from '@/components/tabs/button/buttonTabs.props'
import { useInjectTabsContext } from '@/components/tabs/shared/tabs.context'
import { mergeClasses } from '@/customClassVariants'

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
