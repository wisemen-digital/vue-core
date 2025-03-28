<script setup lang="ts">
import { useInjectTabsContext } from '@/components/tabs/shared/tabs.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTabsContext()
</script>

<template>
  <div :class="style.base({ class: mergeClasses(customClassConfig.base, classConfig?.base) })">
    <slot />
  </div>
</template>
