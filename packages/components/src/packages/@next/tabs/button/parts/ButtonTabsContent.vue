<script setup lang="ts">
import { TabsContent as RekaTabsContent } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import PrimitiveElement from '@/packages/@next/shared/PrimitiveElement.vue'
import type { ButtonTabsContentProps } from '@/packages/@next/tabs/button/buttonTabs.props'
import { useInjectTabsContext } from '@/packages/@next/tabs/shared/tabs.context'

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
