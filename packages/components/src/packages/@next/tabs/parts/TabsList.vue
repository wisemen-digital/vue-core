<script setup lang="ts">
import { TabsList as RekaTabsList } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectTabsContext } from '@/packages/@next/tabs/tabs.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <RekaTabsList
    :class="style.list({
      class: mergeClasses(customClassConfig.list, classConfig?.list),
    })"
  >
    <slot />
  </RekaTabsList>
</template>
