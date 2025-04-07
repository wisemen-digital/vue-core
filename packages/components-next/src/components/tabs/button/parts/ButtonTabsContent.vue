<script setup lang="ts">
import { TabsContent as RekaTabsContent } from 'reka-ui'

import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import type { ButtonTabsContentProps } from '@/components/tabs/button/buttonTabs.props'
import { useInjectTabsContext } from '@/components/tabs/shared/tabs.context'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<ButtonTabsContentProps>(), { testId: null })

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <RekaTabsContent
      :value="props.value"
      :class="style.content({
        class: mergeClasses(customClassConfig.content, classConfig?.content),
      })"
    >
      <slot />
    </RekaTabsContent>
  </TestIdProvider>
</template>
