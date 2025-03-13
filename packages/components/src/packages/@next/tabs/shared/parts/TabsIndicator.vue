<script setup lang="ts">
import { TabsIndicator as RekaTabsIndicator } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectTabsContext } from '@/packages/@next/tabs/shared/tabs.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <RekaTabsIndicator
    :class="style.indicator({
      class: mergeClasses(customClassConfig.indicator, classConfig?.indicator),
    })"
  />
</template>
