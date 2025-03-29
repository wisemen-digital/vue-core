<script setup lang="ts">
import { TabsContent as RekaTabsContent } from 'reka-ui'

import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import type { ButtonTabsContentProps } from '@/components/tabs/button/buttonTabs.props'
import { useInjectTabsContext } from '@/components/tabs/shared/tabs.context'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<ButtonTabsContentProps>(), {
  id: null,
  testId: null,
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
    <RekaTabsContent
      :value="JSON.stringify(props.value)"
      :class="style.content({
        class: mergeClasses(customClassConfig.content, classConfig?.content),
      })"
    >
      <slot />
    </RekaTabsContent>
  </PrimitiveElement>
</template>
