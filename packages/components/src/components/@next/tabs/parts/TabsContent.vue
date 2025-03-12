<script setup lang="ts">
import { TabsContent as RekaTabsContent } from 'reka-ui'

import PrimitiveElement from '@/components/@next/shared/PrimitiveElement.vue'
import { useInjectTabsContext } from '@/components/@next/tabs/tabs.context'
import type { TabsContentProps } from '@/components/@next/tabs/tabs.props'
import { mergeClasses } from '@/customClassVariants'

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
