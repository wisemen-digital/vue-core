<script setup lang="ts">
import { TabsContent as RekaTabsContent } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/packages/@next/tabs/tabs.context'
import type { TabsContentProps } from '@/packages/@next/tabs/tabs.props'

const props = withDefaults(defineProps<TabsContentProps>(), {
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
